import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// screens
import { Login } from "./app/screens/Login/Login";

export default function App() {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
}