import React, { useState } from "react";
import { StyleSheet, View, ToastAndroid, Platform, Alert } from "react-native";
import { Button, Layout, Card, List, Text } from "@ui-kitten/components";

import RatingViewer from "../../Extras/RatingViewer";

import Carousel from "../../Carousel/Carousel";

import { WishListIconActive, WishListIconInactive } from "../../Extras/Icons";
import { Currency } from "../../Extras/Constants";

import { CartAction } from "./CartAction";
import CommentModel from "./CommentModel";
import RNPickerSelect from "react-native-picker-select";
import { createPaginationContainer, graphql } from "react-relay";
import * as SecureStore from "expo-secure-store";

//Mutation
import ChangeWishlist from "../../Mutation/UserWishListMutation";
import ChangeCart from "../../Mutation/UserCartListMutation";

function _loadMore(props) {
  console.log(
    "starting loading more",
    props.relay.hasMore(),
    props.relay.isLoading()
  );
  if (!props.relay.hasMore() || props.relay.isLoading()) {
    return;
  }
  console.log("loading more");
  props.relay.loadMore(
    5, // Fetch the next 10 feed items
    (error) => {
      console.log(error);
    }
  );
}
function ItemDetail(props) {
  const [userId, setUserId] = useState("");
  SecureStore.getItemAsync("userId").then((userId) => setUserId(userId));
  const [quantity, setQuantity] = useState(1);
  const [ModelVisible, setModelVisible] = React.useState(false);
  const availabilityData =
  !props.item.getItemDetailsById || !props.item.getItemDetailsById.itemAvailability
      ? [{}]
      : props.item.getItemDetailsById.itemAvailability;

  const [availabilityIndex, setAvailabilityIndex] = useState(0);

  const onAddToCart = () => {
    const itemDetails = props.item.getItemDetailsById;
    const callback = () => {
      // ToastAndroid.show(
      //   `added to your cart`,
      //   ToastAndroid.SHORT,
      //   ToastAndroid.CENTER
      // );
    };
    ChangeCart(
      false,
      itemDetails.id,
      userId,
      itemDetails.itemAvailability[availabilityIndex].id,
      quantity,
      callback
    );
  };
  const addToWishList = (props) => {
    const callback = () => {
      let messageContext =
        props.type === "remove" ? "removed from" : "added to";
      // ToastAndroid.show(
      //   `${messageContext} your wishlist`,
      //   ToastAndroid.SHORT,
      //   ToastAndroid.CENTER
      // );
    };
    ChangeWishlist(
      props.id,
      props.userId,
      props.previousApiId,
      props.type,
      callback
    );
  };
  const buttons = availabilityData.map((e) => {
    return `${e.value} ${e.unit}`;
  });
  const onMinusButtonPress = () => {
    setQuantity(quantity - 1);
  };
  const onPlusButtonPress = () => {
    setQuantity(quantity + 1);
  };
  const renderCommentHeader = (comment) => (
    <View style={styles.commentHeader}>
      <View style={styles.commentAuthorContainer}>
        <Text category="s2">{comment.userName}</Text>
        <Text appearance="hint" category="c1">
          {comment.changedAt}
        </Text>
      </View>
      <View style={styles.ratingContainerComment}>
        <RatingViewer rating={comment.rating} />
      </View>
    </View>
  );
  const renderComment = ({ item }) => (
    <Card
      disabled={true}
      style={styles.commentItem}
      header={() => renderCommentHeader(item.node)}
    >
      <Text>{item.node.review}</Text>
    </Card>
  );
  const renderheader = (info) =>  {
    if(!info) return <></>
    return (
    <Layout style={styles.header}>
      <Carousel
        style={"ImageCard"}
        itemsPerInterval={1}
        item={info.imageLinks ? info.imageLinks : []}
      ></Carousel>
      <Layout style={styles.detailsContainer} level="1">
        <Text category="h5" style={styles.title}>
          {info.name}
        </Text>
        <Text category="s1" style={styles.discount}>
          {availabilityData[availabilityIndex] &&
          availabilityData[availabilityIndex].discount
            ? `${availabilityData[availabilityIndex].discount} % off`
            : ""}
        </Text>
        {info.averageRating ? (
          <View style={styles.ratingContainer}>
            <RatingViewer rating={info.averageRating} />
          </View>
        ) : (
          <></>
        )}
        <Text style={styles.secondHeading} category="s1">
          Available In
        </Text>
        <View style={{ alignItems: "center" }}>
          <RNPickerSelect
            onValueChange={(value, index) => {
              setAvailabilityIndex(index);
            }}
            style={{
              inputIOSContainer: { alignSelf: "center" },
              inputIOS: { fontSize: 16, fontWeight: "bold" },
            }}
            placeholder={{}}
            items={props.item.getItemDetailsById.itemAvailability.map(
              (value, index) => {
                return {
                  label: `${value.value} ${value.unit}`,
                  value: `${value.value} ${value.unit}`,
                };
              }
            )}
          />
        </View>
        <Button
          style={styles.wishlistButton}
          appearance="ghost"
          status="basic"
          accessoryLeft={
            info.isWishlist ? WishListIconActive : WishListIconInactive
          }
          onPress={() =>
            addToWishList({
              id: info.id,
              userId: userId,
              previousApiId: info.previousApiId,
              type: info.isWishlist ? "remove" : "add",
            })
          }
        />
        {availabilityData[availabilityIndex] ? (
          <View style={{ marginTop: 8 }}>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <View style={styles.secondContainer}>
                <Text category="s1" appearance="hint">
                  {"Product MRP : "}
                </Text>
                <Text
                  style={styles.actualPrice}
                  category="s1"
                  appearance="hint"
                >
                  {`${Currency} ${availabilityData[availabilityIndex].actualPrice}`}
                </Text>
              </View>
              <View style={styles.secondContainer}>
                <Text category="s1" style={styles.amountText}>
                  {"Selling Price : "}
                </Text>
                <Text style={styles.discountPrice} category="h6">
                  {`${Currency} ${availabilityData[availabilityIndex].discountPrice}`}
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <></>
        )}
        <Text style={styles.secondHeading} category="s1">
          Product Information
        </Text>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text category="s1" style={styles.secondContainer}>
            {`Specifications : ${info.description["itemProperties"]}`}
          </Text>
          <Text category="s1" style={styles.secondContainer}>
            {`Manufacturer Details : ${info.description["sellerName"]}`}
          </Text>
          <Text category="s1" style={styles.secondContainer}>
            {`disclaimer : ${info.description["disclaimer"]}`}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 16 }}>
          <Text
            style={{ marginTop: 16, fontWeight: "bold", marginRight: 88 }}
            category="s1"
          >
            Ratings and Review
          </Text>
        </View>
      </Layout>
    </Layout>
  );
        }
  return (
    <View style={styles.container}>
      <List
        data={props.comment.getItemReview.edges}
        renderItem={renderComment}
        ListHeaderComponent={renderheader(props.item.getItemDetailsById)}
        onEndReachedThreshold={0.5}
        onEndReached={() => _loadMore(props)}
      />
      <CartAction
        quantity={quantity}
        onMinusButtonPress={onMinusButtonPress}
        onPlusButtonPress={onPlusButtonPress}
        onAddToCart={onAddToCart}
      />
      <CommentModel
        ModelVisible={ModelVisible}
        setModelVisible={setModelVisible}
      />
    </View>
  );
}

module.exports = createPaginationContainer(
  ItemDetail,
  {
    comment: graphql`
      fragment ItemDetail_comment on Query {
        getItemReview(first: $count, after: $after, itemId: $itemId)
          @connection(key: "CommentModel_getItemReview") {
          edges {
            cursor
            node {
              id
              itemId
              userId
              userName
              rating
              review  
              changedAt
            }
          }
        }
      }
    `,
    item: graphql`
      # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
      fragment ItemDetail_item on Query {
        getItemDetailsById(itemId: $itemId, userId: $userId) {
          id
          name
          itemAvailability {
            id
            actualPrice
            discount
            discountPrice
            value
            unit
          }
          description {
            itemProperties
            sellerName
            disclaimer
          }
          imageLinks
          isWishlist
          averageRating
        }
      }
    `,
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.review && props.review.getItemReview;
    },
    // This is also the default implementation of `getFragmentVariables` if it isn't provided.
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      console.log("getVariable", fragmentVariables, "prop", props);
      return {
        count: count,
        after: props.address.getAddress.pageInfo.endCursor,
        itemId: fragmentVariables.itemId,
        cursor,
        // userID isn't specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.
        // userID: fragmentVariables.userID,
      };
    },
    query: graphql`
      # Pagination query to be fetched upon calling 'loadMore'.
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query ItemDetailQuery($count: Int!, $after: String, $itemId: ID!) {
        ...ItemDetail_comment
      }
    `,
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: "bold",
    width: "90%",
  },
  image: {
    width: 120,
    height: 144,
    alignSelf: "flex-start",
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
    marginTop: 10,
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
    height: 340,
    width: "100%",
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
    marginVertical: 16,
    fontWeight: "bold",
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
  commentItem: {
    marginBottom: 8,
    marginHorizontal: 8,
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
    marginLeft: 12,
    marginTop: 8,
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
