import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const ItemStack = createStackNavigator();

import ItemListLayout from './ItemListLayout';
import ItemDetailsQuery from './ItemDetail/ItemDetailsQuery';
export default function FeedsNavigator({route}) {
  return (
    <ItemStack.Navigator>
      <ItemStack.Screen name="ItemList" component={ItemListLayout}/>
      <ItemStack.Screen name="Details" component={ItemDetailsQuery} />
    </ItemStack.Navigator>
  );
}