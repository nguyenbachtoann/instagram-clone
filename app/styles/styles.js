// common styles
import { StyleSheet } from "react-native";
import colors from "../constants/colors";
export const gStyles = StyleSheet.create({
  link: {
    color: colors.TEXT_LINK,
    fontWeight: "600"
  },
  center: {
    justifyContent:"center",
    alignItems:"center",
  },
  font:{
    fontFamily: "Roboto",
  }
});
