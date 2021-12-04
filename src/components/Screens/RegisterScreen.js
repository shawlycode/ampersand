import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.profile}
        onPress={() => {
          alert("profile photo added");
        }}
      >
        <MaterialCommunityIcons name="account-tie" size={150} color="purple" />
        <Text style={styles.profileText}>add profile photo</Text>
      </TouchableOpacity>
      <View style={styles.formContainer}>
        <TextInput placeholder="Full Name" style={styles.formInput} />
        <TextInput placeholder="Email" style={styles.formInput} />
        <TextInput placeholder="Phone Number" style={styles.formInput} />
        <TextInput placeholder="Role" style={styles.formInput} />
        <TextInput placeholder="Twitter" style={styles.formInput} />
        <TextInput placeholder="LinkedIn" style={styles.formInput} />
      </View>
      <View style={styles.registerBtn}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
  },
  profileText: {
    fontSize: 24,
    textTransform: "uppercase",
    color: "purple",
  },
  formContainer: {
    flex: 5,
    justifyContent: "flex-start",
    marginHorizontal: 20,
  },
  formInput: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 10,
    marginBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: "#D5D8DC",
  },
  registerBtn: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 60,
    backgroundColor: "#F90A56",
    borderRadius: 5,
  },
  btnText: {
    fontSize: 26,
    color: "#fff",
    textTransform: "uppercase",
  },
});
