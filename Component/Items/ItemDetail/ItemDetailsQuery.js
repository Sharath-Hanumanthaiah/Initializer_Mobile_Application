import React from "react";
import { Text } from "@ui-kitten/components";

import ItemDetail from "./ItemDetail";
import { QueryRenderer, graphql } from "react-relay";
import RelayEnvironment from "../../../GraphQLUtils/RelayEnvironment";
import {HomePageLoader} from '../../Extras/Loaders';

const ITEMS_PER_PAGE = 4;
export default function ItemDetailQuery({ navigation, route }, props) {
  const { typeId } = route.params;
  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={graphql`
        query ItemDetailsQueryAppQuery(
          $itemId: ID!
          $userId: ID!
          $count: Int!
          $after: String
        ) {
          ...ItemDetail_item
          ...ItemDetail_comment
        }
      `}
      variables={{
        itemId: typeId,
        userId: 1,
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