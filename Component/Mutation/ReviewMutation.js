import { commitMutation, graphql } from "react-relay";
import { ConnectionHandler } from "relay-runtime";
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";

const mutation = graphql`
  mutation ReviewMutation(
    $itemId: String!
    $userId: String!
    $rating: Int
    $review: String
  ) {
    addItemReview(itemId: $itemId, userId: $userId, rating: $rating, review: $review) {
      id
    }
  }
`;

// 3
export default (itemId, userId, rating, review, callback) => {
  // 4
  const variables = {
    itemId,
    userId,
    rating,
    review,
  };
  commitMutation(RelayEnvironment, {
    mutation,
    variables,
    updater: (store) => {
      //   if (id === undefined) {
      //     const connection = store.getRootField("upsertAddress");
      //     const root = store.getRoot();
      //     const address = connection.getLinkedRecord("address");
      //     const addressConnection = ConnectionHandler.getConnection(
      //       root,
      //       "AddressList_getAddress"
      //     );
      //     const edge = ConnectionHandler.createEdge(
      //       store,
      //       addressConnection,
      //       address,
      //       "edge"
      //     );
      //     ConnectionHandler.insertEdgeAfter(addressConnection, edge);
      //   }
    },
    onCompleted: () => {
      console.log("mutation complete");
      callback();
    },
    onError: (err) => console.error(err),
  });
};
