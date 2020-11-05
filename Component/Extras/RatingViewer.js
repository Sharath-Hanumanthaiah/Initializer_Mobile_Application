import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';
import {TinyStar} from '../Extras/Icons';

export default function RatingViewer(props) {
    const {rating} = props;
    return(
        <>
      <Text category="s2" style={styles.ratingText}>
        {rating}
      </Text>
      {/* <MaterialCommunityIcons
        name="star"
        size={15}
        style={styles.iconContainer}
      /> */}
        <TinyStar />
    </>
    )
}

const styles = StyleSheet.create({
  ratingText: {
    marginHorizontal: 2,
    color: "white",
  },
  iconContainer: {
    color: "white",
    marginHorizontal: 2,
  }
});