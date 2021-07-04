import React, { useState } from "react";
import { Button, Layout, Card, Input, Text } from "@ui-kitten/components";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import CreateAddress from "../Mutation/AddressMutation";
import { MutationPageLoader } from "../Extras/Loaders";
// import {PlusIcon, MinusIcon} from '../../Extras/Icons';
// import {AppColor} from '../../Extras/Colors';
export default function AddressModel({ route, navigation }) {
  const { address, userId } = route.params;
  const [name, setName] = useState(address.name);
  const [phoneNumber, setPhoneNumber] = useState(address.phoneNumber);
  const [firstLine, setFirstLine] = useState(address.firstLine);
  const [secondLine, setSecondLine] = useState(address.secondLine);
  const [landMark, setLandMark] = useState(address.landMark);
  const [pinCode, setPinCode] = useState(address.pinCode);
  
  const [nameInvalid, setNameInvalid] = useState(address.name.length > 0 ? "" :"danger");
  const [firstLineInvalid, setFirstLineInvalid] = useState( address.firstLine.length > 0 ? "" : "danger");
  const [pinCodeInvalid, setPinCodeInvalid] = useState(address.pinCode.length === 6 ? "" : "danger");
  const [phoneNumberInvalid, setPhoneNumberInvalid] = useState(address.phoneNumber.length === 10 ? "" : "danger");

  const [disabled, setDisabled] = useState(false);

  const onSubmit = () => {
    if(nameInvalid, firstLineInvalid, pinCodeInvalid, phoneNumberInvalid === "danger") {
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
    }else {
      setDisabled(true);
      const callback = () => {
        navigation.goBack();
      };
      CreateAddress(
        userId,
        name,
        phoneNumber,
        firstLine,
        secondLine,
        landMark,
        pinCode,
        address.id,
        callback
      );
    }
  };
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
            value={name}
            onChangeText={(name) => {
              name.length > 0 ? setNameInvalid("") : setNameInvalid("danger") 
              setName(name)
            }}
            disabled={disabled}
            status={nameInvalid}
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
            value={firstLine}
            onChangeText={(firstLine) => {
              firstLine.length > 0 ? setFirstLineInvalid("") : setFirstLineInvalid("danger")
              setFirstLine(firstLine)
            }}
            disabled={disabled}
            status={firstLineInvalid}
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
            value={secondLine}
            onChangeText={(secondLine) => setSecondLine(secondLine)}
            disabled={disabled}
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
            value={pinCode}
            onChangeText={(pinCode) => {
              pinCode.length === 6 ? setPinCodeInvalid("") : setPinCodeInvalid("danger")
              setPinCode(pinCode)
            }}
            disabled={disabled}
            status={pinCodeInvalid}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text category="s1" style={styles.text}>
            LandMark
          </Text>
          <Input
            placeholder="Enter LandMark"
            style={styles.input}
            value={landMark}
            onChangeText={(landMark) => setLandMark(landMark)}
            disabled={disabled}
          />
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
            value={phoneNumber}
            onChangeText={(phoneNumber) => {
              //currently supported - india
              phoneNumber.length !== 10
                ? setPhoneNumberInvalid("danger")
                : setPhoneNumberInvalid("");
              setPhoneNumber(phoneNumber);
            }}
            status={phoneNumberInvalid}
            disabled={disabled}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={onSubmit}
            activeOpacity={0.8}
            style={styles.buttonSubmit}
            disabled={disabled}
          >
            Submit
          </Button>
          <Button
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            style={styles.buttonSubmit}
            disabled={disabled}
          >
            Cancel
          </Button>
        </View>
        {disabled ? <MutationPageLoader /> : <></>}
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
    width: "30%",
    margin: 2,
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
    justifyContent: "space-between",
  },
  buttonSubmit: {
    marginHorizontal: 16,
    backgroundColor: "tomato",
    borderColor: "tomato",
  },
});
