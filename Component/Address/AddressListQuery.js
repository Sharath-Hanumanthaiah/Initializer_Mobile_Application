import React, {useState, useEffect} from "react";
import RelayEnvironment from '../../GraphQLUtils/RelayEnvironment';
import { QueryRenderer, graphql } from "react-relay";
import {ITEMS_PER_PAGE} from '../Extras/Constants';
import {HomePageLoader} from '../Extras/Loaders';
import AddressList from './AddressList';
import * as SecureStore from "expo-secure-store";

export default function AddressListQuery(props) {
  const{navigation, callBack} = props;
  const [userId, setUserId] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    SecureStore.getItemAsync("userId").then((userId) => {
      setUserId(userId);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <HomePageLoader />;
  } else {
    return(
        <QueryRenderer
        environment={RelayEnvironment}
        query={graphql`
          query AddressListQueryAppQuery(
            $userID: String!,
            $count: Int!,
            $after: String
      ) {
        ...AddressList_address
          }
        `}
        variables={{
          userID: userId,
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
              callBack={callBack}
              navigation={navigation}
              userId={userId} />
          );
        }}
      />
    )
  }
}