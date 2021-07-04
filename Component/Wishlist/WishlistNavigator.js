import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AppColor } from "../Extras/Colors";
import Header from "../Header/Header";
import HeaderRight from "../Header/HeaderRight";
import WishlistQuery from './WishlistQuery';
import ItemDetailsQuery from '../Items/ItemDetail/ItemDetailsQuery'
const WishlistStack = createStackNavigator();

export default function WishListNavigator() {
    return (
      <WishlistStack.Navigator
        screenOptions={{
          headerTitle: () => <Header />,
          headerRight: () => <HeaderRight />,
          headerTitleAlign : 'left',
          headerBackTitleStyle: {fontSize: 11},
          headerStyle: {
            backgroundColor: AppColor.Vibrant,
          },
        }}
      >
        <WishlistStack.Screen name="WishList" component={WishlistQuery} />
        <WishlistStack.Screen name="Details" component={ItemDetailsQuery} />
      </WishlistStack.Navigator>
    );
  }
