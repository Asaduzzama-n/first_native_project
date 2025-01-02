import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";
type IProps = {
  onPress?: () => void;
};
export const FeaturedCard = ({ onPress }: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image source={images.japan} className="size-full rounded-2xl"></Image>
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      ></Image>

      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className="size-3.5"></Image>
        <Text className="text-xs font-bold text-primary-300 ml-2">4.4</Text>
        <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
          <Text
            className="text-xl font-rubik-extrabold text-white"
            numberOfLines={1}
          >
            Modern Apartment
          </Text>
          <Text className="text-base font-rubik text-white absolute bottom-0">
            22 W 15th St, New York, NY
          </Text>
          <View className="flex flex-row items-center mt-2 w-full">
            <Text className="text-xl font-bold text-white">%25,00</Text>
            <Image source={icons.heart} className="size-5"></Image>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = () => {
  return (
    <View>
      <Text>Card</Text>
    </View>
  );
};
