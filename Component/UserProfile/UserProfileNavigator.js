import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  View,
} from "react-native";
import {
  Button,
  Text,
} from "@ui-kitten/components";
import RelayEnvironment from '../../GraphQLUtils/RelayEnvironment';
import { QueryRenderer, graphql } from "react-relay";
import UserProfileHeader from "./UserProfileHeader";

import { AppColor } from "../Extras/Colors";
import Header from "../Header/Header";
import HeaderRight from "../Header/HeaderRight";
import AddressListQuery from '../Address/AddressListQuery';

import { Edit } from "../Extras/Icons";
import {HomePageLoader} from '../Extras/Loaders';

const ProfileStack = createStackNavigator();
const ITEMS_PER_PAGE = 5;

export default function UserProfileNavigator() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTitle: () => <Header />,
        headerRight: () => <HeaderRight />,
        headerStyle: {
          backgroundColor: AppColor.Vibrant,
        },
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}

function Profile({ navigation }) {
  const userID = 1;
  const editUserProfile = () => {
    navigation.navigate("EditUserProfile");
  };
  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={graphql`
        query UserProfileNavigatorAppQuery(
          $userID: ID!
    ) {
            ...UserProfileHeader_user
        }
      `}
      variables={{
        userID: userID,
        count: ITEMS_PER_PAGE,  
        after: 0
      }}
      render={({ error, props }) => {
        if (error) {
          return <Text>Error!</Text>;
        }
        if (!props) {
          return <HomePageLoader />;
        }
        return (
          <View style={styles.container}>
            <UserProfileHeader user ={props} navigation={navigation}/>
            <AddressListQuery
            navigation={navigation} />
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  editButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  addressContainer: {
    margin: 8,
  },
});
