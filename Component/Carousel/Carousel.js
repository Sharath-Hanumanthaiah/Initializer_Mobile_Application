import React from "react";
import {
  StyleSheet,
  useWindowDimensions,
  PixelRatio,
} from "react-native";
import { View, ScrollView, Text } from "react-native";
import SingleCard from "./SingleCard";
import ImageCard from "./ImageCard";
import { Dimensions } from "react-native";

export default function Carousel(props) {
  const { onItemPress, itemType, item } = props;
  const itemsPerInterval =
    props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;

  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(1236);
  const windowWidth = useWindowDimensions().width;
  const init = (width) => {
    // console.log(
    //   width,
    //   windowWidth,
    //   Dimensions.get('screen').width,
    //   PixelRatio.getPixelSizeForLayoutSize(windowWidth)
    // );
    setWidth(width);
    const totalItems = props.item.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  };

  const getInterval = (offset) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset < (width / intervals) * i) {
        return i;
      }
      if (i == intervals) {
        return i;
      }
    }
  };
  let bullets = [];

  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          color: props.style === "ImageCard" ? "black" : "white",
          opacity: interval === i ? 1 : 0.4,
        }}
      >
        &bull;
      </Text>
    );
  }
  return (
    <View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          ...styles.scrollView,
          width: `${100 * item.length}%`,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={(data) => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
        {props.style === "ImageCard" ? (
          <ImageCard items={props.item} width={width} />
        ) : (
          props.item.map((item) => (
            <SingleCard
              key={item.id}
              item={item}
              itemType={itemType}
              width={width / props.item.length}
              onItemPress={onItemPress}
            />
          ))
        )}
      </ScrollView>
      <View style={styles.bullets}>{bullets}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  statsHead: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  container: {
    backgroundColor: "#fbfbfb",
    borderColor: "#ebebeb",
    borderRadius: 10,
  },
  scrollView: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
  bullets: {
    position: "absolute",
    bottom: -5,
    alignSelf: "center",
    flexDirection: "row",
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 45,
    fontWeight: "bold",
  },
  card: {
    flexBasis: "50%",
    flex: 1,
    maxWidth: "50%",
    height: 150,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 2,
  },
});
