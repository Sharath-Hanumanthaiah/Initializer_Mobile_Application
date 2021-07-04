import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, ListItem, ListItemProps, Text } from "@ui-kitten/components";
import { ButtonGroup } from "react-native-elements";

import { createFragmentContainer, graphql } from "react-relay";
import { AppColor } from "../Extras/Colors";
import { Delete } from "../Extras/Icons";
import {Currency} from '../Extras/Constants'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { CartActionMini } from "../Items/ItemDetail/CartAction";
import ChangeCart from '../Mutation/UserCartListMutation';

function CartListItem(props) {
  //   const index = props.item.previousApiId;
  const cart = props.cart;
  const {
    style,
    onProductChange,
    onItemPress,
    onAddWishList,
    ...listItemProps
  } = props;
  const onMinusButtonPress = () => {
    const callback = () => {
    };
    ChangeCart(
      true,
      cart.itemId,
      cart.userId,
      cart.availabilityId,
      parseInt(cart.quantity, 10) - 1,
      callback,
      cart.discountPrice/cart.quantity
    );
  };
  const onPlusButtonPress = () => {
    const callback = () => {
    };
    ChangeCart(
      true,
      cart.itemId,
      cart.userId,
      cart.availabilityId,
      parseInt(cart.quantity, 10) + 1,
      callback,
      cart.discountPrice/cart.quantity
    );
  };
  const onDeletePress = () => {
    const callback = () => {
    };
    ChangeCart(
      true,
      cart.itemId,
      cart.userId,
      cart.availabilityId,
      0,
      callback
    );
  }
  return (
    <ListItem
      key={cart.id}
      //   onPress={() => onItemPress({ itemType: "ItemDetails", typeId: product.previousApiId })}
      {...listItemProps}
      disabled={true}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={{ uri: cart.imageLink }}
      />
      <View style={styles.detailsContainer}>
        <View style={{ width: "90%" }}>
          <Text category="h6" style={{}}>
            {cart.itemName}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          {/* <View style={{ flex: 1, flexDirection: "row" }}>
            <Text
              style={(styles.availablity, { marginLeft: 38 })}
              category="s1"
              appearance="hint"
            >
              {`Quantity : `}
            </Text>
            <Text style={styles.availablity} category="s1">
              {`${cart.value} ${cart.unit}`}
            </Text>
          </View> */}
          <Text style={styles.availablity} category="s1">
              {`${cart.value} ${cart.unit}`}
            </Text>
          <Text style={styles.discountPrice} category="h6">
            {`${Currency} ${cart.discountPrice}`}
          </Text>
        </View>
        <View style={{ margin: 10, flex: 1, flexDirection: "row" }}>
          <CartActionMini quantity={cart.quantity} onMinusButtonPress={onMinusButtonPress} 
          onPlusButtonPress={onPlusButtonPress} />
        </View>
      </View>
      <Button
        style={[styles.iconButton, styles.removeButton]}
        appearance="ghost"
        status="basic"
        accessoryLeft={Delete}
        onPress={onDeletePress}
      />
    </ListItem>
  );
}

export default createFragmentContainer(CartListItem, {
  cart: graphql`
    fragment CartListItem_Cart on UserCartList {
      id
      itemId
      userId
      availabilityId
      imageLink
      quantity
      itemName
      unit
      value
      discountPrice
    }
  `,
});

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingVertical: 2,
  },
  image: {
    // marginHorizontal: 6,
    // padding: 30,
    width: 80,
    height: 90,
    borderRadius: 10,
    alignSelf: "center",
  },
  detailsContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    marginHorizontal: 12,
    overflow: "hidden",
  },
  amountContainer: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "flex-start",
    // marginTop: 6
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
    marginLeft: 40,
    color: AppColor.Green,
    // fontSize: 16,
  },
  availablity: {
    textAlign: "center",
    // marginLeft: 1,
    fontSize: 16,
  },
  discount: {
    color: "#00cc00",
    fontWeight: "bold",
    marginLeft: 12,
    // marginTop: 2,
  },
  removeButton: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  iconButton: {
    // paddingHorizontal: 0,
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
