import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";

import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";
import { QueryRenderer, graphql } from "react-relay";
import { HomePageLoader } from "../Extras/Loaders";
import Wishlist from "./Wishlist";
import * as SecureStore from "expo-secure-store";
const ITEMS_PER_PAGE = 4;

export default function WishlistQuery({ navigation, route }) {
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
    return (
      <QueryRenderer
        environment={RelayEnvironment}
        query={graphql`
          query WishlistQueryAppQuery(
            $userId: String!
            $count: Int!
            $after: String
          ) {
            ...Wishlist_wishlist
          }
        `}
        variables={{
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
            <>
              <View
                style={{
                  display: "flex",
                  margin: 8,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text category="s1" style={{ fontWeight: "bold" }}>
                  {" "}
                  My Wishlist
                </Text>
              </View>
              <Wishlist wishlist={props} navigation={navigation} userId={userId} />
            </>
          );
        }}
      />
    );
  }
}
