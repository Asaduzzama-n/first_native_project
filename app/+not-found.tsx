import { StyleSheet, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const NotFound = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Page Not Found!" }} />
      <View style={styles.container}>
        <Link style={styles.text} href={"/"}>
          Go back to Home Screen!
        </Link>
      </View>
    </>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#ffff",
    fontSize: 24,
  },
});
