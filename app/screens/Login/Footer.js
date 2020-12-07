import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import facebookText from "../../assets/images/facebookTextLogo.png";
import colors from "../../constants/colors";
import { gStyles } from "../../styles/styles";

function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.viewAsk}>
        <Text style={styles.footerBaseText}>Don't have an account? </Text>
        <Text style={[gStyles.link, {fontWeight: "400"}]}>Sign Up</Text>
        <Text style={styles.footerBaseText}>.</Text>
      </View>
      <View style={styles.viewBrandOwner}>
        <Text style={styles.footerBaseText}>from</Text>
        <Image style={styles.ownerImg} source={facebookText} />
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
  viewAsk: {
    ...gStyles.center,
    flex: 0.5,
    flexDirection: "row",
  },
  viewBrandOwner: {
    ...gStyles.center,
    flex: 0.5,
    width: "100%",
  },
  ownerImg: {
    width: 130,
    height: 15,
    marginTop: 10,
  },
  footerBaseText: {
    fontWeight: "500",
    color: colors.TEXT_SECONDARY,
  },
});

export { Footer };
