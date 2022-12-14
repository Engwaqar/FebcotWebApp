import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Responsiveness, { hp, wp } from "../helpers/Responsiveness";
import { colors } from "../constants/colorsPallet";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "./Icon";
import ResponsiveText from "./RnText";
export default function CustomersCard(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                // flexDirection: "row",
                // justifyContent: "space-around",
                marginVertical: 5,
                // backgroundColor: colors.primary
            }}
        >
            <View style={[styles.Boxes, { backgroundColor: props.color }]}>
                {/* <Icon source={props.source} style={styles.boxImages} /> */}
                <ResponsiveText
                    margin={[5, 0, 0, 25]}
                    // textAlign={"center"}
                    color={colors.white}
                >
                    {props.title}
                </ResponsiveText>

                <View style={{ backgroundColor: props.backgroundColor, marginHorizontal: 20, marginVertical: 10, borderRadius: 5 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <ResponsiveText
                            flex={1.4}

                            size={'3'}
                            margin={[5, 0, 0, 10]}
                            color={colors.white}
                        >
                            {props.Subtitle1}
                        </ResponsiveText>
                        <ResponsiveText
                            flex={0.2}
                            size={'3'}
                            margin={[5, 0, 0, 0]}
                            color={colors.white}
                        >
                            {props.Text}
                        </ResponsiveText>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ResponsiveText
                            flex={1.4}

                            size={'3'}
                            margin={[5, 0, 0, 10]}
                            color={colors.white}
                        >
                            {props.Subtitle2}
                        </ResponsiveText>
                        <ResponsiveText
                            flex={0.2}
                            size={'3'}
                            margin={[5, 0, 0, 0]}
                            color={colors.white}
                        >
                            {props.Text}
                        </ResponsiveText>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ResponsiveText
                            flex={1.4}
                            size={'3'}
                            margin={[5, 0, 0, 10]}
                            color={colors.white}
                        >
                            {props.Subtitle3}
                        </ResponsiveText>
                        <ResponsiveText
                            flex={0.2}
                            size={'3'}
                            margin={[5, 0, 0, 0]}
                            color={colors.white}
                        >
                            {props.Text}
                        </ResponsiveText>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ResponsiveText
                            flex={1.4}

                            size={'3'}
                            margin={[5, 0, 0, 10]}
                            color={colors.white}
                        >
                            {props.Subtitle4}
                        </ResponsiveText>
                        <ResponsiveText
                            flex={0.2}
                            size={'3'}
                            margin={[5, 0, 0, 0]}
                            color={colors.white}
                        >
                            {props.Text}
                        </ResponsiveText>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ResponsiveText
                            flex={1.4}
                            size={'3'}
                            margin={[5, 0, 0, 10]}
                            color={colors.white}
                        >
                            {props.Subtitle5}
                        </ResponsiveText>
                        <ResponsiveText
                            flex={0.2}
                            size={'3'}
                            margin={[5, 0, 10, 0]}
                            color={colors.white}
                        >
                            {props.Text}
                        </ResponsiveText>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    footer: {
        flex: 1,
    },
    Boxes: {
        // height: hp(22),
        paddingVertical: wp(2),
        width: wp(90),
        backgroundColor: colors.white,
        elevation: 4,
        justifyContent: "center",
        borderRadius: 5,
        shadowColor: colors.black,
        alignSelf: 'center'


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
