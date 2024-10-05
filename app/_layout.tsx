import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const RootLayout = () => {
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("light");
    }, 0);
  }, []);

  return (
    <>
      <GestureHandlerRootView>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </GestureHandlerRootView>
      <StatusBar style="light" />
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
