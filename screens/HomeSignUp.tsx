import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const HomeSignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.homesignUp, styles.iconLayout]}>
      <View style={[styles.iphoneStatusBarupperdark, styles.logoPosition]}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.logoItemPosition]}>
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
          style={styles.timeLight}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <Text style={[styles.fishBox, styles.fishBoxFlexBox]}>FISH BOX</Text>
      <Pressable
        style={[styles.diveInWrapper, styles.fishBoxFlexBox]}
        onPress={() => navigation.navigate("PostFeed")}
      >
        <Text style={styles.diveIn}>Dive in!</Text>
      </Pressable>
      <Pressable
        style={styles.iconLightBulbLightbulbId}
        onPress={() => navigation.navigate("HomeSignUpInfo")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--light-bulb-lightbulb-idea.png")}
        />
      </Pressable>
      <View style={[styles.logo, styles.logoPosition]}>
        <Image
          style={styles.logoChild}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.logoItem, styles.logoItemPosition]}
          contentFit="cover"
          source={require("../assets/frame-34.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  logoPosition: {
    left: "50%",
    position: "absolute",
  },
  logoItemPosition: {
    zIndex: 1,
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  fishBoxFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
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
    alignItems: "center",
    zIndex: 1,
    flexDirection: "row",
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
    left: 22,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    zIndex: 3,
    position: "absolute",
    overflow: "hidden",
  },
  iphoneStatusBarupperdark: {
    marginLeft: -215,
    top: 0,
    height: 65,
    overflow: "hidden",
  },
  fishBox: {
    marginLeft: -108,
    top: 213,
    fontSize: FontSize.size_45xl,
    lineHeight: 64,
    fontFamily: FontFamily.londrinaSolidRegular,
    textAlign: "center",
    display: "flex",
    width: 215,
    height: 44,
    color: Color.black,
  },
  diveIn: {
    fontSize: FontSize.size_6xl,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
    color: Color.black,
  },
  diveInWrapper: {
    marginLeft: -115,
    top: 623,
    borderRadius: 9,
    backgroundColor: Color.colorPaleturquoise_200,
    borderStyle: "solid",
    borderColor: Color.black,
    borderWidth: 2,
    paddingHorizontal: 71,
    paddingVertical: Padding.p_2xl,
    flexDirection: "row",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  iconLightBulbLightbulbId: {
    left: 360,
    top: 859,
    width: 48,
    height: 48,
    position: "absolute",
  },
  logoChild: {
    width: 266,
    height: 266,
    zIndex: 0,
  },
  logoItem: {
    top: 98,
    left: 63,
    width: 140,
    height: 71,
  },
  logo: {
    marginLeft: -133,
    top: 307,
    flexDirection: "row",
  },
  homesignUp: {
    backgroundColor: Color.colorLightblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
  },
});

export default HomeSignUp;
