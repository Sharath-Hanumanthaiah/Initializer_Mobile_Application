import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';

import WishlistNavigator from '../Wishlist/WishlistNavigator';
import CartNavigator from '../Cart/CartNavigator';
import UserProfileNavigator from '../UserProfile/UserProfileNavigator';
import OrderNavigator from '../Order/OrderNavigator';
import FeedsNavigator from '../Feeds/FeedsNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
export default function Home({route, navigation}) {
  const { AppColor } = route.params;
  SplashScreen.hideAsync();
    return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Feeds') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'WishList') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Order') {
            iconName = focused ? 'package-variant' : 'package-variant-closed';
          } else if (route.name === 'UserProfile') {
            iconName = focused ? 'account' : 'account-outline';
          }

          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
        <Tab.Screen name="Feeds" component={FeedsNavigator} options={{title: "Home"}} 
        initialParams={{AppColor: AppColor}}/>
        <Tab.Screen name="WishList" component={WishlistNavigator} options={{title: "WishList"}}/>
        <Tab.Screen name="Cart" component={CartNavigator} options={{title: "Cart"}}/>
        <Tab.Screen name="Order" component={OrderNavigator} options={{title: "Order"}}/>
        <Tab.Screen name="UserProfile" component={UserProfileNavigator} options={{title: "Profile"}}/>
        
    </Tab.Navigator>
    );
  }