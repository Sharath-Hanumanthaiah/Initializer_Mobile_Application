import React, { useEffect } from "react";
import { Text, Layout } from "@ui-kitten/components";
import { View, Alert } from "react-native";
import { Currency } from "../Extras/Constants";
import StripeCheckout from "./StripeCheckout";

export default function PaymentPage({ route,navigation }) {
const {orderId, publicKey, externalOrderId, gatewayId, totalAmount, userId} = route.params;
var paymentComplete = false;
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
        if(paymentComplete) {
            return;
        }
      Alert.alert(
        "Your payment is not yet complete",
        "We cannot process your order until you complete your payment Are you sure you want to go back?",
        [
          {
            text: "No",
            style: "cancel"
          },
          {
            text: "Yes",
            onPress: () => {
                paymentComplete = true;
                navigation.goBack();
            },
          }
        ],
        { cancelable: false }
      );
      e.preventDefault();
    });
  }, []);
  const getPaymentGatewayPage = () => {
    if(gatewayId === "Stripe") {
      return (<StripeCheckout publicKey={publicKey} externalOrderId={externalOrderId} onPaymentSuccess={onPaymentSuccess} />);
    }
  }
  const onPaymentSuccess = (sucessMessage) => {
    paymentComplete = true;
    console.log("payment success", orderId);
    Alert.alert(
      "Payment Successful, Order successfully placed!!",
      "Thank you for placing your order",
      [
        {
          text: "Continue",
          onPress: () => {
            navigation.pop(2);
            navigation.replace("OrderDetails", {
              orderId: orderId,
              userId: userId,
            });
          },
        },
      ],
      { cancelable: false }
    );
  }
  return (
    <Layout>
      {/* <Text category="h4" style={{ margin: 8 }}>
        Complete your Payment
      </Text> */}
      <Text
        category="s1"
        appearance="hint"
        style={{ marginVertical: 8, marginHorizontal: 16 }}
      >
        Please provide below payment information to complete your order
      </Text>
      {/* <Text category="h6" style={{ marginVertical: 8, marginHorizontal: 16 }}>
        Order Summery
      </Text> */}
      <Text category="h6" appearance="hint" style={{ alignSelf: "center" }}>
        Your Total Amount
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          margin: 16,
          alignSelf: "center",
        }}
      >
        <Text category="h2" status="basic">
          {`${Currency} ${totalAmount}`}
        </Text>
      </View>
      <View style={{ width: "100%"
      , height: "70%"
       }}>
        {
          getPaymentGatewayPage()
        }
      </View>
    </Layout>
  );
}
