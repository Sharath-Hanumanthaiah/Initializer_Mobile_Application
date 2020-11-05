import React, { useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';

import Home from './Component/Home/Home';
import AddressModel from './Component/Address/AddressModel';
import EditUserProfile from './Component/UserProfile/EditUserProfile';
import Header from './Component/Header/Header';
import HeaderRight from './Component/Header/HeaderRight';

import {AppColor} from './Component/Extras/Colors';

const Stack = createStackNavigator();

//App property 
// const headerStyle = {
//   headerColour : '#f6673c',
//   searchBarColour : '#f9a186',
//   headerTextColour : '#fff'
// }
// const AppColor = {
//   AppColorVibrant: '#f6673c',
//   AppColorLight: '#f77a55',
//   AppColorDull: '#f9a186',
//   AppColorWhite: '#fff'
// }
// const searchBarColour = '#f9a186';

//user Property 
// const StoreName = "StoreName";
// const titleType = "icon";

export default function App() {
  // const [searchValue, setSearchValue] = useState("");

  // const onSearchChange = (e) => {
  //   setSearchValue(e);
  //   // debugger;
  // }
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <SafeAreaProvider style={{ width: "100%" }}>
        <ApplicationProvider
          {...eva}
          theme={eva.light}
          style={{ width: "100%" }}
        >
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                // headerTitle: () => <Header title={'Add new address'} />,
                // headerRight: () => <HeaderRight />,
                headerStyle: {
                  backgroundColor: AppColor.Vibrant,
                },
              }}
            >
              <Stack.Screen
                name="Home"
                component={Home}
                initialParams={{ AppColor: AppColor }}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddressModel"
                component={AddressModel}
                options={{
                  title: "Add new address",
                  headerTitleStyle: { color: AppColor.White },
                }}
              />
              <Stack.Screen
                name="EditUserProfile"
                component={EditUserProfile}
                options={{
                  title: "Edit User Profile",
                  headerTitleStyle: { color: AppColor.White },
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ApplicationProvider>
      </SafeAreaProvider>
    </>
  );
}

// function Home({route, navigation}) {
//   return(
//   <></>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
