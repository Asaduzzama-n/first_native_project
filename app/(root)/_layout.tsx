import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import React from "react";
import { useAppContext } from "@/lib/useContext";
import { Redirect, Slot } from "expo-router";

const RootLayout = () => {
  const { user, loading } = useAppContext();

  if (loading)
    return (
      <SafeAreaView className="flex justify-center items-center h-full">
        <ActivityIndicator size="large" className="text" />
      </SafeAreaView>
    );

  if (!user) return <Redirect href={"/sign-in"} />;

  return <Slot />;
};

export default RootLayout;
