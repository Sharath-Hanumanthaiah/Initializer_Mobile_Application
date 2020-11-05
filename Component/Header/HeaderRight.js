import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '@ui-kitten/components';

import {AppColor} from '../Extras/Colors';
import {Search} from '../Extras/Icons';
export default function Header(props) {
    return (
      <Button
      style={styles.searchButton}
      appearance="ghost"
      status="basic"
      activeOpacity={0.5}
      accessoryLeft={Search}
      // onPress={addToWishList}
    />
    );
  }
  
  const styles = StyleSheet.create({ 
    searchBar_container: {
      backgroundColor: AppColor.Vibrant,
      height: 30,
      borderColor: AppColor.Vibrant
    },
    searchButton: {
      justifyContent: 'center'
    }
  });