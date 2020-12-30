import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  Button,
  ListItem,
  ListItemProps,
  Text,
  Select,
  SelectItem,
  IndexPath,
} from "@ui-kitten/components";
import { ButtonGroup } from "react-native-elements";

import { createFragmentContainer, graphql } from "react-relay";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function ItemListItem(props) {
  const index = props.item.previousApiId;
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const product = props.item;
  const {
    style,
    onProductChange,
    onItemPress,
    onAddWishList,
    ...listItemProps
  } = props;
  const [availabilityIndex, setAvailabilityIndex] = useState(0);
  const buttons = product.itemAvailability.map((e) => {
    return `${e.value} ${e.unit}`;
  });
  const WishListIconActive = (props) => (
    <MaterialCommunityIcons name="heart" size={23} color="tomato" />
  );
  const WishListIconInactive = (style) => (
    <MaterialCommunityIcons name="heart-outline" size={23} color="tomato" />
  );
  const addToWishList = (props) => {
    // onAddWishList(product, index);
  };
  const updateIndex = (selectedIndex) => {
    setAvailabilityIndex(selectedIndex);
  };
  return (
    <ListItem
      key={product.id}
      onPress={() =>
        onItemPress({ itemType: "ItemDetails", typeId: product.previousApiId })
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
          {/* <Text
              appearance='hint'
              category='p2'>
              {product.subtitle}
            </Text> */}
        </View>
        {/* <ButtonGroup
          onPress={updateIndex}
          selectedIndex={availabilityIndex}
          buttons={buttons}
          containerStyle={styles.availablityContainer}
          textStyle={{ fontSize: 13, color: "#8c8c8c" }}
          selectedTextStyle={{ fontSize: 13, color: "#f77a55" }}
          buttonStyle={{ width: 60, borderRadius: 10 }}
          innerBorderStyle={{ color: "#fff" }}
          selectedButtonStyle={{
            backgroundColor: "#fff",
            borderColor: "#f77a55",
            borderWidth: 1,
            padding: 6,
            borderRadius: 10,
          }}
        /> */}
        <View>
          {/* <Select
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
          >
            {
              product.itemAvailability.map((e) => {
                return (<SelectItem title={`${e.value} ${e.unit}`} />);
              })
            }
          </Select> */}
          {/* <Picker
            selectedValue={'java'}
            style={{ height: 50, width: 100 }}
            // onValueChange={(itemValue, itemIndex) =>
            //   this.setState({ language: itemValue })
            // }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker> */}
        </View>
        {product.itemAvailability[availabilityIndex] !== undefined ? (
          <>
            <Text category="s2" style={styles.discount}>
              {product.itemAvailability[availabilityIndex].discount
                ? `${product.itemAvailability[availabilityIndex].discount} % off`
                : ""}
            </Text>
            <View style={styles.amountContainer}>
              <Text style={styles.discountPrice} category="h6">
                {`₹ ${product.itemAvailability[availabilityIndex].discountPrice}`}
              </Text>
              <Text style={styles.actualPrice} category="s2">
                {`₹ ${product.itemAvailability[availabilityIndex].actualPrice}`}
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
        onPress={addToWishList}
      />
    </ListItem>
  );
}

export default createFragmentContainer(ItemListItem, {
  item: graphql`
    # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
    fragment ItemListItem_item on ItemDetails {
      id
      previousApiId
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
