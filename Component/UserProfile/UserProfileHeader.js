import React from 'react';
import RelayEnvironment from '../../GraphQLUtils/RelayEnvironment';
import {createFragmentContainer, graphql} from 'react-relay';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text } from '@ui-kitten/components';
import ImageOverlay from '../Extras/ImageOverlay';

function UserProfileHeader(props) {
    return(
        <ImageOverlay
        style={styles.header}
        source={require("../../assets/profile-background.jpg")}
      >
        <Avatar
          style={styles.profileAvatar}
          source={require("../../assets/blank-profile.png")}
        />
        <Text style={styles.profileName} category="h5" status="control">
          {props.user.getUserById.firstName}
        </Text>
        <View style={styles.emailContainer}>
          <Text style={styles.email} status="control"> 
          {props.user.getUserById.email}
          </Text>
        </View>
      </ImageOverlay>  
    );
}

export default createFragmentContainer(
    UserProfileHeader, {
      user: graphql`
      # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
      fragment UserProfileHeader_user on Query {
        getUserById(id: $userID) {
          id
          firstName
          email
        }
      }
      `
    }
)

const styles = StyleSheet.create({
  header: {
    paddingVertical: 24,
    alignItems: "center",
  },
  profileAvatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    marginVertical: 16,
  },
  profileName: {
    zIndex: 1,
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  email: {
    marginVertical: 8,
  }
});
