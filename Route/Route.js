import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../src/components/Screens/WelcomeScreen";
import GetStartedScreen from "../src/components/Screens/GetStartedScreen";
import RegisterScreen from "../src/components/Screens/RegisterScreen";
import LoginScreen from "../src/components/Screens/LoginScreen";
import LogInDetailsScreen from "../src/components/Screens/LogInDetailsScreen";

const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={WelcomeScreen}>
        <Stack.Screen
          name="welcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="getStarted"
          component={GetStartedScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="registerScreen"
          component={RegisterScreen}
          options={{
            headerStyle: {
              backgroundColor: "#F90A56",
              height: 130,
            },
            headerTitle: "Register",
            headerBackTitle: false,
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="loginScreen"
          component={LoginScreen}
          options={{
            headerStyle: {
              backgroundColor: "#F90A56",
              height: 130,
            },
            headerTitle: "Sing In",
            headerBackTitle: false,
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="details"
          component={LogInDetailsScreen}
          options={{
            headerBackTitle: false,
            // headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#F90A56",
              height: 130,
            },
            headerTitleStyle: {
              fontSize: 24,
              color: "#fff",
              textTransform: "uppercase",
            },
            headerBackTitleStyle: {
              color: "#fff",
              fontSize: 20,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
