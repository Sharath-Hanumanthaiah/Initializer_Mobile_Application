import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { QueryRenderer, graphql } from "react-relay";
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";
import CartList from "../ListPage/CartList";
import { HomePageLoader } from "../Extras/Loaders";
import {ITEMS_PER_PAGE} from '../Extras/Constants';
import CheckOut from './CheckOut';

export default function CheckOutQuery({ route, navigation }) {
    useEffect(() => {
        navigation.addListener('beforeRemove', () => {
            console.log("add remove checkout mutation here -- CheckOutQuery.js");
        })
    }, []);
    return (
        <QueryRenderer
          environment={RelayEnvironment}
          query={graphql`
            query CheckOutQueryAppQuery {
              checkOut
            }
          `}
          render={({ error, props }) => {
            if (error) {
              return <Text>{error.message}</Text>;
            } else if (props) {
              return (
                
                  <Layout style={styles.container} level="3">
                    <CheckOut route={route} navigation={navigation} />
                  </Layout>
              );
            }
            return <HomePageLoader />;
          }}
        />
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // margin: 3,
    },
  });
  