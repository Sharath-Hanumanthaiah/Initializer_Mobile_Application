import React, { useState } from "react";
import { Image, StyleSheet, View, Platform } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Button, ListItem, Text, IndexPath } from "@ui-kitten/components";

import { createFragmentContainer, graphql } from "react-relay";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ChangeWishlist from "../Mutation/UserWishListMutation";
import { Currency } from "../Extras/Constants";
// import { _userData } from '../Extras/UserData';

function ItemListItem(props) {
  const product = props.item;
  const {
    style,
    onProductChange,
    onItemPress,
    onAddWishList,
    userId,
    ...listItemProps
  } = props;
  const [availabilityIndex, setAvailabilityIndex] = useState(0);
  const WishListIconActive = (props) => (
    <MaterialCommunityIcons name="heart" size={23} color="tomato" />
  );
  const WishListIconInactive = (style) => (
    <MaterialCommunityIcons name="heart-outline" size={23} color="tomato" />
  );
  const addToWishList = (props) => {
    const callback = () => {};
    ChangeWishlist(
      props.id,
      props.userId,
      props.previousApiId,
      props.type,
      callback
    );
  };
  return (
    <ListItem
      key={product.id}
      onPress={() =>
        onItemPress({ itemType: "ItemDetails", typeId: product.id })
      }
      {...listItemProps}
      style={[styles.container, style]}
    >
      <Image style={styles.image} source={{ uri: product.imageLink }} />
      <View style={styles.detailsContainer}>
        <View style={{ width: "90%" }}>
          <Text category="h6" style={{}}>
            {product.name}
          </Text>
        </View>
        <RNPickerSelect
          onValueChange={(value, index) => {
            setAvailabilityIndex(index);
          }}
          placeholder={{}}
          style={{
            inputIOSContainer: { marginLeft: 12, margin: 12 },
            inputIOS: { fontSize: 16, fontWeight: "500" },
          }}
          items={product.itemAvailability.map((value, index) => {
            return {
              label: `${value.value} ${value.unit}`,
              value: `${value.value} ${value.unit}`,
            };
          })}
        />
        {product.itemAvailability[availabilityIndex] !== undefined ? (
          <>
            <Text category="s2" style={styles.discount}>
              {product.itemAvailability[availabilityIndex].discount
                ? `${product.itemAvailability[availabilityIndex].discount} % off`
                : ""}
            </Text>
            <View style={styles.amountContainer}>
              <Text style={styles.discountPrice} category="h6">
                {`${Currency} ${product.itemAvailability[availabilityIndex].discountPrice}`}
              </Text>
              <Text style={styles.actualPrice} category="s2">
                {`${Currency} ${product.itemAvailability[availabilityIndex].actualPrice}`}
              </Text>
            </View>
          </>
        ) : (
          <></>
        )}
      </View>
      <Button
        style={[styles.iconButton, styles.removeButton]}
        appearance="ghost"
        status="basic"
        accessoryLeft={
          product.isWishlist ? WishListIconActive : WishListIconInactive
        }
        onPress={() =>
          addToWishList({
            id: product.id,
            userId: userId,
            previousApiId: product.previousApiId,
            type: product.isWishlist ? "remove" : "add",
          })
        }
      />
    </ListItem>
  );
}

export default createFragmentContainer(ItemListItem, {
  item: graphql`
    # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
    fragment ItemListItem_item on ItemDetails {
      id
      name
      imageLink
      isWishlist
      itemAvailability {
        actualPrice
        discount
        discountPrice
        value
        unit
      }
    }
  `,
});

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  image: {
    margin: 10,
    padding: 30,
    width: 120,
    height: 120,
    borderRadius: 10,
    alignSelf: "flex-start",
    resizeMode: "center",
  },
  detailsContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    marginLeft: 16,
    marginTop: 10,
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
    flexShrink: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
});
