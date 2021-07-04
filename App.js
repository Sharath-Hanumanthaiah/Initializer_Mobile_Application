import React, { useState, useReducer, useMemo } from "react";
import { StyleSheet, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RelayEnvironment from "./GraphQLUtils/RelayEnvironment";
import { RelayEnvironmentProvider, useQueryLoader } from "react-relay/hooks";
import * as SecureStore from 'expo-secure-store';

import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";

import Home from "./Component/Home/Home";
import AddressModel from "./Component/Address/AddressModel";
import EditUserProfile from "./Component/UserProfile/EditUserProfile";
import Login from "./Component/AuthPage/Login";
import CheckOutQuery from "./Component/Cart/CheckOutQuery";
import OrderDetail from "./Component/OrderDetail/OrderDetail";
import SearchContainer from './Component/Search/SearchContainer';
import PaymentPage from './Component/Payment/PaymentPage';

import FeedQuery from "./Component/Feeds/__generated__/FeedsContainerAppQuery.graphql";

import { AppColor } from "./Component/Extras/Colors";
import { HomePageLoader } from "./Component/Extras/Loaders";
import {INITAIL_PAGINATION_COUNT} from './Component/Extras/Constants';

import { Asset } from "expo-asset";
// import { AppLoading } from "expo";
// import * as SplashScreen from "expo-splash-screen";

const Stack = createStackNavigator();
const AuthContext = React.createContext();
const { Suspense } = React;

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([require("./assets/profile-background.jpg")]),
  ]);
}

// const {RelayEnvironmentProvider} = require('react-relay');

function App() {
  const [queryRef, loadQuery] = useQueryLoader(FeedQuery);
  loadResourcesAsync();
  const [userSignedIn, setUserSignedIn] = useState(true);
  const [isReady, setIsReady] = useState(false);
  // SplashScreen.preventAutoHideAsync();
  const setLoginLocal = async (loginData) => {
    try {
      var password = loginData.password;
      var userId = loginData.userId;
      await SecureStore.setItemAsync('password', password);
      await SecureStore.setItemAsync('userId', userId);
    } catch (err) {
      console.log("asyncsotrage error",err);
    }
  };
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  React.useEffect(() => {
    //TODO : Remove before production
    loadQuery(
      {
        count: INITAIL_PAGINATION_COUNT,
        after: 0,
      });
  }, []);
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // userToken = await AsyncStorage.getItem("userToken");
        console.log("setting data (1)");
        setLoginLocal({userId: "60cb62abe7b8b00ccc3b13d3", password: "pasword"});
        userToken = "null";
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        loadQuery(
          {
            count: 3,
            after: 0,
          });
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );
  // if (!isReady) {
  //   console.log("isReady")
  //   _cacheResourcesAsync();
  //   return (
  //     <></>
  //     // <Image
  //     //   source={require("./assets/splash.png")}
  //     //   onLoad={_cacheResourcesAsync}
  //     // />
  //   );
  // } else {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <SafeAreaProvider style={{ width: "100%" }}>
        {/* <ApplicationProvider
            {...eva}
            theme={eva.light}
            style={{ width: "100%" }}
          > */}
        <NavigationContainer>
          <AuthContext.Provider value={authContext}>
            {state.userToken !== null ? (
              <Stack.Navigator
                initialRouteName="Home"
                mode='modal'
                screenOptions={{
                  // headerTitle: () => <Header title={'Add new address'} />,
                  // headerRight: () => <HeaderRight />,
                  headerStyle: {
                    backgroundColor: AppColor.Vibrant,
                  },
                  gestureResponseDistance: { vertical: 1000 }
                }}
              >
                <Stack.Screen
                  name="Home"
                  component={Home}
                  initialParams={{ AppColor: AppColor, queryRef: queryRef }}
                  options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                  name="AddressModel"
                  component={AddressModel}
                  options={{
                    title: "Address",
                    headerTitleStyle: { color: AppColor.White },
                  }}
                /> */}
                {/* <Stack.Screen
                  name="EditUserProfile"
                  component={EditUserProfile}
                  options={{
                    title: "Edit User Profile",
                    headerTitleStyle: { color: AppColor.White },
                  }}
                />
                <Stack.Screen
                  name="CheckOut"
                  component={CheckOutQuery}
                  options={{
                    title: "Check Out",
                    headerTitleStyle: { color: AppColor.White },
                  }}
                />
                <Stack.Screen
                  name="OrderDetails"
                  component={OrderDetail}
                  options={{
                    title: "Order Details",
                    headerTitleStyle: { color: AppColor.White },
                  }}
                /> */}
                <Stack.Screen
                  name="Search"
                  component={SearchContainer}
                  options={{
                    headerShown: false, 
                    cardStyle: {backgroundColor: 'transparent'}
                  }}
                />
                <Stack.Screen
                  name="PaymentPage"
                  component={PaymentPage}
                  options={{
                    title: "Payment Details",
                    headerBackTitle: "Order",
                    headerTitleStyle: { color: AppColor.White }
                  }}
                />
              </Stack.Navigator>
            ) : (
              <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                  // headerTitle: () => <Header title={'Add new address'} />,
                  // headerRight: () => <HeaderRight />,
                  headerShown: false,
                }}
              >
                <Stack.Screen
                  name="Login"
                  component={Login}
                  initialParams={{ AuthContext: AuthContext }}
                />
              </Stack.Navigator>
            )}
          </AuthContext.Provider>
        </NavigationContainer>
        {/* </ApplicationProvider> */}
      </SafeAreaProvider>
    </>
  );
}
// }

function AppRoot(props) {
  return (
    <ApplicationProvider {...eva} theme={eva.light} style={{ width: "100%" }}>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={<HomePageLoader />}>
          <App />
        </Suspense>
      </RelayEnvironmentProvider>
    </ApplicationProvider>
  );
}

export default AppRoot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
