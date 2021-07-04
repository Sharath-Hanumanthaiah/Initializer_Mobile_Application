import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AppColor } from "../Extras/Colors";
import Header from "../Header/Header";
import HeaderRight from "../Header/HeaderRight";

const CartStack = createStackNavigator();

import CartQuery from "./CartQuery";
import CheckOutQuery from "./CheckOutQuery";
import AddressModel from "../Address/AddressModel";
import PaymentPage from "../Payment/PaymentPage";
import CheckOut from "./CheckOut";
import AddressListQuery from "../Address/AddressListQuery";
import OrderDetail from "../OrderDetail/OrderDetail";

export default function CartNavigator() {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerTitle: () => <Header />,
        headerRight: () => <HeaderRight />,
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: AppColor.Vibrant,
        },
      }}
    >
      <CartStack.Screen name="Cart" component={CartQuery} />
      {/* <CartStack.Screen
        name="CheckOut"
        component={CheckOut}
      /> */}
      <CartStack.Screen
        name="CheckOut"
        component={CheckOutQuery}
        options={{
          title: "CheckOut",
        }}
      />
      <CartStack.Screen
        name="OrderDetails"
        component={OrderDetail}
      />
      <CartStack.Screen
        name="AddressModel"
        component={AddressModel}
        options={{
          title: "Address",
          headerBackTitleStyle: { fontSize: 10 },
        }}
      />
      {/* <CartStack.Screen
        name="PaymentPage"
        component={PaymentPage}
        options={{
          title: "Payment Details",
          headerBackTitleStyle: { fontSize: 10 },
        }}
      /> */}
      {/* <CartStack.Screen
        name="Address"
        component={AddressListQuery}
      /> */}
    </CartStack.Navigator>
  );
}
