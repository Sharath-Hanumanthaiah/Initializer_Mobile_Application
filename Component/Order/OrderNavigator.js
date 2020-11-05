import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {AppColor} from '../Extras/Colors';
import Header from '../Header/Header';
import HeaderRight from '../Header/HeaderRight';

const OrderStack = createStackNavigator();

import Order from './Order';
import OrderDetail from '../OrderDetail/OrderDetail'
export default function OrderNavigator() {
  return (
    <OrderStack.Navigator
      screenOptions={{
        headerTitle: () => <Header />,
        headerRight: () => <HeaderRight />,
        headerStyle: {
          backgroundColor: AppColor.Vibrant,
        },
      }}
    >
      <OrderStack.Screen
        name="Home"
        component={Order}
        options={{ title: "My home" }}
      />
      <OrderStack.Screen
        name="Details"
        component={OrderDetail}
        options={{ title: "My home" }}
      />
    </OrderStack.Navigator>
  );
}