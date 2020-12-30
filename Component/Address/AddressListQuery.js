import React from "react";
import RelayEnvironment from '../../GraphQLUtils/RelayEnvironment';
import { QueryRenderer, graphql } from "react-relay";
import {ITEMS_PER_PAGE} from '../Extras/Constants';
import {HomePageLoader} from '../Extras/Loaders';
import AddressList from './AddressList'

export default function AddressListQuery(props) {
    const userID = 1;
    const{navigation} = props;
    return(
        <QueryRenderer
        environment={RelayEnvironment}
        query={graphql`
          query AddressListQueryAppQuery(
            $userID: ID!,
            $count: Int!,
            $after: String
      ) {
        ...AddressList_address
          }
        `}
        variables={{
          userID: userID,
          count: ITEMS_PER_PAGE,  
          after: 0
        }}
        render={({ error, props }) => {
          if (error) {
            return <Text>Error!</Text>;
          }
          if (!props) {
            return <HomePageLoader />;
          }
          return (
              <AddressList 
              address={props} 
              navigation={navigation} />
          );
        }}
      />
    )
}