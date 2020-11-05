import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import {Card, Text} from '@ui-kitten/components';


export default function MultiItemCard(props) {
    const {onItemPress} = props;
    const renderItemHeader = (image) => (
        <ImageBackground
          style={styles.itemHeader}
          source={image}
        />
      );
    
          return(
              <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
                  {
                      props.item.map((item, index) => {
                              return(
                                  <Card
                                      key={index}
                                      style={styles.productItem}
                                      header={() => renderItemHeader({ uri: item.imageLink })}
                                        onPress={() => onItemPress(index)}
                                      >
                                          <Text category='s2' style={styles.itemFooter}>
                                              {item.name}
                                          </Text>
                                  </Card>
                              )
                          })
                  }
              </View>
      
          );
};


const styles = StyleSheet.create({
    postsList: {
      borderRadius: 10,
      overflow: 'hidden'
    },
    postItem: {
      width: 130,
      height: 130,
      borderRadius: 4,
      margin:1,
      overflow: 'hidden',
    },
    itemHeader: {
      height: 90,
    //   width: (Dimensions.get('window').width - 32) / 3
    },
    itemFooter: {
        // width: (Dimensions.get('window').width) / 4,
        height: 40,
        margin: -15, 
        overflow: 'hidden'
    },
    productItem: {
        width: (Dimensions.get('window').width - 30) / 3,
      margin: 0.5
    },
    postItem: {
        width: 144,
        height: 144,
        borderRadius: 4,
        marginHorizontal: 8,
        overflow: 'hidden',
      },
})