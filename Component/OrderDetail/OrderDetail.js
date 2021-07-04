import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  RefreshControl,
} from "react-native";
import {
  Button,
  Layout,
  Card,
  List,
  Text,
  Divider,
} from "@ui-kitten/components";

import Timeline from "react-native-timeline-flatlist";
import CommentModel from "../Items/ItemDetail/CommentModel";
import { HomePageLoader } from "../Extras/Loaders";

import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";
import { QueryRenderer, graphql } from "react-relay";
import { useQueryLoader, fetchQuery } from "react-relay/hooks";
import { Currency } from "../Extras/Constants";
import { ArrowRight, ArrowUp } from "../Extras/Icons";
import GetCurrentOrderStatus from "../Extras/OrderStatus";
import { AppColor } from "../Extras/Colors";
import * as OrderDetailAppQuery from "./__generated__/OrderDetailAppQuery.graphql";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const paymentMode = {
  M: "COD(Cash on Delivery)",
  C: "Card",
  U: "UPI",
};

const generateTimelineData = (data, paymentMode) => {
  var lastPendingStatus = false;
  var keys = Object.keys(data);
  if (paymentMode === "M") {
    keys = keys.filter((key) => key !== "payment");
  }
  return keys.map((key) => {
    var circleColor;
    if (key === "payment") {
      if (data[key] !== "S") {
        lastPendingStatus = true;
      }
      return {
        title: key,
        description: " ",
        lineColor: data[key] === "S" ? AppColor.Green : AppColor.Grey,
        circleColor: data[key] === "S" ? AppColor.Green : AppColor.Warning,
      };
    }
    if (data[key]) {
      circleColor = AppColor.Green;
    } else {
      if (!lastPendingStatus) {
        circleColor = AppColor.Warning;
        lastPendingStatus = true;
      } else {
        circleColor = AppColor.Grey;
      }
    }
    return {
      title: key,
      description: " ",
      lineColor: data[key] ? AppColor.Green : AppColor.Grey,
      circleColor: circleColor,
    };
  });
};
export default function OrderDetail({ route, navigation }, props) {
  const { orderId, userId } = route.params;
  const [ModelVisible, setModelVisible] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [amountDetailsVisible, setAmountDetailsVisible] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [itemId, setItemId] = React.useState();
  const [queryRef, loadQuery] = useQueryLoader(OrderDetailAppQuery);
  const openCommentModel = (itemId) => {
    setItemId(itemId);
    setModelVisible(true);
  };
  const renderHeader = (info) => {
    const orderStatus = GetCurrentOrderStatus(info.status, info.paymentMode);
    console.log("info status", info.status);
    // const orderStatus = {text: "", status: ""}
    return (
      <Layout style={styles.header}>
        <Layout style={styles.detailsContainer} level="1">
          <Text category="h6" style={styles.title}>
            {"Delivery Address"}
          </Text>
          <View style={{ ...styles.marginVertical_8 }}>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text category="s1" style={styles.secondHeadingBold}>
                {info.addressDetails.name}
              </Text>
              <Text category="s1" style={styles.secondHeading}>
                {info.addressDetails.firstLine}
              </Text>
              <Text category="s1" style={styles.secondHeading}>
                {info.addressDetails.secondLine +
                  ", " +
                  info.addressDetails.pinCode}
              </Text>
              <View style={styles.secondContainer}>
                <Text category="s1" style={styles.secondHeadingBold}>
                  {"LandMark : "}
                </Text>
                <Text category="s1" style={styles.secondHeading}>
                  {info.addressDetails.landMark}
                </Text>
              </View>
              <View style={styles.secondContainer}>
                <Text category="s1" style={styles.secondHeadingBold}>
                  {"Phone Number : "}
                </Text>
                <Text category="s1" style={styles.secondHeading}>
                  {info.addressDetails.phoneNumber}
                </Text>
              </View>
            </View>
          </View>

          {/* date */}
          <View style={styles.marginVertical_8}>
            <View style={styles.rowSpaceBetween}>
              <Text category="h6" style={styles.title}>
                {"Ordered On :"}
              </Text>
              <Text category="c2" status="basic" style={styles.overflowTitle}>
                {new Date(info.orderAt).toDateString()}
              </Text>
            </View>
            <View style={styles.rowSpaceBetween}>
              <Text category="h6" style={styles.title}>
                {"Delivered By :"}
              </Text>
              <Text category="c2" status="basic" style={styles.overflowTitle}>
                {new Date(info.deliveredBy).toDateString()}
              </Text>
            </View>
          </View>

          {/* Payment Mode */}
          <View style={[styles.rowSpaceBetween]}>
            <Text category="h6" style={styles.title}>
              {"Payment Type"}
            </Text>
            <Text category="c2" status="basic" style={styles.overflowTitle}>
              {paymentMode[info.paymentMode]}
            </Text>
          </View>

          {/* Total Amount */}
          <View style={styles.rowSpaceBetween}>
            <Text category="h6" style={styles.title}>
              {"Total Amount"}
            </Text>
            <TouchableOpacity
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut
                );
                setAmountDetailsVisible(!amountDetailsVisible);
              }}
            >
              <View style={styles.rowSpaceBetween}>
                <Text
                  category="c2"
                  status="basic"
                  style={styles.overflowTitleAmount}
                >
                  {`${Currency} ${
                    info.totalAmount !== null ? info.totalAmount : "0.0"
                  }`}
                </Text>
                {amountDetailsVisible ? (
                  <ArrowUp style={styles.marginVertical_8} />
                ) : (
                  <ArrowRight style={styles.marginVertical_8} />
                )}
              </View>
            </TouchableOpacity>
          </View>
          {amountDetailsVisible && (
            <View style={{ display: "flex" }}>
              <View style={styles.rowSpaceEvenly}>
                <Text
                  category="s1"
                  appearance="hint"
                  style={styles.secondHeading}
                >
                  {"Net Price"}
                </Text>
                <Text category="s1" style={styles.secondHeading}>
                  {`${Currency} `}{" "}
                  {info.netAmount !== null ? info.netAmount : "0.0"}
                </Text>
              </View>
              <View style={styles.rowSpaceEvenly}>
                <Text
                  category="s1"
                  appearance="hint"
                  style={styles.secondHeading}
                >
                  {"Delivery Charge"}
                </Text>
                <Text category="s1" style={styles.secondHeading}>
                  {`+ ${Currency} `}{" "}
                  {info.deliveryCharge !== null ? info.deliveryCharge : "0.0"}
                </Text>
              </View>
              <View style={styles.rowSpaceEvenly}>
                <Text
                  category="s1"
                  appearance="hint"
                  style={styles.secondHeading}
                >
                  {"Coupen Discount"}
                </Text>
                <Text category="s1" style={styles.secondHeading}>
                  {`- ${Currency} `}{" "}
                  {info.coupenDiscount !== null ? info.coupenDiscount : "0.0"}
                </Text>
              </View>
            </View>
          )}

          {/* Order Status */}
          <View style={styles.rowSpaceBetween}>
            <Text category="h6" style={styles.title}>
              {"Status"}
            </Text>
            <TouchableOpacity
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut
                );
                setTimelineVisible(!timelineVisible);
              }}
            >
              <View style={styles.rowSpaceBetween}>
                <Text
                  category="c2"
                  // status={orderStatus.status}
                  style={{ color: orderStatus.status, ...styles.objectStatus }}
                >
                  {orderStatus.text}
                </Text>
                {timelineVisible ? (
                  <ArrowUp style={styles.marginVertical_8} />
                ) : (
                  <ArrowRight style={styles.marginVertical_8} />
                )}
              </View>
            </TouchableOpacity>
          </View>
          {timelineVisible && (
            <View>
              <Timeline
                timeStyle={{ textAlign: "center", width: 60 }}
                style={{
                  width: "100%",
                  marginHorizontal: -20,
                  marginTop: 8,
                  marginBottom: -16,
                }}
                titleStyle={{ marginTop: -12 }}
                // innerCircle={"dot"}
                data={generateTimelineData(info.status, info.paymentMode)}
              />
            </View>
          )}
        </Layout>
      </Layout>
    );
  };

  const renderItem = (info) => {
    return (
      <Card style={styles.renderItem}>
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
              <Button
                size="small"
                activeOpacity={0.8}
                style={styles.ratingButton}
                onPress={() => openCommentModel(info.item.itemId)}
              >
                Rate Item
              </Button>
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
              <Text category="s1">{`${Currency} ` + info.item.amount}</Text>
            </View>
          </View>
        </View>
      </Card>
    );
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchQuery(RelayEnvironment, OrderDetailAppQuery, {
      orderId: orderId,
    }).subscribe({
      complete: () => {
        setRefreshing(false);
      },
      error: (error) => {
        let e = error;
        console.log(error);
        setRefreshing(false);
      },
    });
  });

  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={graphql`
        query OrderDetailAppQuery($orderId: String!) {
          getUserOrderById(orderId: $orderId) {
            id
            orderAt
            deliveredBy
            netAmount
            deliveryCharge
            coupenDiscount
            totalAmount
            paymentMode
            orderList {
              itemId
              itemName
              quantity
              amount
              imageLink
              unit
            }
            addressDetails {
              id
              name
              phoneNumber
              firstLine
              secondLine
              landMark
              pinCode
            }
            status {
              payment
              confirmed
              delivered
            }
          }
        }
      `}
      variables={{
        orderId: orderId,
      }}
      render={({ error, props }) => {
        if (error) {
          return <Text>Error!</Text>;
        }
        if (!props) {
          return <HomePageLoader />;
        }
        return (
          <>
            <View style={styles.headerTextContainer}>
              <Text category="s1" style={{ fontWeight: "bold" }}>
                {"Order Details"}
              </Text>
            </View>
            <View style={styles.container}>
              <List
                ListHeaderComponent={renderHeader(props.getUserOrderById)}
                renderItem={renderItem}
                data={props.getUserOrderById.orderList}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
              />
              <CommentModel
                ModelVisible={ModelVisible}
                setModelVisible={setModelVisible}
                userId={userId}
                itemId={itemId}
              />
            </View>
          </>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: "bold",
    marginVertical: 8,
  },
  ratingButton: {
    height: 10,
    borderColor: "tomato",
    backgroundColor: "tomato",
  },
  header: {
    marginBottom: 8,
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: "flex-start",
  },
  detailsContainer: {
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  secondHeadingBold: {
    fontWeight: "bold",
    marginLeft: 12,
  },
  headerTextContainer: {
    display: "flex",
    margin: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
  marginVertical_8: {
    marginVertical: 8,
  },
  renderItem: {
    marginBottom: 8,
  },
  secondContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  rowSpaceBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowSpaceEvenly: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  overflowTitle: { fontSize: 14, marginVertical: 8 },
  objectStatus: { fontSize: 18, marginVertical: 8 },
  overflowTitleAmount: { fontSize: 25, marginVertical: 4 },
});
