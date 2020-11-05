import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const ItemStack = createStackNavigator();

import ItemListLayout from './ItemListLayout';
import ItemDetails from './ItemDetail/ItemDetail';
export default function FeedsNavigator() {
  return (
    <ItemStack.Navigator>
      <ItemStack.Screen name="ItemList" component={ItemListLayout}/>
      <ItemStack.Screen name="Details" component={ItemDetails} />
    </ItemStack.Navigator>
  );
}