import React from "react";
import { Text, View } from "react-native";
import Feeds from "./Feeds";
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";
import { QueryRenderer, graphql } from "react-relay";
import {HomePageLoader} from '../Extras/Loaders'

const ITEMS_PER_PAGE = 4;
export default function FeedsContainer({ navigation }) {
  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={graphql`
        query FeedsContainerAppQuery($count: Int!, $after: String) {
          ...Feeds_feed
        }
      `}
      variables={{
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
        return <Feeds navigation={navigation} feed={props} content={props} />;
      }}
    />
  );
}
