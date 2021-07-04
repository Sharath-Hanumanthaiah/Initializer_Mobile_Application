import { commitMutation, graphql } from "react-relay";
import { ConnectionHandler } from "relay-runtime";
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";

const mutation = graphql`
  mutation UserCartListMutation($input: UserCartInput!) {
    addUserCart(input: $input) {
      id
      userId
      itemId
      availabilityId
      quantity
    }
  }
`;

export default (
  derivedFromCart,
  itemId,
  userId,
  availabilityId,
  quantity,
  callback,
  pricePerAvailability
) => {
  const variables = {
    input: {
      id: {
        userId,
        itemId,
        availabilityId,
      },
      quantity,
    },
  };
  commitMutation(RelayEnvironment, {
    mutation,
    variables,
    updater: (store) => {
      const changedCartItem = store.getRootField("addUserCart");
      const changedCartItemId = changedCartItem.getValue("id");
      const root = store.getRoot();
      let cartConnection = ConnectionHandler.getConnection(
        root,
        "CartList_getUserCart"
      );
      if (!derivedFromCart && cartConnection) {
        let unit, value, discountPrice;
        const itemDetails = store.get(itemId);
        const itemAvailability =
          itemDetails.getLinkedRecords("itemAvailability");
        const imageLinks = itemDetails.getValue("imageLinks");
        itemAvailability.forEach((availability) => {
          if (availability.getValue("id") === availabilityId) {
            unit = availability.getValue("unit");
            value = availability.getValue("value");
            discountPrice = availability.getValue("discountPrice");
          }
        });

        changedCartItem.setValue(itemDetails.getValue("name"), "itemName");
        changedCartItem.setValue(value, "value");
        changedCartItem.setValue(unit, "unit");
        changedCartItem.setValue(discountPrice * quantity, "discountPrice");
        changedCartItem.setValue(imageLinks ? imageLinks[0] : "", "imageLink");
        const edge = ConnectionHandler.createEdge(
          store,
          cartConnection,
          changedCartItem,
          "newCartedge"
        );

        //remove before insert
        ConnectionHandler.deleteNode(cartConnection, changedCartItemId);
        ConnectionHandler.insertEdgeAfter(cartConnection, edge);
      } else if (quantity === 0) {
        const root = store.getRoot();
        let cartConnection = ConnectionHandler.getConnection(
          root,
          "CartList_getUserCart"
        );
        ConnectionHandler.deleteNode(cartConnection, changedCartItemId);
      } else {
        const cartItem = store.get(changedCartItemId);
        cartItem.setValue(quantity * pricePerAvailability, "discountPrice");
      }
    },
    onCompleted: () => {
      callback();
    },
    onError: (err) => console.error(err),
  });
};
