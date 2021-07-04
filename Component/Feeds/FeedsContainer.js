import React from "react";
import Feeds from "./Feeds";
import { graphql } from "react-relay";
import { usePreloadedQuery, useQueryLoader } from 'react-relay/hooks';
import FeedQuery from '../Feeds/__generated__/FeedsContainerAppQuery.graphql';

export default function FeedsContainer({ navigation, route }) {
  const {queryRef} = route.params;

  const data = usePreloadedQuery(
    graphql`
        query FeedsContainerAppQuery($count: Int!, $after: String) {
          ...Feeds_feed
        }
      `,
      queryRef
  )
  return <Feeds navigation={navigation} feed={data} content={data} />;
}
