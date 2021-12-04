import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LogInDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginHero}>
        <Image
          source={require("../../../assets/heroagain.jpg")}
          style={styles.img}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          type="password"
          style={styles.formText}
        />
        <TextInput placeholder="Password" style={styles.formText} />
      </View>
      <View style={styles.signInBtn}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("logindetails");
          }}
        >
          <Text style={styles.text}>sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogInDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginHero: {
    flex: 3,
    backgroundColor: "yellow",
  },
  img: {
    resizeMode: "stretch",
    width: "100%",
    height: "100%",
  },
  form: {
    flex: 2,
    backgroundColor: "#17202A",
  },
  formText: {
    fontSize: 30,
    color: "#F2F3F4",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  signInBtn: {
    flex: 4,
    backgroundColor: "#17202A",
  },
  btn: {
    width: 400,
    height: 70,
    backgroundColor: "#F90A56",
    borderRadius: 5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    marginHorizontal: 30,
  },
  text: {
    color: "#fff",
    fontSize: 26,
    textTransform: "uppercase",
  },
});
