import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
};
const IconButton = ({ onPress, label, icon }: Props) => {
  return (
    <View>
      <Pressable style={styles.IconButton} onPress={onPress}>
        <MaterialIcons name={icon} size={24} color="#fff"></MaterialIcons>
        <Text style={styles.iconButtonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  IconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#ffff",
    marginTop: 12,
  },
});
