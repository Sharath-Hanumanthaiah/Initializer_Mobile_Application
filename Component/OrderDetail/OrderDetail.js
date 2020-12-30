import React from "react";
import {
  StyleSheet,
  View,
  Image,
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
import {HomePageLoader} from '../Extras/Loaders';

import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";
import { QueryRenderer, graphql } from "react-relay";


const generateTimelineData = (data) => {
  return [
    {
      title: "Confirmed",
      description: " ",
      lineColor: data.confirmed ? "#388e3c" : "#808080",
      circleColor: data.confirmed ? "#388e3c" : "#808080",
    },
    {
      title: "Delivered",
      description: " ",
      lineColor: data.delivered ? "#388e3c" : "#808080",
      circleColor: data.delivered ? "#388e3c" : "#808080",
    },
  ];
};
export default function OrderDetail({ route }, props) {
  // const [product, setProduct] = useState(data);
  const { orderId } = route.params;
  const [ModelVisible, setModelVisible] = React.useState(false);

  const openCommentModel = () => {
    setModelVisible(true);
  };
  const renderHeader = (info) => {
    return (
      <Layout style={styles.header}>
        <Layout style={styles.detailsContainer} level="1">
          <Text category="h6" style={styles.title}>
            {"Delivery Address"}
          </Text>
          <View style={styles.marginVertical_8}>
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
            <View style={styles.flexRowBetween}>
              <Text category="s1" style={{ fontWeight: "bold" }}>
                {"Ordered On :"}
              </Text>
              <Text category="s1" style={{ fontWeight: "bold" }}>
                {new Date(info.orderAt).toDateString()}
              </Text>
            </View>
            <View style={styles.flexRowBetween}>
              <Text category="s1" style={{ fontWeight: "bold" }}>
                {"Delivered By :"}
              </Text>
              <Text category="s1" style={{ fontWeight: "bold" }}>
                {new Date(info.deliveredBy).toDateString()}
              </Text>
            </View>
          </View>

          <Text category="h6" style={styles.title}>
            {"Payment Details"}
          </Text>
          <View style={styles.marginVertical_8}>
            <View style={styles.flexRowBetween}>
              <Text
                category="s1"
                appearance="hint"
                style={styles.secondHeading}
              >
                {"Net Price"}
              </Text>
              <Text category="s1" style={styles.secondHeading}>
                {"₹ "} {info.netAmount !== null ? info.netAmount : "0.0"}
              </Text>
            </View>
            <View style={styles.flexRowBetween}>
              <Text
                category="s1"
                appearance="hint"
                style={styles.secondHeading}
              >
                {"Delivery Charge"}
              </Text>
              <Text category="s1" style={styles.secondHeading}>
                {"+ ₹ "} {info.deliveryCharge !== null ? info.deliveryCharge : "0.0"}
              </Text>
            </View>
            <View style={styles.flexRowBetween}>
              <Text
                category="s1"
                appearance="hint"
                style={styles.secondHeading}
              >
                {"Coupen Discount"}
              </Text>
              <Text category="s1" style={styles.secondHeading}>
                {"- ₹ " } {info.coupenDiscount !== null ? info.coupenDiscount : "0.0"}
              </Text>
            </View>
            <Divider style={{ margin: 4 }} />
            <View style={styles.flexRowBetween}>
              <Text category="s1" style={styles.secondHeading}>
                {"Total Amount"}
              </Text>
              <Text category="s1" style={styles.secondHeading}>
                {"₹ "} {info.totalAmount !== null ? info.totalAmount : "0.0"}
              </Text>
            </View>

            <View style={[styles.flexRowBetween, { marginTop: 8 }]}>
              <Text category="s1">{"Payment Type"}</Text>
              <Text category="s1">{"COD"}</Text>
            </View>
          </View>

          <Text category="h6" style={styles.title}>
            {"Order Status"}
          </Text>
          <Timeline
            timeStyle={{ textAlign: "center", width: 60 }}
            style={{
              width: "100%",
              marginHorizontal: -20,
              marginTop: 8,
              marginBottom: -16,
            }}
            titleStyle={{ marginTop: -12 }}
            innerCircle={"dot"}
            data={generateTimelineData(info.status)}
          />
          <View style={{ display: "flex", flexDirection: "row" }}>
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
      <Card style={styles.renderItem}>
        <View
          style={{
            alignItems: "flex-start",
            flexDirection: "row",
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
                onPress={openCommentModel}
              >
                Rate Product
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
                {info.item.quantity + " X " + info.item.unit}
              </Text>
              <Text category="s1">{"₹ " + info.item.amount}</Text>
            </View>
          </View>
        </View>
      </Card>
    );
  };
  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={graphql`
        query OrderDetailAppQuery($orderId: ID!) {
          getUserOrderById(orderId: $orderId) {
            id
            orderAt
            deliveredBy
            netAmount
            deliveryCharge
            coupenDiscount
            totalAmount
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
                // data={props.comments}
                data={props.getUserOrderById.orderList}
              />
              <CommentModel
                ModelVisible={ModelVisible}
                setModelVisible={setModelVisible}
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
    width: "90%",
    marginVertical: 8,
  },
  buttonGroupTextStyle: {
    fontSize: 13,
    color: "#8c8c8c",
  },
  buttonGroupSelectedTextStyle: {
    fontSize: 13,
    color: "#f77a55",
  },
  buttonGroupButtonStyle: {
    width: 60,
    borderRadius: 10,
  },
  buttonGroupButtonContainerStyle: {
    alignItems: "center",
  },
  buttonGroupSelectedButtonStyle: {
    backgroundColor: "#fff",
    borderColor: "#f77a55",
    borderWidth: 1,
    padding: 6,
    borderRadius: 10,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  ratingButton: {
    // marginTop: 10,
    // marginHorizontal: 5,
    height: 10,
    borderColor: "tomato",
    backgroundColor: "tomato",
  },
  rating: {
    marginVertical: 8,
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: "#bfbfbf",
  //   //   backgroundColor: 'background-basic-color-2',
  // },
  commentList: {
    flex: 1,
    //   backgroundColor: 'transparent',
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
  subtitle: {
    marginTop: 4,
  },
  wishlistButton: {
    position: "absolute",
    top: 74,
    right: 12,
  },
  description: {
    marginVertical: 16,
  },
  secondHeading: {
    marginLeft: 12,
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
  flexRowBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  marginVertical_8: {
    marginVertical: 8,
  },
  size: {
    marginBottom: 16,
  },
  colorGroup: {
    flexDirection: "row",
    marginHorizontal: -8,
  },
  colorRadio: {
    marginHorizontal: 8,
  },
  actionContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 5,
    marginHorizontal: 10,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  sectionLabel: {
    marginVertical: 8,
  },
  commentInputLabel: {
    fontSize: 16,
    marginBottom: 8,
    //   color: 'text-basic-color',
  },
  discount: {
    color: "#388e3c",
    fontWeight: "bold",
    marginTop: 16,
  },
  commentInput: {
    marginVertical: 8,
    width: "100%",
    height: 100,
    overflow: "hidden",
  },
  renderItem: {
    marginBottom: 8,
  },
  commentHeader: {
    flexDirection: "row",
    padding: 10,
  },
  commentAuthorContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  commentReactionsContainer: {
    flexDirection: "row",
    marginTop: 8,
    marginHorizontal: -8,
    marginVertical: -8,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  imageContainer: {
    flex: 1,
    marginBottom: -1,
    backgroundColor: "white",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  availablityContainer: {
    flexDirection: "row",
    height: "auto",
    flexWrap: "wrap",
    overflow: "scroll",
    marginVertical: 16,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  secondContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  amountButton: {
    borderRadius: 16,
  },
  actualPrice: {
    textAlign: "center",
    marginLeft: 1,
    textDecorationLine: "line-through",
    fontSize: 18,
  },
  discountPrice: {
    textAlign: "center",
    marginRight: 12,
    fontWeight: "bold",
    fontSize: 22,
  },
  Price: {
    marginVertical: 16,
  },
  incrementDecrementContainer: {
    position: "absolute",
    flexDirection: "row",
    right: 0,
    bottom: 6,
  },
  iconButton: {
    paddingHorizontal: 6,
  },
  PlusMinusButton: {
    borderRadius: 20,
    backgroundColor: "#fff",
    borderColor: "tomato",
  },
  amount: {
    textAlign: "center",
    fontSize: 25,
    width: 50,
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 4,
    margin: 4,
    padding: 4,
    width: 50,
    backgroundColor: "#388e3c",
    position: "absolute",
    top: 24,
    right: 5,
  },
  ratingContainerComment: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 4,
    margin: 4,
    padding: 4,
    width: 50,
    backgroundColor: "#388e3c",
  },
});
