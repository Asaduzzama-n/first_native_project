import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import Search from "@/components/Search";
import { Card, FeaturedCard } from "@/components/Cards";

const Index = () => {
  return (
    <SafeAreaView className="bg-white h-full p-4 ">
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row items-center">
          <Image source={images.avatar} className="h-20 w-20 "></Image>
          <View className="ml-4">
            <Text className="font-rubikSemiBold">Good Morning</Text>
            <Text className="text-2xl font-bold">John Doe</Text>
          </View>
        </View>
        <View>
          <Image source={icons.bell} className="h-8 w-8"></Image>
        </View>
      </View>
      <Search></Search>
      <View className="my-5">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-xl font-bold">Featured</Text>
          <TouchableOpacity>
            <Text className="text-primary-300 font-semibold text-lg">
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FeaturedCard></FeaturedCard>
      <Card></Card>
    </SafeAreaView>
  );
};

export default Index;
