import React from 'react'
import {Button, Layout, Card, Input, Text} from '@ui-kitten/components';
import {View, StyleSheet, ScrollView} from 'react-native';
// import {PlusIcon, MinusIcon} from '../../Extras/Icons';
// import {AppColor} from '../../Extras/Colors';

export default function AddressModel(props) {
    const {ModelVisible, setModelVisible} = props;

    return (
      <ScrollView>
        <Card disabled={true}>
          <View style={styles.inputContainer}>
            <Text category="s1" style={styles.text}>
              Name
            </Text>
            <Input
              placeholder="Enter Name"
              focusable={true}
              autoFocus={true}
              textContentType="name"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text category="s1" style={styles.text}>
              Address First Line
            </Text>
            <Input
              placeholder="Enter Address First Line"
              textContentType="streetAddressLine1"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text category="s1" style={styles.text}>
              Address Second Line
            </Text>
            <Input
              placeholder="Second Line..."
              textContentType="streetAddressLine2"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text category="s1" style={styles.text}>
              Pin Code
            </Text>
            <Input
              placeholder="Enter Pin Code"
              textContentType="postalCode"
              style={styles.input}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text category="s1" style={styles.text}>
              LandMark
            </Text>
            <Input placeholder="Enter LandMark" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Text category="s1" style={styles.text}>
              Phone Number
            </Text>
            <Input
              placeholder="Enter Phone Number"
              textContentType="telephoneNumber"
              style={styles.input}
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => setModelVisible(false)}
              activeOpacity={0.8}
              style={styles.buttonSubmit}
            >
              Submit
            </Button>
            <Button
              onPress={() => setModelVisible(false)}
              activeOpacity={0.8}
              style={styles.buttonSubmit}
            >
              Cancel
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
    marginHorizontal: 16,
    backgroundColor: "tomato",
    borderColor: "tomato",
  },
});