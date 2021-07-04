import React, {useState, useEffect} from "react";
import { View, StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
import { QueryRenderer, graphql } from "react-relay";
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";
import CartList from "../ListPage/CartList";
import { AppColor } from "../Extras/Colors";
import { HomePageLoader } from "../Extras/Loaders";
import {ITEMS_PER_PAGE} from '../Extras/Constants';
import * as SecureStore from "expo-secure-store";

export default function CartQuery({ navigation }) {
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
        variables={{
          count: ITEMS_PER_PAGE,
          after: 0,
          userId: userId
        }}
        query={graphql`
          query CartQueryAppQuery($count: Int!, $after: String, $userId: String!) {
            ...CartList_cart
          }
        `}
        render={({ error, props }) => {
          if (error) {
            return <Text>{error.message}</Text>;
          } else if (props) {
            return (
              <>
                <View
                  style={{
                    display: "flex",
                    margin: 4,
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Text category="s1" style={{ fontWeight: "bold" }}>
                    {" "}
                    My Cart
                  </Text>
                </View>
                <Layout style={styles.container} level="3">
                  <CartList cart={props} navigation={navigation} userId={userId} />
                </Layout>
              </>
            );
          }
          return <HomePageLoader />;
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 3,
  },
});
