import React from 'react'
import {Button, Layout, Card, Input, Text} from '@ui-kitten/components';
import {View, StyleSheet, ScrollView} from 'react-native';
// import {PlusIcon, MinusIcon} from '../../Extras/Icons';
// import {AppColor} from '../../Extras/Colors';

export default function EditUserProfile(props) {
    const {ModelVisible, setModelVisible} = props;

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
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => setModelVisible(false)}
              activeOpacity={0.8}
              style={styles.buttonSubmit}
            >
              Create
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