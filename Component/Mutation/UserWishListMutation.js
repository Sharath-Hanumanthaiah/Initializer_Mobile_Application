import { commitMutation, graphql } from "react-relay";
import { ConnectionHandler, ROOT_ID } from "relay-runtime";
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";

const mutation = graphql`
  mutation UserWishListMutation($input: UserWishListInput!) {
    changeWishList(input: $input)
  }
`;

export default (id, userId, itemId, type, callback) => {
  const variables = {
    input: {
      userId,
      itemId: id,
      type,
    },
  };
  commitMutation(RelayEnvironment, {
    mutation,
    variables,
    updater: (store) => {
        const connection = store.get(id)
        connection.setValue(!connection.getValue('isWishlist'), 'isWishlist')
        const root = store.getRoot()
        const wishlistConnection = ConnectionHandler.getConnection(
          root,
          'Wishlist_getUserWishList'
        )
        if(type === "add" && wishlistConnection) {
            const edge = ConnectionHandler.createEdge(
                store,
                wishlistConnection,
                connection,
                'edge'
              )
              console.log("edge"+edge)
              ConnectionHandler.insertEdgeAfter(wishlistConnection, edge)
        }
        if(type === "remove" && wishlistConnection) {
            ConnectionHandler.deleteNode(wishlistConnection, id)
        }
    },
    onCompleted: () => {
        callback();
    },
    onError: (err) => console.error(err),
  });
};
