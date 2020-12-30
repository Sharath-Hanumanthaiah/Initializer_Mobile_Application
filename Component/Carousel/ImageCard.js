import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, List } from '@ui-kitten/components';

export default function ImageCard(props) {
    const {width, items} = props;
    return(
        items.map((item, index) => {
            return(
            <Card
            key={index}
            style={{...styles.item, width:width/items.length}} 
            // onPress={() => {}}
            >
            {/* <Image source={item.image} style={styles.image}/> */}
            <Image source={{uri: item}} style={styles.image} />
          </Card> 
            );
        })

    );
}

const styles = StyleSheet.create({
    item: {
      height: 220,
      marginTop: -8,
      marginBottom: -8
    },
    image: {
        zIndex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 3,
        resizeMode: "center"
        // marginRight: -8,
    }
  });