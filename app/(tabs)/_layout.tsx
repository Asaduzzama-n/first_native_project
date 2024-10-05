import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Iconicons from "@expo/vector-icons/Ionicons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: { backgroundColor: "#25292e" },
        headerShadowVisible: false,
        headerTintColor: "#ffff",
        tabBarStyle: {
          backgroundColor: "#25292e",
          borderTopColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Iconicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Iconicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              size={24}
              color={color}
            ></Iconicons>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
