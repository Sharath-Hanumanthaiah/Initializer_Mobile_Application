import React, { useState } from "react";
import { View, StyleSheet, ToastAndroid } from "react-native";
import { Button, Layout, List, Text, Divider } from "@ui-kitten/components";
import ItemList from "../ListPage/ItemList";
import ItemSubCategory from "./ItemSubCategory";

import { QueryRenderer, graphql } from "react-relay";
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";
import {HomePageLoader} from '../Extras/Loaders';

const ITEMS_PER_PAGE = 5;

export default function ItemListLayout({ navigation, route }, props) {
  const { itemType, typeId } = route.params;
  console.log("in Item list", itemType, typeId);
  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };
  const onAddWishList = (product, index) => {
    // let messageContext = products[index].isFav ? "removed from" : "added to";
    // products[index].isFav = !products[index].isFav;
    // setProducts([...products]);
    // showToast(`${product.title} ${messageContext} your wishlist`);
  };
  const onItemPress = (event) => {
    console.log(event);
    if (event.itemType === "ItemSubCategory") {
      navigation.push("ItemList", {
        itemType: event.itemType,
        typeId: event.typeId,
      });
    }else {
      navigation.navigate("Details", {
        typeId: event.typeId
      });
    }
  };
  console.log("ItemListLayout", itemType, typeId);
  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={graphql`
        query ItemListLayoutAppQuery(
          $itemType: String!
          $typeId: ID!
          $count: Int!
          $after: String
          $categoryId: ID
        ) {
          ...ItemList_items
          ...ItemSubCategory_subCategory
        }
      `}
      variables={{
        itemType: itemType,
        typeId: typeId,
        count: ITEMS_PER_PAGE,
        after: 0,
        //subcategory list will only appear for category home page tile
        categoryId: itemType === "ItemCategory" ? typeId : -1,
      }}
      render={({ error, props }) => {
        if (error) {
          return <Text>Error!</Text>;
        }
        if (!props) {
          return <HomePageLoader />;
        }
        return (
          <View style={{ flex: 1 }}>
            {itemType === "ItemCategory" ? (
              <ItemSubCategory subCategory={props} onItemPress={onItemPress} />
            ) : (
              <></>
            )}
            <ItemList items={props} onItemPress={onItemPress} />
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 3,
  },
  item: {
    zIndex: 1,
  },
  divider: {
    margin: 3,
  },
});
