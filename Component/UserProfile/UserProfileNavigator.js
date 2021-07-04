import React, {useState, useEffect} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";
import { QueryRenderer, graphql } from "react-relay";
import UserProfileHeader from "./UserProfileHeader";
import UserProfileBody from "./UserProfileBody";
import AddressModel from "../Address/AddressModel";
import EditUserProfile from "./EditUserProfile";

import { AppColor } from "../Extras/Colors";
import Header from "../Header/Header";
import HeaderRight from "../Header/HeaderRight";
import AddressListQuery from "../Address/AddressListQuery";
import { HomePageLoader } from "../Extras/Loaders";
import * as SecureStore from "expo-secure-store";

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
        headerTitleAlign: 'left',
        headerBackTitleStyle: {fontSize: 14}
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Address" component={AddressListQuery} />
      <ProfileStack.Screen name="AddressModel" component={AddressModel} />
      <ProfileStack.Screen name="EditUserProfile" component={EditUserProfile} />
    </ProfileStack.Navigator>
  );
}

function Profile({ navigation }) {
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
          query UserProfileNavigatorAppQuery($userID: String!) {
            ...UserProfileHeader_user
          }
        `}
        variables={{
          userID: userId,
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
            <View style={styles.container}>
              <UserProfileHeader user={props} navigation={navigation} />
              <UserProfileBody navigation={navigation} />
            </View>
          );
        }}
      />
    );
  }
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
