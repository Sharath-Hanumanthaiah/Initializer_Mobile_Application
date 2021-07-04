import { commitMutation, graphql } from "react-relay";
import { ConnectionHandler, ROOT_ID } from "relay-runtime";
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";

const mutation = graphql`
  mutation CreateOrderFromCartMutation($input: CreateOrderInput!) {
    createOrderFromCart(input: $input) {
      orderId
      deliveredBy
      totalAmount
      paymentMode
      status {
            payment
            confirmed
            delivered
        }
      paymentMetadata {
          gatewayName
          secretKey
          publicKey
          externalOrderId
        }
    }
  }
`;

export default (userId, coupenCode, paymentMode, checkOutModel, callback) => {
  const variables = {
    input: {
      userId,
      addressId: checkOutModel.address.id,
      coupenCode,
      paymentMode,
      orderId: checkOutModel.orderId
    },
  };
  commitMutation(RelayEnvironment, {
    mutation,
    variables,
    updater: (store) => {
      let orderDetails = "";
      const createOrderFromCart = store.getRootField("createOrderFromCart");
      const orderId = createOrderFromCart.getValue("orderId");
      const paymentMetadata = createOrderFromCart.getLinkedRecord("paymentMetadata");
      const externalOrderId = paymentMetadata.getValue("externalOrderId");
      const gatewayName = paymentMetadata.getValue("gatewayName");
      const secretKey = paymentMetadata.getValue("secretKey");
      const publicKey = paymentMetadata.getValue("publicKey");
      const root = store.getRoot();
      let cartConnection = ConnectionHandler.getConnection(
        root,
        "CartList_getUserCart"
      );
      const orderConnection = ConnectionHandler.getConnection(
        root,
        "OrderList_getUserOrderSet"
      );

      checkOutModel.cart.forEach((cart, index) => {
        if (checkOutModel.cart.length === (index - 1)) {
          orderDetails += cart.itemName;
        } else {
          orderDetails += cart.itemName + ",";
        }
        if (cartConnection) {
          ConnectionHandler.deleteNode(cartConnection, cart.id);
        }
      });
      if (orderConnection) {
        createOrderFromCart.setValue(orderDetails, "orderDetails");
        createOrderFromCart.setValue(orderId, "id");
        const edge = ConnectionHandler.createEdge(
          store,
          orderConnection,
          createOrderFromCart,
          "newOrderedge"
        );
        ConnectionHandler.insertEdgeBefore(orderConnection, edge);
      }
      callback(orderId, externalOrderId, gatewayName, secretKey, publicKey);
    },
    onCompleted: () => {},
    onError: (err) => console.error(err),
  });
};
