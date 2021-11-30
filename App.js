import { StatusBar } from "expo-status-bar";
import React from "react";
import GetStartedScreen from "./src/components/Screens/GetStartedScreen";
// import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./src/components/Screens/WelcomeScreen";

export default function App() {
  return (
    // <View style={styles.container}>
    <GetStartedScreen />

    // <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
