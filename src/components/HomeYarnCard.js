import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Responsiveness, { hp, wp } from "../helpers/Responsiveness";
import { colors } from "../constants/colorsPallet";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "./Icon";
import ResponsiveText from "./RnText";
export default function HomeYarnCard(props) {
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
            <View style={{ marginLeft:5 }}>
                    <Icon source={props.source} style={styles.boxImages} />
                </View>
                <View style={{ flex: 1, }}>
                    <ResponsiveText
                        margin={[5, 0, 0, 5]}
                        //   textAlign={"center"}
                        color={colors.black}
                    >
                        {props.title}
                    </ResponsiveText>

                    {props.count ? (
                        <ResponsiveText
                         size={7}
                        //  alignItems={'center'}
                        margin={[0, 0, 0, 30]}
                        color={colors.primary}>
                            {props.count}
                        </ResponsiveText>
                    ) : null}
                   

                </View>
                
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
        // flex:1
        flexDirection: 'row',
        alignItems:'center'
    },
    boxImages: {
        height: wp(10),
        width: wp(10),
        alignSelf: "center",
        marginRight:5
    },
    boxText: {
        fontSize: hp(1.7),
        alignSelf: "center",
        marginTop: 5,
    },

});
