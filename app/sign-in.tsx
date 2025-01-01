import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

import { Link, Redirect } from "expo-router";

const SignIn = () => {
  const handleLogin = () => {
    Alert.alert("Login", "Login with Google");
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-base text-center uppercase  tex-black-200 font-rubikBold">
            Welcome to ReState
          </Text>
          <Text className="text-3xl font-bold text-black-300 text-center mt-2 font-rubikBold">
            Let's Get ou Closer to {"\n"}{" "}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-lg font-semibold text-black-200 text-center mt-12">
            Login to ReState with Google
          </Text>

          <TouchableOpacity
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5 font-rubikSemiBold"
            onPress={handleLogin}
          >
            <View className="flex flex-row items-center justify-center">
              <Image source={icons.google} className="w-5 h-5"></Image>
              <Text className="text-lg  text-black-300 ml-2 font-rubikSemiBold">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
