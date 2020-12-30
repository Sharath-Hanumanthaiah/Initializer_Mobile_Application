import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, ListItem, ListItemProps, Text } from "@ui-kitten/components";
import { ButtonGroup } from "react-native-elements";

import { createFragmentContainer, graphql } from "react-relay";
import { AppColor } from "../Extras/Colors";
import {Cancel} from '../Extras/Icons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { CartActionMini } from "../Items/ItemDetail/CartAction";
export default function CartListItem(props) {
  //   const index = props.item.previousApiId;
  const product = props.item;
  const {
    style,
    onProductChange,
    onItemPress,
    onAddWishList,
    ...listItemProps
  } = props;
  const [quantity, setQuantity] = useState(1);
  //   const [availabilityIndex, setAvailabilityIndex] = useState(0);
  //   const buttons = product.itemAvailability.map((e) => {
  //     return `${e.value} ${e.unit}`;
  //   });
  //   const WishListIconActive = (props) => (
  //     <MaterialCommunityIcons name="heart" size={23} color="tomato" />
  //   );
  //   const WishListIconInactive = (style) => (
  //     <MaterialCommunityIcons name="heart-outline" size={23} color="tomato" />
  //   );
  //   const addToWishList = (props) => {
  //     onAddWishList(product, index);
  //   };
  //   const updateIndex = (selectedIndex) => {
  //     setAvailabilityIndex(selectedIndex);
  //   };
  return (
    <ListItem
      key={product.id}
      //   onPress={() => onItemPress({ itemType: "ItemDetails", typeId: product.previousApiId })}
      {...listItemProps}
      disabled={true}
      style={styles.container}
    >
      <Image
        style={styles.image}
        // source={{ uri: product.imageLink }}
        source={product.imageLink}
      />
      <View style={styles.detailsContainer}>
        <View style={{ width: "90%" }}>
          <Text category="h6" style={{}}>
            {product.name}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <View style={{flex:1, flexDirection: 'row'}}>
            <Text style={styles.availablity, {marginLeft: 38}} category="s1" appearance="hint">
              {`Quantity : `}
            </Text>
            <Text style={styles.availablity} category="s1">
              {`1 KG`}
            </Text>
          </View>
          <Text style={styles.discountPrice} category="s1">
            {`Rs 190`}
          </Text>
        </View>
        <View style={{ margin: 10, flex: 1, flexDirection: "row" }}>
          <CartActionMini quantity={quantity} setQuantity={setQuantity} />
        </View>
      </View>
      <Button
        style={[styles.iconButton, styles.removeButton]}
        appearance="ghost"
        status="basic"
        accessoryLeft={Cancel}
        onPress={() => {}}
      />
    </ListItem>
  );
}

// export default createFragmentContainer(ItemListItem, {
//   item: graphql`
//     # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
//     fragment ItemListItem_item on ItemDetails {
//       id
//       previousApiId
//       name
//       imageLink
//       isWishlist
//       itemAvailability {
//         actualPrice
//         discount
//         discountPrice
//         value
//         unit
//       }
//     }
//   `,
// });

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
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
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
    // marginLeft: 10,
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
    top: 0
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
