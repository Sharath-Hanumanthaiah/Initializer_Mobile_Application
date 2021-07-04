import React, {useState} from "react";
import { StyleSheet, Alert } from "react-native";
import { Layout } from "@ui-kitten/components";
import StepIndicator from "react-native-step-indicator";
import AddressListQuery from "../Address/AddressListQuery";
import CheckOutOrderDetails from "./CheckOutOrderDetails";
import CreateOrderFromCartMutation from "../Mutation/CreateOrderFromCartMutation";
import {MutationPageLoader} from '../Extras/Loaders';

const labels = ["Select Address", "Order Summery"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#fe7013",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#fe7013",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#fe7013",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#fe7013",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#fe7013",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#fe7013",
};

export default function CheckOut(props) {
  // let checkOutModel = new CheckOutModel();
  const { route, navigation } = props;
  const { checkOutModel, userId } = route.params;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  // Temp
  const displayBody = () => {
    switch (selectedIndex) {
      case 0:
        const addressCallBack = (props) => {
          checkOutModel.address = props;
          setSelectedIndex(1);
        };
        return (
          <Layout style={styles.tab} level="2">
            <AddressListQuery
              navigation={navigation}
              callBack={addressCallBack}
            />
          </Layout>
        );
      case 1:
        const confirmCallBack = (orderId, paymentMode) => {
          setLoading(true);
          const callback = (orderId, externalOrderId, gatewayName, secretKey, publicKey) => {
            setLoading(false);
            checkOutModel.orderId = orderId;
            if (paymentMode === "C") {
              navigation.navigate("PaymentPage", {
                orderId: orderId,
                publicKey: publicKey,
                externalOrderId: externalOrderId,
                gatewayId: gatewayName,
                totalAmount: checkOutModel.totalAmount,
                userId: userId
              });
            } else {
              // Cash on delivery, no need for online payment
              Alert.alert(
                "Order successfully placed!!",
                "Thanks for placing your order",
                [
                  {
                    text: "Continue",
                    onPress: () => {
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
          };
          CreateOrderFromCartMutation(
            userId,
            "",
            paymentMode,
            checkOutModel,
            callback
          );
        };
        return (
          <Layout style={styles.confirmtab} level="2">
            <CheckOutOrderDetails
              checkOutModel={checkOutModel}
              callBack={confirmCallBack}
            />
            {loading ? <MutationPageLoader />: <></>}
          </Layout>
        );
      default:
        return <></>;
    }
  };
  return (
    <>
      <Layout level="2" style={{ margin: 4 }}>
        <StepIndicator
          customStyles={customStyles}
          stepCount={labels.length}
          currentPosition={selectedIndex}
          labels={labels}
        />
      </Layout>
      {displayBody()}
    </>
  );
}

const styles = StyleSheet.create({
  tab: {
    height: "94%",
  },
  confirmtab: {
    height: "89%",
  },
});
