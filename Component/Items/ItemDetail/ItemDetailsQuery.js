import React, {useState, useEffect} from "react";
import { Text } from "@ui-kitten/components";

import ItemDetail from "./ItemDetail";
import { QueryRenderer, graphql } from "react-relay";
import RelayEnvironment from "../../../GraphQLUtils/RelayEnvironment";
import {HomePageLoader} from '../../Extras/Loaders';
import * as SecureStore from "expo-secure-store"; 

const ITEMS_PER_PAGE = 4;
export default function ItemDetailQuery({ navigation, route }, props) {
  const { typeId } = route.params;
  const [userId, setUserId] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    SecureStore.getItemAsync('userId').then((userId) => {
      setUserId(userId);
      setLoading(false);
    });
  }, []);
  if(loading) {
    return(<HomePageLoader />);
  } else {
    return (
      <QueryRenderer
        environment={RelayEnvironment}
        query={graphql`
          query ItemDetailsQueryAppQuery(
            $itemId: String!
            $userId: String!
            $count: Int!
            $after: String
          ) {
            ...ItemDetail_item
            ...ItemDetail_comment
          }
        `}
        variables={{
          itemId: typeId,
          userId: userId,
          count: ITEMS_PER_PAGE,
          after: 0,
        }}
        render={({ error, props }) => {
          if (error) {
            return <Text>Error!</Text>;
          }
          if (!props) {
            return <HomePageLoader />;
          }
          return (
            <ItemDetail comment={props} item={props} />
          );
        }}
      />
    );
  }
}