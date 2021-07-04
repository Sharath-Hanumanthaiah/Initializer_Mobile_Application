import { commitMutation, graphql } from "react-relay";
import { ConnectionHandler, ROOT_ID } from "relay-runtime";
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";

const mutation = graphql`
  mutation AddressMutation($input: AddressInput!) {
    upsertAddress(input: $input) {
      address {
        id
        name
        phoneNumber
        firstLine
        secondLine
        landMark
        pinCode
      }
    }
  }
`;

// 3
export default (
  userId,
  name,
  phoneNumber,
  firstLine,
  secondLine,
  landMark,
  pinCode,
  id,
  callback
) => {
  // 4
  const variables = {
    input: {
      userId,
      name,
      phoneNumber,
      id,
      firstLine,
      secondLine,
      landMark,
      pinCode,
    },
  };
  commitMutation(RelayEnvironment, {
    mutation,
    variables,
    updater: (store) => {
      if (id === undefined) {
        const connection = store.getRootField("upsertAddress");
        const root = store.getRoot();
        const address = connection.getLinkedRecord("address");
        const addressConnection = ConnectionHandler.getConnection(
          root,
          "AddressList_getAddress"
        );
        const edge = ConnectionHandler.createEdge(
          store,
          addressConnection,
          address,
          "edge"
        );
        ConnectionHandler.insertEdgeAfter(addressConnection, edge);
      }
    },
    onCompleted: () => {
      console.log("mutation complete");
      callback();
    },
    onError: (err) => console.error(err),
  });
};
