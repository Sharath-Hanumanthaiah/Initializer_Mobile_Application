import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {AppColor} from '../Extras/Colors';
import Header from '../Header/Header';
import HeaderRight from '../Header/HeaderRight';

const FeedsStack = createStackNavigator();

import FeedsContainer from './FeedsContainer';
import ItemListLayout from '../Items/ItemListLayout';
import ItemDetailsQuery from '../Items/ItemDetail/ItemDetailsQuery';

export default function FeedsNavigator({route, navigation}) {
  const {queryRef} = route.params;
  return (
    <FeedsStack.Navigator
      screenOptions={{
        headerTitle: () => <Header />,
        headerRight: () => <HeaderRight/>,
        headerTitleAlign : 'left',
        headerStyle: {
          backgroundColor: AppColor.Vibrant,
        },
      }}
    >
      <FeedsStack.Screen name="Feeds" component={FeedsContainer} initialParams={ {queryRef: queryRef} } />
      <FeedsStack.Screen name="Items" component={ItemListLayout}/>
      <FeedsStack.Screen name="Details" component={ItemDetailsQuery}/>
    </FeedsStack.Navigator>
  );
}