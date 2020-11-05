import React, { useState, useRef } from 'react'
import {Button, Text} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';
import {PlusIcon, MinusIcon} from '../../Extras/Icons';
import {AppColor} from '../../Extras/Colors';

export default function CartAction(props) {
  // const {quantity, setQuantity} = props;
  const [quantity, setQuantity] = useState(1);
  // let quantity = useRef(1);
  // const setQuantity = () => {
  //   quantity.current += 1;
  // }

  const decrementButtonEnabled = () => {
    return quantity > 1;
  };
  const onMinusButtonPress = () => {
    setQuantity(quantity - 1);
  }
  const onPlusButtonPress = () => {
    setQuantity(quantity + 1);
  }
    return (
      <View style={styles.actionContainer}>
        <View style={styles.incrementDecrementContainer}>
          <Button
            style={[styles.iconButton, styles.PlusMinusButton,
              !decrementButtonEnabled()?styles.inActivePlusMinusButton: styles.activePlusMinusButton]}
            size="tiny"
            activeOpacity={0.5}
            accessoryLeft={MinusIcon}
            onPress={onMinusButtonPress}
            disabled={!decrementButtonEnabled()}
          />
          <Text style={styles.amount} category="s2">
            {quantity}
          </Text>
          <Button
            style={[styles.iconButton, styles.PlusMinusButton, styles.activePlusMinusButton]}
            size="tiny"
            activeOpacity={0.5}
            accessoryRight={PlusIcon}
            onPress={onPlusButtonPress}
          />
        </View>
        <Button
            style={styles.actionButton}            
            size="large"
            activeOpacity={0.8}
            // onPress={onBuyButtonPress}
          >
          ADD TO CART
        </Button>
      </View>
    );
}

const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: "row",
    backgroundColor: AppColor.White,
    margin: 5,
    marginHorizontal: 10,
  },
  actionButton: {
    marginHorizontal: 4,
    backgroundColor: AppColor.Vibrant,
    borderColor: AppColor.Vibrant
  },
  amount: {
    textAlign: "center",
    fontSize: 25,
    width: 50,
  },
  iconButton: {
    paddingHorizontal: 6,
  },
  incrementDecrementContainer: {
    position: "absolute",
    flexDirection: "row",
    right: 0,
    bottom: 6,
  },
  PlusMinusButton: {
    borderRadius: 20
  },
  activePlusMinusButton: {
    backgroundColor: "#fff",
    borderColor: AppColor.Vibrant
  },
  inActivePlusMinusButton: {
    backgroundColor: "#e6e6e6",
    borderColor: AppColor.Dull
  }
});