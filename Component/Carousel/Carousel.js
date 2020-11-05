import React from "react";
import { StyleSheet } from "react-native";
import { View, ScrollView, Text } from "react-native";
import SingleCard from "./SingleCard";

export default function Carousel(props) {
  const { onItemPress } = props;
  const itemsPerInterval =
    props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;

  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);
  const init = (width) => {
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
          opacity: interval === i ? 1 : 0.3,
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
            width: `${100 * intervals}%`,
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
          {props.item.map((item) => (
            <SingleCard
              key={item.id}
              item={item}
              width={width/props.item.length}
              onItemPress={onItemPress}
            />
          ))}
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
    // width: '100%',
    // height: 50,
    backgroundColor: "#fbfbfb",
    borderColor: "#ebebeb",
    // borderWidth: 1,
    borderRadius: 10,
    // shadowColor: '#fcfcfc',
    // shadowOpacity: 1,
    // marginTop: 10,
    // shadowOffset: {
    //   width: 0,
    //   height: 5
    // },
  },
  scrollView: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
  bullets: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 25,
    fontWeight: "bold"
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
