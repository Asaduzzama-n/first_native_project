import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

type Props = {
  imgSource: string;
  selectedImage?: string | undefined;
};

const ImageViewer = ({ imgSource, selectedImage }: Props) => {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
  return <Image style={styles.image} source={imageSource}></Image>;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
