import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './Styles/FeedContainerStyle';
import {AppColor} from '../Extras/Colors'

export default function FeedsItemContainer(props) {
    return(
        <View style={{backgroundColor: AppColor.Light, ...styles.w_100, ...styles.custom_padding, ...styles.border_radius_5}}>

        <View style={{ ...styles.d_fex, ...styles.justify_content_between, flexDirection: 'row', ...styles.m_1}}>
            <View>
                <Text style={{...styles.title, ...styles.m_4, ...styles.p_1}}>{props.title}</Text>
            </View>
        </View>
        <View style={{...styles.m_4, ...styles.backgroundcolorwhite, ...styles.border_radius_20}}>
        {/* <View style={{borderWidth: 5, borderRadius: 5, margin: 4}}>  */}
        {props.children}
        </View>
        </View>
    );
}