import React, { useContext, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  ToastAndroid,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { Button, Input, Text, Icon } from "@ui-kitten/components";
import ImageOverlay from "../Extras/ImageOverlay";
import { PersonIcon } from "../Extras/Icons";
import { KeyboardAvoidingView } from "../Extras/KeyboardAvoidingView";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import * as SplashScreen from 'expo-splash-screen';

export default function Login({ route, navigation }) {
  const { AuthContext } = route.params;
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);
  let image = null;
  // const [isReady, setIsReady] = useState(false);

  // const _cacheResourcesAsync = async () => {
  //   SplashScreen.hideAsync();
  //   try {
  //     const images = [require("../../assets/profile-background.jpg")];
  //     const cacheImages = images.map(image => {
  //       return Asset.fromModule(image).downloadAsync();
  //     });

  //     await Promise.all(cacheImages);
  //   } catch (e) {
  //     console.warn(e);
  //   } finally {
  //     setIsReady(true);
  //   }
  // };
  const onSignInButtonPress = () => {
    // navigation && navigation.goBack();
    if (email === "Demo" && password === "Demo") {
      signIn("ka");
    } else {
      ToastAndroid.show(
        `Wrong email and password`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  };

  const onSignUpButtonPress = () => {
    // navigation && navigation.navigate('SignUp3');
  };

  const onForgotPasswordButtonPress = () => {
    // navigation && navigation.navigate('ForgotPassword');
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };
  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      <Icon {...props} name={passwordVisible ? "eye" : "eye-off"} />
    </TouchableWithoutFeedback>
  );
  // if (!isReady) {
  //   return (
  //     <Image
  //       source={require("../../assets/splash.png")}
  //       onLoad={_cacheResourcesAsync}
  //     />
  //   );
  // } else {
    SplashScreen.hideAsync();
    return (
      <KeyboardAvoidingView>
        <ImageOverlay
          style={styles.container}
          source={require("../../assets/profile-background1.jpg")}
          // source={image}
        >
          <View style={styles.headerContainer}>
            <Text category="h1" status="control">
              Store Name
            </Text>
            <Text style={styles.signInLabel} category="s1" status="control">
              Sign in to your account
            </Text>
          </View>
          <View style={styles.formContainer}>
            <Input
              status="control"
              placeholder="Email"
              // accessoryRight={PersonIcon}
              // icon={PersonIcon}
              value={email}
              onChangeText={setEmail}
            />
            <Input
              style={styles.passwordInput}
              status="control"
              placeholder="Password"
              // accessoryRight={renderIcon}
              value={password}
              secureTextEntry={!passwordVisible}
              onChangeText={setPassword}
              // onIconPress={onPasswordIconPress}
            />
            <View style={styles.forgotPasswordContainer}>
              <Button
                style={styles.forgotPasswordButton}
                appearance="ghost"
                status="control"
                onPress={onForgotPasswordButtonPress}
              >
                Forgot your password?
              </Button>
            </View>
          </View>
          <Button
            style={styles.signInButton}
            status="control"
            size="giant"
            onPress={onSignInButtonPress}
          >
            SIGN IN
          </Button>
          <Button
            style={styles.signUpButton}
            appearance="ghost"
            status="control"
            onPress={onSignUpButtonPress}
          >
            Don't have an account? Sign Up
          </Button>
        </ImageOverlay>
      </KeyboardAvoidingView>
    );
  }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 216,
  },
  formContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
});
