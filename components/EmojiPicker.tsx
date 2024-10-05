import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  isVisible: boolean;
  children?: React.ReactNode;
  onClose: () => void;
};

const EmojiPicker = ({ isVisible, children, onClose }: Props) => {
  return (
    <Modal
      animationType="slide"
      style={styles.modalContent}
      transparent={true}
      visible={isVisible}
    >
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Chose a sticker.</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" size={24} color="#fff"></MaterialIcons>
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
};

export default EmojiPicker;

const styles = StyleSheet.create({
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 2,
  },
  titleContainer: {
    height: "16%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});
