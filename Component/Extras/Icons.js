import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppColor} from './Colors';

export const WishListIconActive = () => (
    <MaterialCommunityIcons name='heart' size={23} color={AppColor.Vibrant}/>
  )

export const WishListIconInactive = () => (
<MaterialCommunityIcons name='heart-outline' size={23} color={AppColor.Vibrant}/>
);
export const MinusIcon = () => (
    <MaterialCommunityIcons name='minus' size={23} color={AppColor.Vibrant}/>
  )
export const PlusIcon = () => (
    <MaterialCommunityIcons name="plus" size={23} color={AppColor.Vibrant}/>
  );

export const TinyStar = () => (
    <MaterialCommunityIcons name="star" size={15} style={{color: AppColor.White, marginHorizontal: 2}} />
)

export const Search = () => (
  <MaterialCommunityIcons name="magnify" size={25} style={{color: AppColor.White, marginHorizontal: 2}} />
)

export const Edit = () => (
  <MaterialCommunityIcons name="account-edit" size={35} style={{color: AppColor.White, marginHorizontal: 2}} />
)