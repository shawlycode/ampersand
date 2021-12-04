import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require("../../../assets/ampersand_logo.png")}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>ampersand</Text>
        <Text style={styles.titleText}>contacts</Text>
      </View>
      <View style={styles.getStartedBtn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("getStarted");
          }}
        >
          <Text style={styles.getStartedBtnText}>Get started</Text>
          <View style={styles.btn}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  logo: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    resizeMode: "contain",
    width: 250,
    height: 250,
    justifyContent: "center",
  },
  title: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    textTransform: "uppercase",
    color: "#8A878C",
  },
  getStartedBtn: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  getStartedBtnText: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "#8A878C",
  },
  btn: {
    width: 120,
    height: 10,
    borderBottomWidth: 4,
    borderBottomColor: "red",
  },
});
