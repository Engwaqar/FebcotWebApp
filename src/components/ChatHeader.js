import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import ResponsiveText from "./RnText";
import { globalPath } from "../constants/globalPath";
import { colors } from "../constants/colorsPallet";
import { wp,hp } from "../helpers/Responsiveness";
import { routeName } from "../constants/routeName";

export default function ChatHeader(props) {

  return (
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.black2,
      height: hp(11),
    }}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
      >
        <Icon
          source={globalPath.backArrow}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
          marginHorizontal: 0,
        }}
      >
        <TouchableOpacity
        //  onPress={() => props.navigation.navigate(routeName.LOGIN)}
         >
        <Icon
          style={{ marginTop: 20 }}
          borderRadius={30}
          alignItems={'center'}
          size={30}
          resizeMode={"contain"}
          source={globalPath.home}
        />
        </TouchableOpacity>
        <View style={{ flex: 0.8,alignItems:'center',marginTop:20}}>
          <ResponsiveText color={colors.white} size={4}>
            {props.title}
          </ResponsiveText>
          <ResponsiveText color={colors.lightGrey} size={2.5}>
            {props.status}
          </ResponsiveText>
        </View>
      </View>
      {/* <TouchableOpacity style={styles.btnBack}>
        <Icon size={15} source={globalPath.video} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBack}>
        <Icon size={15} source={globalPath.audio} />
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({

  btnBack: {
    backgroundColor: colors.green5, padding: 12, borderRadius: 45, marginRight: 5
  }
});
