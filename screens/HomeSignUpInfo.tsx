import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const HomeSignUpInfo = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.homesignUpInfo, styles.iconLayout]}>
      <View style={styles.iphoneStatusBarupperdark}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.statusIcons}>
          <Image
            style={styles.networkSignalLight}
            contentFit="cover"
            source={require("../assets/network-signal-light.png")}
          />
          <Image
            style={[styles.wifiSignalLight, styles.lightSpaceBlock]}
            contentFit="cover"
            source={require("../assets/wifi-signal--light.png")}
          />
          <Image
            style={[styles.batteryLight, styles.lightSpaceBlock]}
            contentFit="cover"
            source={require("../assets/battery--light.png")}
          />
        </View>
        <Image
          style={styles.indicatorIcon}
          contentFit="cover"
          source={require("../assets/indicator.png")}
        />
        <Image
          style={[styles.timeLight, styles.timeLightPosition]}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <Pressable
        style={[styles.iconArrowLeft, styles.timeLightPosition]}
        onPress={() => navigation.navigate("HomeSignUp")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--arrow-left.png")}
        />
      </Pressable>
      <Text style={[styles.fishBox, styles.fishBoxFlexBox]}>FISH BOX</Text>
      <View style={[styles.builtByAndForStudentsWrapper, styles.wrapperBorder]}>
        <Text
          style={[styles.builtByAnd, styles.builtByAndTypo]}
        >{`Built by and for students `}</Text>
      </View>
      <View
        style={[styles.easilyGiftOrRequestCommonlWrapper, styles.wrapperBorder]}
      >
        <Text style={[styles.easilyGiftOr, styles.builtByAndTypo]}>
          Easily gift or request commonly (or unique!) items on and off campus.
          Whether it is a cup of sugar or a semester’s worth of notes, you can
          easily lean on your community!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  timeLightPosition: {
    left: 22,
    position: "absolute",
  },
  fishBoxFlexBox: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  wrapperBorder: {
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  builtByAndTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.black,
  },
  notchIcon: {
    width: 430,
    height: 54,
    zIndex: 0,
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 22,
    right: 36,
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    zIndex: 2,
    position: "absolute",
  },
  timeLight: {
    top: 19,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    zIndex: 3,
    overflow: "hidden",
  },
  iphoneStatusBarupperdark: {
    marginLeft: -215,
    top: 0,
    height: 65,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  iconArrowLeft: {
    top: 65,
    width: 48,
    height: 48,
  },
  fishBox: {
    top: 213,
    fontSize: FontSize.size_45xl,
    lineHeight: 64,
    fontFamily: FontFamily.londrinaSolidRegular,
    width: 215,
    height: 44,
    textAlign: "center",
    color: Color.black,
    justifyContent: "center",
    display: "flex",
    marginLeft: -108,
    left: "50%",
    position: "absolute",
  },
  builtByAnd: {
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 167,
  },
  builtByAndForStudentsWrapper: {
    marginTop: 356,
    top: "50%",
    backgroundColor: "#c1e9aa",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 9,
    marginLeft: -108,
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
  },
  easilyGiftOr: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 318,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  easilyGiftOrRequestCommonlWrapper: {
    marginLeft: -180,
    top: 313,
    backgroundColor: Color.colorPaleturquoise_100,
    width: 359,
    height: 193,
    paddingHorizontal: 14,
    paddingVertical: Padding.p_2xl,
  },
  homesignUpInfo: {
    backgroundColor: Color.colorLightblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
  },
});

export default HomeSignUpInfo;
