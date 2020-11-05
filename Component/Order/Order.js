import React, { useState } from "react";
import {
  ListRenderItemInfo,
  StyleSheet,
  ToastAndroid,
  View,
} from "react-native";
import { Button, Layout, List, Text, Divider } from "@ui-kitten/components";
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";
import { QueryRenderer, graphql } from "react-relay";
import OrderList from "../ListPage/OrderList";

const ITEMS_PER_PAGE = 5;

export default function Order({ navigation }) {
  const userID = 1;
  const onItemClick = (index) => {
    console.log("on click", index);
    navigation.navigate("Details", {
      orderId: index,
    });
  };
  return (
    <>
      <QueryRenderer
        environment={RelayEnvironment}
        query={graphql`
          query OrderAppQuery($userId: ID!, $count: Int!, $after: String) {
            ...OrderList_orders
          }
        `}
        variables={{
          userId: userID,
          count: ITEMS_PER_PAGE,
          after: 0,
        }}
        render={({ error, props }) => {
          if (error) {
            return <Text>Error!</Text>;
          }
          if (!props) {
            return <Text>Loading...</Text>;
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
                  My Orders
                </Text>
              </View>
              <Layout style={styles.container} level="3">
                <OrderList orders={props} onItemClick={onItemClick} />
              </Layout>
            </>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 3,
  },
  item: {
    zIndex: 1,
  },
  divider: {
    margin: 3,
  },
});
