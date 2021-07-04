import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { View, StyleSheet } from "react-native";
import { Avatar, Text, Button, Layout } from "@ui-kitten/components";
import ImageOverlay from "../Extras/ImageOverlay";
import { Edit } from "../Extras/Icons";
import { AppColor } from "../Extras/Colors";
import UserProfile from "./UserProfile";

function UserProfileHeader(props) {
  const { navigation } = props;
  const editUserProfile = (info) => {
    // let userProfile = new UserProfile()
    // userProfile.firstName = info.firstName
    // userProfile.previousApiId = info.previousApiId
    // userProfile.lastName = info.lastName
    // userProfile.email = info.email
    // navigation.navigate("EditUserProfile", {
    //   userProfile: userProfile
    // });
  };
  React.useEffect(() => {
    const userProfile = new UserProfile()
    userProfile.firstName = props.user.getUserById.firstName;
    userProfile.id = props.user.getUserById.id;
    userProfile.lastName = props.user.getUserById.lastName;
    userProfile.email = props.user.getUserById.email;
  }, [props.user.getUserById]);
  return (
    <ImageOverlay
      style={styles.header}
      source={require("../../assets/profile-background.jpg")}
    >
      {/* // <Layout style={styles.header} level='1'> */}
      <Avatar
        style={styles.profileAvatar}
        source={require("../../assets/blank-profile.png")}
      />
      <Text style={styles.profileName} category="h5" status="control">
        {props.user.getUserById
          ? props.user.getUserById.firstName +
            " " +
            props.user.getUserById.lastName
          : ""}
      </Text>
      <View style={styles.emailContainer}>
        <Text style={styles.email} status="control">
          {props.user.getUserById ? props.user.getUserById.email : ""}
        </Text>
      </View>
      {/* <Button
        style={styles.editButton}
        appearance="ghost"
        status="basic"
        accessoryLeft={Edit}
        onPress={() => editUserProfile(props.user.getUserById)}
      /> */}
      {/* // </Layout> */}
     </ImageOverlay>
  );
}

export default createFragmentContainer(UserProfileHeader, {
  user: graphql`
    # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
    fragment UserProfileHeader_user on Query {
      getUserById(id: $userID) {
        id
        firstName
        lastName
        email
      }
    }
  `,
});

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    alignItems: "center",
  },
  profileAvatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    marginVertical: 16,
  },
  profileName: {
    // zIndex: 1,
    // color: 'black'
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  email: {
    marginVertical: 8,
  },
  editButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});
