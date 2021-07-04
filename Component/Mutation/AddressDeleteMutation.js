import { commitMutation, graphql } from "react-relay";
import {ConnectionHandler, ROOT_ID} from 'relay-runtime';
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";

const mutation = graphql`
  mutation AddressDeleteMutation($id: String!) {
    deleteAddress(id: $id)
  }
`;

export default (
  id
) => {
  const variables = {
    id: id
  };
  commitMutation(RelayEnvironment, {
    mutation,
    variables,
    updater : (store) => {
    //   const connection = store.getRootField('addAddress')
      const root = store.getRoot()
    //   const address = connection.getLinkedRecord('address')
      
      const addressConnection = ConnectionHandler.getConnection(
        root, 
        'AddressList_getAddress'
      )
      ConnectionHandler.deleteNode(addressConnection, id)
    //   const edge = ConnectionHandler.createEdge(
    //     store,
    //     addressConnection,
    //     address,
    //     'edge'
    //   )
    //   ConnectionHandler.insertEdgeAfter(addressConnection, edge)
    },
    onCompleted: () => {
      console.log("mutation complete");
    //   callback();
    },
    onError: (err) => console.error(err),
  });
};
