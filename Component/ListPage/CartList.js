import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { Layout, List, Divider, Button, Text } from "@ui-kitten/components";
import CartListItem from "../Cart/CartListItem";

import { createPaginationContainer, graphql } from "react-relay";
import { PaginationLoader } from "../Extras/Loaders";
import { ITEMS_PER_PAGE, Currency } from "../Extras/Constants";
import { AppColor } from "../Extras/Colors";
import CheckOutModel from "../Cart/CheckOutModel";
import Cart from "../Cart/Cart";

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
    ITEMS_PER_PAGE, // Fetch the next 10 feed items
    (error) => {
      console.log(error);
    }
  );
}

export default function CartList(props) {
  let checkOutModel = new CheckOutModel();
  const { navigation, userId } = props;
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let tempTotalAmount = 0;
    props.cart.getUserCart.edges.forEach((e) => {
      tempTotalAmount += e.node.discountPrice;
    });
    setTotalAmount(tempTotalAmount);
  }, [props.cart.getUserCart]);
  const onCheckOut = (event) => {
    checkOutModel.totalAmount = totalAmount;
    navigation.navigate("CheckOut", {
      checkOutModel: checkOutModel,
      userId
    });
  };
  const renderProductItem = ({ item }) => {
    if (item.node) {
      const cart = new Cart();
      cart.id = item.node.id;
      cart.imageLink = item.node.imageLink;
      cart.quantity = item.node.quantity;
      cart.discountPrice = item.node.discountPrice;
      cart.value = item.node.value;
      cart.unit = item.node.unit;
      cart.itemName = item.node.itemName;
      checkOutModel.cart.push(cart);
      return (
        <>
          <CartListItem
            style={styles.item}
            index={item.node.id}
            cart={item.node}
          />
          <Divider style={styles.divider} />
        </>
      );
    } else {
      return <></>;
    }
  };
  const renderFooter = () => {
    if (props.relay.hasMore()) {
      return <PaginationLoader />;
    } else {
      return <></>;
    }
  };
  return (
    <Layout style={styles.container} level="2">
      <List
        data={props.cart.getUserCart.edges}
        renderItem={renderProductItem}
        onEndReachedThreshold={0.2}
        onEndReached={() => _loadMore(props)}
        ListFooterComponent={renderFooter}
      />
      {props.cart.getUserCart.edges.length > 0 ? (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{ alignSelf: "center", fontWeight: "bold", margin: 4 }}
            category="s1"
          >{`Total Amount : ${Currency} ${totalAmount}`}</Text>
          <Button
            style={{
              backgroundColor: AppColor.Vibrant,
              borderWidth: 0,
              marginHorizontal: 4,
              width: "40%",
            }}
            onPress={onCheckOut}
          >
            Checkout
          </Button>
        </View>
      ) : (
        <></>
      )}
    </Layout>
  );
}

module.exports = createPaginationContainer(
  CartList,
  {
    cart: graphql`
      fragment CartList_cart on Query {
        getUserCart(first: $count, after: $after, userId: $userId)
          @connection(key: "CartList_getUserCart", filters: []) {
          edges {
            cursor
            node {
              id
              userId
              itemId
              availabilityId
              imageLink
              quantity
              itemName
              unit
              value
              discountPrice
              ...CartListItem_Cart
            }
          }
        }
      }
    `,
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.cart && props.cart.getUserCart;
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
        after: props.cart.getUserCart.pageInfo.endCursor,
        userId: fragmentVariables.userId,
      };
    },
    query: graphql`
      # Pagination query to be fetched upon calling 'loadMore'.
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query CartListQuery($count: Int!, $after: String, $userId: ID!) {
        ...CartList_cart
      }
    `,
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 3,
  },
  image: {
    margin: 10,
    padding: 30,
    width: 120,
    height: 120,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  detailsContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    marginLeft: 16,
    marginTop: 2,
    overflow: "hidden",
  },
  amountContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 12,
    marginTop: 2,
  },
  amountButton: {
    borderRadius: 16,
  },
  actualPrice: {
    textAlign: "center",
    marginLeft: 1,
    textDecorationLine: "line-through",
  },
  discountPrice: {
    textAlign: "center",
    marginRight: 12,
    fontWeight: "bold",
    fontSize: 18,
  },
  discount: {
    color: "#00cc00",
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 2,
  },
  removeButton: {
    position: "absolute",
    right: 0,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
  availablityContainer: {
    flexDirection: "row",
    height: "auto",
    // width: 'auto',
    // alignSelf: 'flex-start',
    // justifyContent:'flex-start',
    // alignContent: 'flex-start',
    // flexWrap: 'wrap',
    flexShrink: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
});
