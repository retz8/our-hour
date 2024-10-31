import CustomButton from "@/components/ui/CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  Text,
  View,
} from "react-native";

const AppTitle = require("../assets/images/ourHour.png");
const HomeSquirrel = require("../assets/images/home-squirrel.png");

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["rgba(245, 245, 245, 1)", "rgba(249, 255, 238, 1)"]}
      style={styles.safeArea}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* ourHour logo */}
          <Image source={AppTitle} />

          {/* "Start Talking Button" */}

          <CustomButton text="Start Talking" onClick={() => {}} />

          {/* Image */}
          <Image source={HomeSquirrel} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    rowGap: 62.5,

    paddingTop: 158,
  },
});
