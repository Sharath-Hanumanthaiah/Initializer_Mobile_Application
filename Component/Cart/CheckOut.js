import React from "react";
import { StyleSheet, View } from "react-native";
import { Layout, Text, ViewPager, Button } from "@ui-kitten/components";
import StepIndicator from "react-native-step-indicator";

const labels = ["Shipping Address", "Confirm"];
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

export default function CheckOut() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

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
      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        {/* <Layout style={styles.tab} level="2">
          <Text category="h5">USERS</Text> */}
        <View>
          <Text category="h5">Select Shipping address</Text>
        </View>
        {/* </Layout> */}
        <Layout style={styles.tab} level="2">
          <Text category="h5">ORDERS</Text>
        </Layout>
      </ViewPager>
    </>
  );
}

const styles = StyleSheet.create({
  tab: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
