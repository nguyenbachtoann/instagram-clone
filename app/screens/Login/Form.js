import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { gStyles } from "../../styles/styles";
import colors from "../../constants/colors";
function Form() {
  return (
    <View style={styles.container}>
      <View style={styles.viewInputs}>
        <TextInput
          style={[styles.textInput]}
          placeholder="Phone number, username or email"
          textContentType="username"
          placeholderTextColor={colors.TEXT_SECONDARY}
        />
        <TextInput
          style={[styles.textInput]}
          placeholder="Password"
          textContentType="password"
          placeholderTextColor={colors.TEXT_SECONDARY}
        />
      </View>
      <View style={styles.viewForgotPW}>
        <Text style={gStyles.link}>Forgot password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...gStyles.font,
    flex: 1,
    width: "100%",
  },
  textInput: {
    borderColor: colors.BORDER_PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    marginBottom: 10,
    fontWeight: "500",
    padding: 10,
  },
  viewInputs: {
    flex: 0.75,
    justifyContent: "center",
  },
  viewForgotPW: {
    alignItems: "flex-end",
    flex: 0.25,
  },
});

export { Form };
