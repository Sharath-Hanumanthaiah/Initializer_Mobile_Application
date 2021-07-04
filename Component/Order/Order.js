import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";
import { QueryRenderer, graphql } from "react-relay";
import OrderList from "../ListPage/OrderList";
import {HomePageLoader} from '../Extras/Loaders';
import * as SecureStore from "expo-secure-store";

const ITEMS_PER_PAGE = 5;

export default function Order({ navigation }) {
  const [userId, setUserId] = useState();
  const [loading, setLoading] = useState(true);
  const onItemClick = (index) => {
    console.log("on click", index);
    navigation.navigate("Details", {
      orderId: index,
      userId: userId
    });
  };
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
      <>
        <QueryRenderer
          environment={RelayEnvironment}
          query={graphql`
            query OrderAppQuery($userId: String!, $count: Int!, $after: String) {
              ...OrderList_orders
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
                    margin: 4,
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
                  <OrderList orders={props} onItemClick={onItemClick} userId={userId} />
                </Layout>
              </>
            );
          }}
        />
      </>
    );
  }
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
