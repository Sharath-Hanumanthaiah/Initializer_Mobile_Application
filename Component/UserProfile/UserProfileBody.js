import React from "react";
import { View } from "react-native";
import { ListItem, Text, Icon, Divider, Layout } from "@ui-kitten/components";
import {
  UserEdit,
  ArrowRight,
  AddressIcon,
  PasswordIcon,
} from "../Extras/Icons";
import UserProfile from "./UserProfile";

export default function UserProfileBody(props) {
  const { navigation } = props;
  return (
    <Layout style={{height: '100%'}}>
      <Divider style={{ height: 30 }} />
      <ListItem
        title={(evaProps) => (
          <Text {...evaProps} category="s1">
            Update User Details
          </Text>
        )}
        accessoryLeft={UserEdit}
        accessoryRight={ArrowRight}
        onPress={() => {
          const userProfile = new UserProfile();
          navigation.navigate("EditUserProfile", {
            userProfile: userProfile,
          });
        }}
      />
      <ListItem
        title={(evaProps) => (
          <Text {...evaProps} category="s1">
            Manage Address
          </Text>
        )}
        accessoryLeft={AddressIcon}
        accessoryRight={ArrowRight}
        onPress={() => {
          navigation.navigate("Address");
        }}
      />
      <ListItem
        title={(evaProps) => (
          <Text {...evaProps} category="s1">
            Change Password
          </Text>
        )}
        accessoryLeft={PasswordIcon}
        accessoryRight={ArrowRight}
      />
      <Divider style={{ height: 30 }} />
      <ListItem
        title={(evaProps) => (
          <View style={{ alignItems: "center" }}>
            <Text category="s1" status="danger">
              Sign Out
            </Text>
          </View>
        )}
        // accessoryRight={InstallButton}
      />
      <Divider style={{ height: 30, minHeight: 100 }} />
    </Layout>
  );
}
