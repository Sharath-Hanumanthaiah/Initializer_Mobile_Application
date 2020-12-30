import { commitMutation, graphql } from "react-relay";
import { ConnectionHandler } from "relay-runtime";
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";

const mutation = graphql`
  mutation UserProfileUpdateMutation($input: UserDetailsInput!) {
    updateUser(input: $input) {
      userDetails {
        id
        previousApiId
        firstName
        lastName
        email
      }
    }
  }
`;

// 3
export default (previousApiId, firstName, lastName, email, callback) => {
  // 4
  const variables = {
    input: {
      previousApiId,
      firstName,
      lastName,
      email,
    },
  };
  commitMutation(RelayEnvironment, {
    mutation,
    variables,
    updater: (store) => {
      //   if (previousApiId === undefined) {
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
