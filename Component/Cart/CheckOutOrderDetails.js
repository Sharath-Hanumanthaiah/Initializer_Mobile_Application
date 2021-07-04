import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Button,
  Layout,
  Card,
  List,
  Text,
  Divider,
  Radio,
  RadioGroup
} from "@ui-kitten/components";
import { Currency } from "../Extras/Constants";
import { AppColor } from "../Extras/Colors";

export default function CheckOutOrderDetails(props) {
  const { checkOutModel, callBack } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const onConfirmOrder = (orderId) => {
    callBack(null, paymentMethodKey[selectedIndex]);
  };
  const paymentMethod = ["COD(Cash on Delivery)","UPI", "Card"];
  const paymentMethodKey = ['M', 'U', 'C'];

  const renderHeader = (info, totalAmount) => {
    return (
      <Layout style={styles.header}>
        <Layout style={styles.detailsContainer} level="1">
          <Text category="h6" style={styles.title}>
            {"Delivery Address"}
          </Text>
          <View style={styles.marginVertical_8}>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text category="s1" style={styles.secondHeadingBold}>
                {info.name}
              </Text>
              <Text category="s1" style={styles.secondHeading}>
                {info.firstLine}
              </Text>
              <Text category="s1" style={styles.secondHeading}>
                {info.secondLine + ", " + info.pinCode}
              </Text>
              <View style={styles.secondContainer}>
                <Text category="s1" style={styles.secondHeadingBold}>
                  {"LandMark : "}
                </Text>
                <Text category="s1" style={styles.secondHeading}>
                  {info.landMark}
                </Text>
              </View>
              <View style={styles.secondContainer}>
                <Text category="s1" style={styles.secondHeadingBold}>
                  {"Phone Number : "}
                </Text>
                <Text category="s1" style={styles.secondHeading}>
                  {info.phoneNumber}
                </Text>
              </View>
            </View>
          </View>
          <Text category="h6" style={styles.title}>
            {"Amount Details"}
          </Text>
          <View style={styles.marginVertical_8}>
            <View style={styles.flexRowBetween}>
              <Text category="s1" style={styles.secondHeading}>
                {"Total Amount"}
              </Text>
              <Text category="s1" style={styles.secondHeading}>
                {`${Currency} `} {totalAmount !== null ? totalAmount : "0.0"}
              </Text>
            </View>
          </View>
          <Divider style={{margin: 8}}/>
          <View style={[styles.flexColumnBetween, { marginTop: 8 }]}>
            <Text category="h6" style={styles.title}>
              {"Select your Payment Option"}
            </Text>
            <RadioGroup
              selectedIndex={selectedIndex}
              onChange={index => setSelectedIndex(index)}
              style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
              {paymentMethod.map((method) => (
                <Radio>{method}</Radio>
              ))}
            </RadioGroup>
          </View>
          <Divider style={{margin: 8}} />
          <View style={{ display: "flex", flexDirection: "row", marginBottom: -16 }}>
            <Text category="h6" style={styles.title}>
              {"Item Details"}
            </Text>
          </View>
        </Layout>
      </Layout>
    );
  };
  const renderItem = (info) => {
    return (
      <Card style={styles.renderItem} disabled={true}>
        <View
          style={{
            alignItems: "flex-start",
            flexDirection: "row",
            // width: '100%',
            marginHorizontal: -8,
            height: 70,
          }}
        >
          <Image style={styles.image} source={{ uri: info.item.imageLink }} />
          <View
            style={{
              flex: 1,
              height: "100%",
              flexDirection: "column",
              marginLeft: 8,
              marginTop: 2,
              overflow: "hidden",
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                category="s1"
                adjustsFontSizeToFit={true}
                numberOfLines={2}
                style={{ fontWeight: "bold", width: "58%" }}
              >
                {info.item.itemName}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 10,
                justifyContent: "space-between",
              }}
            >
              <Text category="s1">
                {info.item.quantity + " × " + info.item.unit}
              </Text>
              <Text category="s1">
                {`${Currency} ` + info.item.discountPrice}
              </Text>
            </View>
          </View>
        </View>
      </Card>
    );
  };
  console.log("orderdet check", checkOutModel);
  return (
    <>
      <List
        ListHeaderComponent={renderHeader(
          checkOutModel.address,
          checkOutModel.totalAmount
        )}
        renderItem={renderItem}
        data={checkOutModel.cart}
      />
      <View>
        <Button
          style={{
            backgroundColor: AppColor.Vibrant,
            borderWidth: 0,
            marginHorizontal: 4,
            // width: "40%",
          }}
          onPress={onConfirmOrder}
        >
          Confirm and Order
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  renderItem: {
    marginBottom: 8,
    // marginHorizontal: -20
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: "flex-start",
  },
  header: {
    marginBottom: 8,
  },
  detailsContainer: {
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: "bold",
    width: "90%",
    marginVertical: 8,
  },
  secondHeading: {
    marginLeft: 12,
  },
  secondHeadingBold: {
    fontWeight: "bold",
    marginLeft: 12,
  },
  marginVertical_8: {
    marginVertical: 8,
  },
  secondContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  flexRowBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexColumnBetween: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
