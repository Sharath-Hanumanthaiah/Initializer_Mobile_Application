
import React, { useState } from 'react';
import { ListRenderItemInfo, StyleSheet, ToastAndroid } from 'react-native';
import { Button, Layout, List, Text, Divider } from '@ui-kitten/components';
import ItemList from '../ListPage/ItemList'

export default function Category() {

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
  }
  const [products, setProducts] = useState(
    [{
      id: '1',
      title: 'Horlicks',
      subtitle: 'an ITC product',
      availability: '100g',
      image: require('../../assets/image-product-2.jpg'),
      price : 'Rs 120',
      amount: 'Rs 100',
      availablity: [
        {
          id: 17,
          actualPrice: 80,
          discount: 10,
          discountPrice: 72,
          value: 1,
          unit: "PC"
        },
        {
          id: 18,
          actualPrice: 160,
          discount: 4,
          discountPrice: 152,
          value: 2,
          unit: "PC"
        },
        {
          id: 18,
          actualPrice: 240,
          discount: 20,
          discountPrice: 196,
          value: 3,
          unit: "PC"
        }
      ],
      isFav: true
    },
    {
      id: '2',
      title: 'Boost',
      subtitle: 'Chocolate Flavor',
      image: require('../../assets/image-product-2.jpg'),
      discount: '20%',
      price : 'Rs 100',
      amount: 'Rs 120',
      availablity: [
        {
          id: 17,
          actualPrice: 80,
          discount: 10,
          discountPrice: 72,
          value: 1,
          unit: "PC"
        }],
      isFav: false
    },
    {
      id: '3',
      title: 'sunsilk black shine shampoo',
      subtitle: 'Anti hair fall',
      image: require('../../assets/image-product-2.jpg'),
      availablity: [
        {
          id: 17,
          actualPrice: 180,
          discount: 10,
          discountPrice: 170,
          value: 1,
          unit: "Pack"
        },
        {
          id: 17,
          actualPrice: 200,
          discount: 20,
          discountPrice: 150,
          value: 2,
          unit: "Pack"
        }],
      isFav: false
    },
    {
      id: '4',
      title: 'sunfeast dark fantacy',
      subtitle: 'Chocolate',
      image: require('../../assets/image-product-2.jpg'),
      availablity: [
        {
          id: 17,
          actualPrice: 80,
          discount: 10,
          discountPrice: 65,
          value: 1,
          unit: "Pack"
        }],
      isFav: false
    },
    {
      id: '5',
      title: 'sunpure Refined sunflower oil',
      subtitle: 'Sunflower oil',
      image: require('../../assets/image-product-2.jpg'),
      availablity: [
        {
          id: 17,
          actualPrice: 180,
          discount: 10,
          discountPrice: 615,
          value: 1,
          unit: "KG"
        },
        {
          id: 18,
          actualPrice: 250,
          discount: 10,
          discountPrice: 225,
          value: 2,
          unit: "KG"
        }],
      isFav: false
    }]
  )
  const onAddWishList = (product, index) => {
    let messageContext = products[index].isFav?'removed from':'added to';
    products[index].isFav = !products[index].isFav;
    setProducts([...products]);
    showToast(`${product.title} ${messageContext} your wishlist`);
}
  const renderProductItem = (info) => (
    <>
      <ItemList
      style={styles.item}
      index={info.index}
      product={info.item}
      // onProductChange={onItemChange}
      onAddWishList={onAddWishList}
    />
    <Divider style={styles.divider}/>
    </>
  );
    return(
      <Layout
      style={styles.container}
      level='2'>
      <List
        data={products}
        renderItem={renderProductItem}
        // ListFooterComponent={renderFooter}
      />
    </Layout>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 3
    },
    item: {
      zIndex:1
    },
    divider: {
      margin: 3
    }
  });