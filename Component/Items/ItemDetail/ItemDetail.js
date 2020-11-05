import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Platform, View, ToastAndroid } from 'react-native';
import {
  Button,
  Input,
  Layout,
  Card, 
  Radio,
  RadioGroup,
  StyleService,
  List,
  Text,
  Modal
} from '@ui-kitten/components';

import RatingViewer from '../../Extras/RatingViewer';

import {ButtonGroup} from 'react-native-elements';

import Carousel from '../../Carousel/Carousel';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {WishListIconActive, WishListIconInactive} from '../../Extras/Icons';

import CartAction from './CartAction';
import CommentModel from './CommentModel';

// const WishListIconActive = (props) => (
//   <MaterialCommunityIcons name='heart' size={23} color='tomato'/>
// )
// const WishListIconInactive = (props) => (
//   <MaterialCommunityIcons name='heart-outline' size={23} color='tomato'/>
// )
// const MinusIcon = () => (
//   <MaterialCommunityIcons name='minus' size={23} color='tomato'/>
// )
// const PlusIcon = () => (
//   <MaterialCommunityIcons name="plus" size={23} color="tomato" />
// );
const product = {
  id: 5,
  categoryId: 4,
  subCategoryId: 3,
  name: "sunfeast dark fantacy",
  isFav: true,
  itemAvailabilities: [
    {
      id: 12,
      itemId: 5,
      actualPrice: 80,
      discount: 5,
      discountPrice: 76,
      value: 1,
      unit: "PC",
      available: "Y",
    },
    {
      id: 14,
      itemId: 5,
      actualPrice: 240,
      discount: 8,
      discountPrice: 221,
      value: 3,
      unit: "PC",
      available: "Y",
    },
  ],
  description: {
    itemProperties: "best for 3 months contains 30% protein",
    sellerName: "nescafe",
    disclaimer: "good for all age",
  },
  imageLinks: [
    "http://res.cloudinary.com/dsywyhhdl/image/upload/v1586975422/psumsthbzigdqwpt4nsq.jpg",
    "http://res.cloudinary.com/dsywyhhdl/image/upload/v1586975423/fw3pefisxrjpzw9lubrc.jpg",
  ],
  comments: ["hell", "o"],
};
export default function ItemDetail(props) {
  // const [product, setProduct] = useState(data);
  const [isWishlist, setIsWishList] = useState(product.isFav);
  const [quantity, setQuantity] = useState(1);
  const [ModelVisible, setModelVisible] = React.useState(false);
  const availabilityData = product.itemAvailabilities === undefined? [{}]: product.itemAvailabilities;
  
  const [availabilityIndex, setAvailabilityIndex] = useState(0);
  
  const [comment, setComment] = React.useState("");

  const updateIndex = (selectedIndex) => {
    setAvailabilityIndex(selectedIndex);
  };

  const onBuyButtonPress = () => {
    //   navigation && navigation.navigate('Payment');
  };
  const openCommentModel = () => {
    setModelVisible(true);
  };
  const onAddButtonPress = () => {
    //   navigation && navigation.navigate('ShoppingCart');
  };
  const addToWishList = (props) => {
    let messageContext = isWishlist?'removed from':'added to';
    setIsWishList(!isWishlist);
    ToastAndroid.show(`${messageContext} your wishlist`, ToastAndroid.SHORT, ToastAndroid.CENTER);
}
  const buttons = availabilityData.map((e) => {
    return(`${e.value} ${e.unit}`) 
  }) 
  const renderHeader = () => (
    <Layout style={styles.header}>
      <Carousel
        style={"ImageCard"}
        itemsPerInterval={1}
        items={product.imageLinks}
      ></Carousel>
      <Layout style={styles.detailsContainer} level="1">
        <Text category="h5" style={styles.title}>
          {product.name}
        </Text>
        <Text category="s1" style={styles.discount}>
        {availabilityData[availabilityIndex].discount?
                 `${availabilityData[availabilityIndex].discount} % off`: ''} 
        </Text>
        <View style={styles.ratingContainer}>
          <RatingViewer rating={4.5} />
        </View>
        <Text style={styles.secondHeading} category="s1">
          Available In
        </Text>
        <ButtonGroup
          onPress={updateIndex}
          selectedIndex={availabilityIndex}
          buttons={buttons}
          containerStyle={styles.availablityContainer}
          textStyle={styles.buttonGroupTextStyle}
          selectedTextStyle={styles.buttonGroupSelectedTextStyle}
          buttonStyle={styles.buttonGroupButtonStyle}
          buttonContainerStyle={styles.buttonGroupButtonContainerStyle}
          selectedButtonStyle={styles.buttonGroupSelectedButtonStyle}
        />
        <Button
          style={styles.wishlistButton}
          appearance="ghost"
          status="basic"
          accessoryLeft={isWishlist?WishListIconActive:WishListIconInactive}
          onPress={addToWishList}
        />
        <View style={{ marginTop: 8 }}>
          <View style={{ display: "flex", flexDirection: "column" }}>
            <View style={styles.secondContainer}>
              <Text category="s1" appearance="hint">
                {"Product MRP : "}
              </Text>
              <Text style={styles.actualPrice} category="s1" appearance="hint">
              {`₹ ${availabilityData[availabilityIndex].actualPrice}`}
              </Text>
            </View>
            <View style={styles.secondContainer}>
              <Text category="s1" style={styles.amountText}>
                {"Selling Price : "}
              </Text>
              <Text style={styles.discountPrice} category="h6">
              {`₹ ${availabilityData[availabilityIndex].discountPrice}`}
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.secondHeading} category="s1">
          Product Information
        </Text>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text category="s1" style={styles.secondContainer}>
            {`Specifications : ${product.description['itemProperties']}`}
          </Text>
          <Text category="s1" style={styles.secondContainer}>
            {`Manufacturer Details : ${product.description['sellerName']}`}
          </Text>
          <Text category="s1" style={styles.secondContainer}>
            {`disclaimer : ${product.description['disclaimer']}`}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 16 }}>
          <Text
            style={{ marginTop: 16, fontWeight: "bold", marginRight: 88 }}
            category="s1"
          >
            Ratings and Review
          </Text>
          <Button
            size="small"
            activeOpacity={0.8}
            style={styles.ratingButton}
            onPress={openCommentModel}
          >
            Rate Product
          </Button>
        </View>
      </Layout>
    </Layout>
  );
  const renderCommentHeader = (comment) => (
    <View style={styles.commentHeader}>
      <View style={styles.commentAuthorContainer}>
        <Text category="s2">Karthik H</Text>
        <Text appearance="hint" category="c1">
          20-Aug-2020
        </Text>
      </View>
      <View style={styles.ratingContainerComment}>
        <RatingViewer rating={4.5} />
      </View>
    </View>
  );
  const renderComment = (info) => (
    <Card
      disabled={true}
      style={styles.commentItem}
      header={() => renderCommentHeader(info.item)}
    >
      <Text>Nice Product Worth buying it</Text>
    </Card>
  );
  return (
    <View style={styles.container}>
      <List
        ListHeaderComponent={renderHeader}
        renderItem={renderComment}
        data={product.comments}
      />
      <CartAction quantity={quantity} setQuantity={setQuantity} />
      <CommentModel
        ModelVisible={ModelVisible}
        setModelVisible={setModelVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: "bold",
    width: "90%",
  },
  image: {
    width: 120,
    height: 144,
    alignSelf: 'flex-start'
  },
  buttonGroupTextStyle: {
    fontSize: 13,
    color: "#8c8c8c",
  },
  buttonGroupSelectedTextStyle: {
    fontSize: 13,
    color: "#f77a55",
  },
  buttonGroupButtonStyle: {
    width: 60,
    borderRadius: 10,
  },
  buttonGroupButtonContainerStyle: {
    alignItems: "center",
  },
  buttonGroupSelectedButtonStyle: {
    backgroundColor: "#fff",
    borderColor: "#f77a55",
    borderWidth: 1,
    padding: 6,
    borderRadius: 10,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  ratingButton: {
    marginTop: 10,
    borderColor: "tomato",
    backgroundColor: "tomato",
  },
  rating: {
    marginVertical: 8,
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: "#bfbfbf",
  //   //   backgroundColor: 'background-basic-color-2',
  // },
  commentList: {
    flex: 1,
    //   backgroundColor: 'transparent',
  },
  header: {
    marginBottom: 8,
  },
  image: {
    height: 340,
    width: "100%",
  },
  detailsContainer: {
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  subtitle: {
    marginTop: 4,
  },
  wishlistButton: {
    position: "absolute",
    top: 74,
    right: 12,
  },
  description: {
    marginVertical: 16,
  },
  secondHeading: {
    marginVertical: 16,
    fontWeight: "bold",
  },
  size: {
    marginBottom: 16,
  },
  colorGroup: {
    flexDirection: "row",
    marginHorizontal: -8,
  },
  colorRadio: {
    marginHorizontal: 8,
  },
  actionContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 5,
    marginHorizontal: 10,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  sectionLabel: {
    marginVertical: 8,
  },
  commentInputLabel: {
    fontSize: 16,
    marginBottom: 8,
    //   color: 'text-basic-color',
  },
  discount: {
    color: "#388e3c",
    fontWeight: "bold",
    marginTop: 16,
  },
  commentInput: {
    marginVertical: 8,
    width: "100%",
    height: 100,
    overflow: "hidden",
  },
  commentItem: {
    marginBottom: 8,
    marginHorizontal: 8,
  },
  commentHeader: {
    flexDirection: "row",
    padding: 10,
  },
  commentAuthorContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  commentReactionsContainer: {
    flexDirection: "row",
    marginTop: 8,
    marginHorizontal: -8,
    marginVertical: -8,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  imageContainer: {
    flex: 1,
    marginBottom: -1,
    backgroundColor: "white",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  availablityContainer: {
    flexDirection: "row",
    height: "auto",
    flexWrap: "wrap",
    overflow: "scroll",
    marginVertical: 16,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  secondContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 12,
    marginTop: 8,
  },
  amountButton: {
    borderRadius: 16,
  },
  actualPrice: {
    textAlign: "center",
    marginLeft: 1,
    textDecorationLine: "line-through",
    fontSize: 18,
  },
  discountPrice: {
    textAlign: "center",
    marginRight: 12,
    fontWeight: "bold",
    fontSize: 22,
  },
  Price: {
    marginVertical: 16,
  },
  incrementDecrementContainer: {
    position: "absolute",
    flexDirection: "row",
    right: 0,
    bottom: 6,
  },
  iconButton: {
    paddingHorizontal: 6,
  },
  PlusMinusButton: {
    borderRadius: 20,
    backgroundColor: "#fff",
    borderColor: "tomato",
  },
  amount: {
    textAlign: "center",
    fontSize: 25,
    width: 50,
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 4,
    margin: 4,
    padding: 4,
    width: 50,
    backgroundColor: "#388e3c",
    position: "absolute",
    top: 24,
    right: 5,
  },
  ratingContainerComment: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 4,
    margin: 4,
    padding: 4,
    width: 50,
    backgroundColor: "#388e3c",
  },
});