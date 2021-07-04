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
export const MediumStar = (style) => (
  <Icon {...style} name='star'/>
)
export const Delete = () => (
  <MaterialCommunityIcons name='delete' size={23} color={AppColor.Grey}/>
)
export const Search = (color) => (
  <MaterialCommunityIcons name="magnify" size={25} style={{color: color? color : AppColor.White, marginHorizontal: 2}} />
)

export const Edit = () => (
  <MaterialCommunityIcons name="account-edit" size={35} style={{color: AppColor.White, marginHorizontal: 2}} />
)
export const UserEdit = () => (
  <MaterialCommunityIcons name="account-edit" size={23} style={{color: AppColor.Light}} />
)
export const AddressIcon = () => (
  <MaterialCommunityIcons name="ballot" size={23} style={{color: AppColor.Light}} />
)
export const PasswordIcon = () => (
  <MaterialCommunityIcons name="key-variant" size={23} style={{color: AppColor.Light}} />
)

// card-account-details

export const ArrowRight = (style) => (
  <MaterialCommunityIcons name="chevron-right" size={23} style={{color: AppColor.Light, ...style.style}} />
)
export const ArrowDown = (style) => (
  <MaterialCommunityIcons name="chevron-down" size={23} style={{color: AppColor.Light, ...style.style}} />
)
export const ArrowUp = (style) => (
  <MaterialCommunityIcons name="chevron-up" size={23} style={{color: AppColor.Light, ...style.style}} />
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