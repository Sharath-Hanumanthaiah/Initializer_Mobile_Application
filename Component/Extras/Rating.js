import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '@ui-kitten/components';
import {MediumStar} from '../Extras/Icons';

export const Rating = (props) => {

    const renderRateButtonElement = (value) => {
      const status = value <= props.value ? 'warning' : 'basic';
  
      return (
        <Button
          key={value}
          style={styles.iconButton}
          appearance='ghost'
          size='large'
          status={status}
          accessoryLeft={MediumStar}
          onPress={() => props.onValueChange(value)}
        />
      );
    };
  
    const { style, ...viewProps } = props;
  
    return (
      <View
        {...viewProps}
        style={[styles.container, style]}>
        {[1, 2, 3, 4, 5].map(renderRateButtonElement)}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconButton: {
      paddingHorizontal: 0,
    },
  });