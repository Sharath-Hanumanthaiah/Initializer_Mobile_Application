import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {AppColor} from '../Extras/Colors';
import Header from '../Header/Header';
import HeaderRight from '../Header/HeaderRight';

const CartStack = createStackNavigator();

import Cart from './Cart';
import CheckOut from './CheckOut';

export default function CartNavigator() {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerTitle: () => <Header />,
        headerRight: () => <HeaderRight />,
        headerStyle: {
          backgroundColor: AppColor.Vibrant,
        },
      }}
    >
      <CartStack.Screen
        name="Cart"
        component={Cart}
      />
      <CartStack.Screen
        name="CheckOut"
        component={CheckOut}
      />
    </CartStack.Navigator>
  );
}