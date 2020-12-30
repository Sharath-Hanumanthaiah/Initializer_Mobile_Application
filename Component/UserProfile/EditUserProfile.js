import React, {useState} from 'react'
import {Button, Layout, Card, Input, Text} from '@ui-kitten/components';
import {View, StyleSheet, ScrollView, Alert} from 'react-native';
import UpdateProfile from '../Mutation/UserProfileUpdateMutation';
// import {PlusIcon, MinusIcon} from '../../Extras/Icons';
// import {AppColor} from '../../Extras/Colors';

export default function EditUserProfile({ route, navigation }) {
  const {userProfile} = route.params;

  const [firstName, setFirstName] = useState(userProfile.firstName)
  const [lastName, setLastName] = useState(userProfile.lastName)
  const [email, setEmail] = useState(userProfile.email)

  const [firstNameInvalid, setFirstNameInvalid] = useState(userProfile.firstName.length > 0 ? "" :"danger");
  const [emailInvalid, setEmailInvalid] = useState(userProfile.email.length > 0 ? "" :"danger");

  const onUpdate = () => {
    if(firstNameInvalid, emailInvalid === "danger") {
      Alert.alert(
        "Please provide required details",
        "",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
    } else {
      const callback = () => {
        navigation.goBack();
      };
      UpdateProfile(
        userProfile.previousApiId,
        firstName,
        lastName, 
        email,
        callback
      )
    }
  }
    return (
      <ScrollView>
        <Card disabled={true}>
          <View style={styles.inputContainer}>
            <Text category="s1" style={styles.text}>
              First Name
            </Text>
            <Input
              placeholder="Enter First Name"
              focusable={true}
              autoFocus={true}
              textContentType="name"
              style={styles.input}
              value={firstName}
              status={firstNameInvalid}
              onChangeText={
                (firstName) => {
                  setFirstName(firstName)
                  firstName.length > 0 ? setFirstNameInvalid(""): setFirstNameInvalid("danger")
                }
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <Text category="s1" style={styles.text}>
              Last Name
            </Text>
            <Input
              placeholder="Enter Last Name"
              textContentType="familyName"
              style={styles.input}
              value={lastName}
              onChangeText={
                (lastName) => {
                  setLastName(lastName)
                }
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <Text category="s1" style={styles.text}>
              Email Address
            </Text>
            <Input
              placeholder="Enter E-Mail address"
              textContentType="emailAddress"
              style={styles.input}
              keyboardType='email-address'
              value={email}
              status={emailInvalid}
              onChangeText={
                (email) => {
                  setEmail(email);
                 ( email.includes("@") && email.includes(".com") ) ? setEmailInvalid(""): setEmailInvalid("danger");
                }
              }
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={onUpdate}
              activeOpacity={0.8}
              style={styles.buttonSubmit}
            >
              Update
            </Button>
          </View>
        </Card>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  rating: {
    marginVertical: 8,
  },
  input: {
    marginVertical: 8,
    width: "70%",
    overflow: "hidden",
  },
  text: {
    fontWeight: "bold",
    alignSelf: "center",
    width: '30%',
    margin: 2
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 16,
    justifyContent: 'space-between'
  },
  buttonSubmit: {
    width: '100%',
    backgroundColor: "tomato",
    borderColor: "tomato",
  },
});