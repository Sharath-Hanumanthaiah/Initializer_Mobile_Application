import React, { useState } from "react";
import {
  ImageBackground,
  ImageBackgroundProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

// const DEFAULT_OVERLAY_COLOR = "rgba(0, 0, 0, 0.45)";
// import ContentLoader from "react-content-loader/native";
import {CardLoader} from '../Extras/Loaders'

export default function ImageOverlay(props) {
  const { keyValue,style, children, type, ...imageBackgroundProps } = props;
  const { overlayColor, ...imageBackgroundStyle } = StyleSheet.flatten(style);
  const [loading, setLoading] = useState(true);
  return (
    <ImageBackground
      key={keyValue}
      {...imageBackgroundProps}
      style={imageBackgroundStyle}
      onLoad={() => setLoading(true)}
      onLoadEnd={() => setLoading(false)}
    >
      {loading ? <CardLoader type={type} /> : <>{children}</>}
    </ImageBackground>
  );
}
