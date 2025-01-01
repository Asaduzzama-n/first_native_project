import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView className="bg-white h-full flex flex-col justify-center items-center">
      <View className="flex flex-col items-center">
        <Text className="font-bold text-3xl text-blue-400">
          Welcome to Restate
        </Text>

        <Link className="text-xl" href="/sign-in">
          Sign In
        </Link>
        <Link className="text-xl" href="/explore">
          Explore
        </Link>
        <Link className="text-xl" href="/profile">
          Profile
        </Link>
        <Link className="text-xl" href="/properties/1">
          property
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Index;
