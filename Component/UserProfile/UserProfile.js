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
import AddressList from '../Address/AddressList';

import { Edit } from "../Extras/Icons";

const ProfileStack = createStackNavigator();
const ITEMS_PER_PAGE = 5;

export default function UserProfile() {
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
        query UserProfileAppQuery(
          $userID: ID!,
          $count: Int!,
          $after: String
    ) {
            ...UserProfileHeader_user
            ...AddressList_address
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
          return <Text>Loading...</Text>;
        }
        return (
          <View style={styles.container}>
            <UserProfileHeader user ={props}/>
            <Button
              style={styles.editButton}
              appearance="ghost"
              status="basic"
              accessoryLeft={Edit}
              onPress={editUserProfile}
            />
            <AddressList address={props} navigation={navigation} />
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
