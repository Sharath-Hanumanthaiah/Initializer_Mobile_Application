import React from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { Input, List, ListItem } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Search } from "../Extras/Icons";
import { AppColor } from "../Extras/Colors";

const data = new Array(8).fill({
  title: "Item",
});

export default function SearchContainer() {
  const navigation = useNavigation();
  const renderItem = ({ item, index }) => (
    <ListItem title={`${item.title} ${index + 1}`} accessoryLeft={Search} />
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "flex-end",
        flexDirection: "column",
      }}
    >
      <TouchableOpacity
        style={{
          flex: 0.2,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "transparent",
        }}
        onPress={() => navigation.goBack()}
      ></TouchableOpacity>
      <View
        style={{
          flex: 0.8,
          alignItems: "center",
          width: "100%",
          backgroundColor: AppColor.Dull,
        }}
      >
        <Input
          style={{ alignSelf: "flex-start", margin: 10 }}
          size="large"
          placeholder="Search for items..."
          placeholderTextColor={AppColor.Dull}
          accessoryRight={() => Search(AppColor.Vibrant)}
        />
        <List
          style={{ width: "100%" }}
          data={data}
          renderItem={renderItem}
          onScrollBeginDrag={false}
        />
      </View>
    </View>
  );
}
