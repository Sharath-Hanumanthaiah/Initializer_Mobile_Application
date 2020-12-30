import React from "react";
import { View, StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
// import './App.css';
// import fetchGraphQL from './fetchGraphQL';
// import graphql from 'babel-plugin-relay/macro';
// import {
//   RelayEnvironmentProvider,
//   preloadQuery_DEPRECATED,
//   usePreloadedQuery,
// } from 'react-relay/hooks';
import { QueryRenderer, createPaginationContainer, graphql } from "react-relay";
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";
import Display from "./Display";
import CartList from "../ListPage/CartList";
import {AppColor} from '../Extras/Colors';
const CartListPageQuery = graphql`
  query CartListPageQuery($count: Int!, $after: String) {
    ...Display_user
  }
`;
const ITEMS_PER_PAGE = 1;
export default function Cart({ navigation }) {
  const onCheckOut = (event) => {
    // navigation.navigate("Details", {
    //   orderId: index,
    // });
    navigation.navigate("CheckOut");
  }
  return (
    //   <QueryRenderer
    //   environment={RelayEnvironment}
    //   variables={{
    //     count: ITEMS_PER_PAGE,
    //     after: 0
    //   }}
    //   query={CartListPageQuery}
    //   render={({error, props}) => {
    //     if (error) {
    //       return <Text>{error.message}</Text>
    //     } else if (props) {
    //       console.log("going to display");
    //       return <Display user={props} />
    //     }
    //     return <Text>Loading</Text>
    //   }}
    // />);
    // <View style={{flex: 1, alignContent: 'center', alignItems: 'center', marginVertical: 120}}>
    //   <Text>IN PROGRESS...</Text>
    // </View>
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
        {/* <CartList />
        <Button style={{backgroundColor: AppColor.Vibrant, borderWidth: 0}} onPress={onCheckOut}>Checkout</Button> */}
        <Text>In Progress</Text>
      </Layout>
    </>
    // )
    // const userID = 1;
    // return (
    //   <QueryRenderer
    //     environment={RelayEnvironment}
    //     query={graphql`
    //       query CartRepositoryNameQuery($userID : ID!) {
    //         getUserById(id: $userID) {
    //           id
    //           ...Display_display
    //       }
    //       }
    //     `}
    //     variables={{userID}}
    //     render={({ error, props }) => {
    //       if (error) {
    //         console.log(error);
    //         return <Text>Error!</Text>;
    //       }
    //       if (!props) {
    //         return <Text>Loading...</Text>;
    //       }
    //       console.log(props.getUserById);
    //       return <Display display = {props.getUserById} />
    //       // return <div>User ID: {props.getAuthorById.firstName}</div>;
    //     }}
    //   />
    // );
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 3,
  },
});
