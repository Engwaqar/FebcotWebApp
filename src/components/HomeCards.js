import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Responsiveness, { hp, wp } from "../helpers/Responsiveness";
import { colors } from "../constants/colorsPallet";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "./Icon";
import ResponsiveText from "./RnText";
export default function HomeCards(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 5,
        backgroundColor: colors.white
      }}
    >
      <View style={[styles.Boxes, { backgroundColor: props.color }]}>
        {/* <Icon source={props.source} style={styles.boxImages} /> */}
       

        {props.count ? (
          <ResponsiveText
            textAlign={"center"}
            size={7}
            color={colors.white}>
            {props.count}
          </ResponsiveText>
        ) : null}
         <ResponsiveText
          margin={[5, 0, 0, 0]}
          textAlign={"center"}
          color={colors.white}
        >
          {props.title}
        </ResponsiveText>
        {/* <ResponsiveText
          margin={[5, 0, 0, 0]}
          textAlign={"center"}
          color={colors.white}
        >
          {props.Subtitle}
        </ResponsiveText> */}
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  footer: {
    flex: 1.6,
    backgroundColor: colors.white,
  },
  Boxes: {
    // height: hp(22),
    paddingVertical: wp(2),
    width: wp(45),
    backgroundColor: colors.white,
    elevation: 4,
    justifyContent: "center",
    borderRadius: 5,
    shadowColor: colors.black,

  },
  boxImages: {
    height: wp(20),
    width: wp(20),
    alignSelf: "center",
  },
  boxText: {
    fontSize: hp(1.7),
    alignSelf: "center",
    marginTop: 5,
  },

});
