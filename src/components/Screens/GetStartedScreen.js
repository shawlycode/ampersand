import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const GetStartedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require("../../../assets/hero.png")}
          style={styles.heroImg}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.text1} t>
          keep in touch with the people of ampersand
        </Text>
        <Text style={styles.subText}>
          Sing in or register with your Ampersand email
        </Text>
      </View>
      <View style={styles.buttons}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("registerScreen");
            }}
          >
            <Text style={styles.btnText}>register</Text>
            <View style={styles.btn}></View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("loginScreen");
            }}
          >
            <Text style={styles.btnText}>sign in</Text>
            <View style={styles.btn}></View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 5,
    backgroundColor: "red",
  },
  heroImg: {
    resizeMode: "stretch",
    width: "100%",
    height: "100%",
  },
  text: {
    flex: 4,
  },
  text1: {
    marginVertical: 20,
    paddingHorizontal: 20,
    fontSize: 21,
    color: "#404040",
    textTransform: "uppercase",
  },
  subText: {
    paddingHorizontal: 20,
    fontSize: 18,
    color: "#404040",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  btnText: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "#404040",
  },
  btn: {
    width: 80,
    borderBottomWidth: 2,
    borderBottomColor: "red",
  },
});
