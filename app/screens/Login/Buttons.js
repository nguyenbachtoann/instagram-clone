import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import facebook from "../../assets/images/Facebook-01.png";
import colors from "../../constants/colors";
import { gStyles } from "../../styles/styles";

function Buttons() {
  return (
    <View style={styles.container}>
      <View style={styles.viewLoginBtn}>
        <TouchableHighlight style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Log In</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.viewFBOpts}>
        <View style={styles.viewFBOptsContinueAs}>
          <View style={styles.viewFBOptsContinueAsInner}>
            <Image style={styles.FBOptsContinueAsImg} source={facebook} />
            <Text style={gStyles.link}>Continue as Nguyen Bach Toan</Text>
          </View>
        </View>
        <View style={styles.viewFBOptsOr}>
          <View style={styles.divider} />
          <View>
            <Text style={styles.dividerText}>OR</Text>
          </View>
          <View style={styles.divider} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...gStyles.font,
    flex: 1,
    justifyContent: "center",
  },
  viewLoginBtn: {
    flex: 0.5,
  },
  viewFBOpts: {
    flex: 0.5,
  },
  viewFBOptsContinueAs: {
    flex: 0.8,
    justifyContent: "flex-start",
  },
  viewFBOptsContinueAsInner: {
    ...gStyles.center,
    height: 20,
    flexDirection: "row",
  },
  FBOptsContinueAsImg: {
    width: 25,
    height: 25,
    marginBottom: 2,
    marginRight: 10,
  },
  viewFBOptsOr: {
    ...gStyles.center,
    flex: 0.2,
    flexDirection: "row",
  },
  divider: {
    flex: 1,
    height: 0.7,
    backgroundColor: colors.BORDER_PRIMARY,
  },
  dividerText: {
    width: 50,
    textAlign: "center",
    color: colors.TEXT_SECONDARY,
    fontWeight: "500",
  },
  loginBtn: {
    ...gStyles.center,
    backgroundColor: "dodgerblue",
    height: 50,
    borderRadius: 5,
  },
  loginBtnText: {
    color: "white",
    fontWeight: "700",
  },
});

export { Buttons };
