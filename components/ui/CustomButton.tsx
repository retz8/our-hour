import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type CustomButtonProps = { text: string; onClick: () => void };

export default function CustomButton({ text, onClick }: CustomButtonProps) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.background,
    color: Colors.text,
    paddingVertical: 21,
    paddingHorizontal: 19,
    borderRadius: 12,
    shadowColor: "#64A223",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.5,
    elevation: 4, // for Android
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: -0.352,
  },
});
