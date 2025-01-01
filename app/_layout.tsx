import { SplashScreen, Stack } from "expo-router";
import "./global.css";

import { useFonts } from "expo-font";
import { useEffect } from "react";
import { AppContextProvider } from "@/lib/useContext";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Rubik: require("../assets/fonts/Rubik-Regular.ttf"),
    RubikBold: require("../assets/fonts/Rubik-Bold.ttf"),
    RubikMedium: require("../assets/fonts/Rubik-Medium.ttf"),
    RubikSemiBold: require("../assets/fonts/Rubik-SemiBold.ttf"),
    RubikLight: require("../assets/fonts/Rubik-Light.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppContextProvider>
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </AppContextProvider>
  );
}
