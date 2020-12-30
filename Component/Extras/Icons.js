import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppColor} from './Colors';
import { Icon } from '@ui-kitten/components';

export const EyeIcon = (style) => (
  <Icon style={{width: 32, height: 32}} fill='#8F9BB3' name='eye-outline'/>
);

export const EyeOffIcon = (style) => (
  <Icon {...style} name='eye-off'/>
);

export const PersonIcon = (style) => (
  <Icon {...style} name='person'/>
);

export const WishListIconActive = () => (
    <MaterialCommunityIcons name='heart' size={23} color={AppColor.Vibrant}/>
  )
  export const Cancel = () => (
    <MaterialCommunityIcons name='cart-off' size={23} color={AppColor.Grey}/>
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
export const Delete = () => (
  <MaterialCommunityIcons name='delete' size={23} color={AppColor.Grey}/>
)
export const Search = () => (
  <MaterialCommunityIcons name="magnify" size={25} style={{color: AppColor.White, marginHorizontal: 2}} />
)

export const Edit = () => (
  <MaterialCommunityIcons name="account-edit" size={35} style={{color: AppColor.White, marginHorizontal: 2}} />
)
export const FormEdit = () => (
  <MaterialCommunityIcons name='pencil' size={23} color={AppColor.Grey}/>
)

export const DotVertical = () => (
  <MaterialCommunityIcons name="dots-vertical" size={23} color={AppColor.Vibrant}/>
)

export const OfferIcon = () => ( 
  <MaterialCommunityIcons
              name="brightness-percent"
              size={20}
              color={AppColor.White}
              style={{ marginLeft: 5 }}
            />
)