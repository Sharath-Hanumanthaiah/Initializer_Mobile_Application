import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Text, Avatar, Button } from '@ui-kitten/components';
import {AppColor} from '../Extras/Colors';
import {Search} from '../Extras/Icons';
import {StoreName, CompanyRepsentation, HeaderIconType} from '../Extras/Constants';

export default function Headera(props) {
  const {title} = props;
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (e) => {
    setSearchValue(e);
    // debugger;
  }
    return (
      <View style={styles.header_layout}>
        <View style={styles.layout_company_info}>
          {CompanyRepsentation === "icon" ? (
            <Avatar
              source={require("../../assets/app-icon.png")}
              size="small"
              shape={HeaderIconType}
            />
          ) : (
            <Text
              category="h6"
              style={{
                color: AppColor.White,
                textTransform: "capitalize",
                fontWeight: "bold"
              }}
            >
              {StoreName}
            </Text>
          )}
        </View>
        {/* <View style={{flex: 1}}>
          <Text category='h6' style={styles.textContainer}>
            {title === undefined? '': title}
            </Text>
        </View> */}
        {/* <Layout style={styles.layout_searchBar}> */}
        {/* <SearchBar 
        placeholder="Search" 
        containerStyle={styles.searchBar_container}
        inputContainerStyle={{
          backgroundColor: AppColor.Dull,
          height: 30
        }}
        platform='ios'
        onChangeText={onSearchChange}
        // showLoading={true}
        onCancel={(e) => {
          // debugger
          // props.searchValue = ""
        }}
        value={searchValue}
      /> */}
        {/* </Layout> */}
      </View>
    );
  }
  const styles = StyleSheet.create({
    header_layout: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      marginLeft: 5,
      backgroundColor: AppColor.AppColorVibrant,
    },
    layout_company_info: {
      flex: 0.5,
      backgroundColor: AppColor.Vibrant,
    },
    layout_searchBar: {
      flex: 4,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    textContainer: {
      color: AppColor.White,
      // fontWeight: "bold",
      justifyContent: "center",
    },
    searchBar_container: {
      backgroundColor: AppColor.Vibrant,
      height: 30,
      borderColor: AppColor.Vibrant,
    },
    searchButton: {
      justifyContent: "center",
    },
  });
  