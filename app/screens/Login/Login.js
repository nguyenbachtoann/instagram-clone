import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View, Text, Image } from "react-native";
import { Form } from "./Form";
import { Buttons } from "./Buttons";
import { Footer } from "./Footer";
import logo from "../../assets/images/icon.png";
import { gStyles } from "../../styles/styles";
function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.viewTitle}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.viewForm}>
        <Form />
      </View>
      <View style={styles.viewButtons}>
        <Buttons />
      </View>
      <View style={styles.viewFooter}>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const inputPadLR = {
  paddingLeft: 15,
  paddingRight: 15,
}

const styles = StyleSheet.create({
  container: {
    ...gStyles.font,
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 10,
  },

  viewTitle: {
    ...gStyles.center,
    flex: 0.25,
  },
  viewForm: {
    ...gStyles.center,
    flex: 0.25,
    ...inputPadLR
  },
  viewButtons: {
    flex: 0.2,
    ...inputPadLR
  },
  viewFooter: {
    flex: 0.3,
    ...inputPadLR
  },
});

export { Login };
