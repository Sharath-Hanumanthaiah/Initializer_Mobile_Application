import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {AppColor} from '../Extras/Colors';
import Header from '../Header/Header';
import HeaderRight from '../Header/HeaderRight';

const FeedsStack = createStackNavigator();

import FeedsContainer from './FeedsContainer';
import ItemNavigator from '../Items/ItemNavigator';
export default function FeedsNavigator() {
  return (
    <FeedsStack.Navigator
      screenOptions={{
        headerTitle: () => <Header />,
        headerRight: () => <HeaderRight />,
        headerStyle: {
          backgroundColor: AppColor.Vibrant,
        },
      }}
    >
      <FeedsStack.Screen name="Feeds" component={FeedsContainer} />
      <FeedsStack.Screen
        name="ItemList"
        component={ItemNavigator}
        options={{ headerShown: true }}
      />
    </FeedsStack.Navigator>
  );
}