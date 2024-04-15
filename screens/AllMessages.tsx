import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const AllMessages = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.allMessages}>
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
          style={styles.timeLight}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <View style={[styles.contactList, styles.iconParentBorder]}>
        <Pressable
          style={styles.chatLayout}
          onPress={() => navigation.navigate("Messaging")}
        >
          <Image
            style={styles.avatarIcon}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
          <View style={styles.dataContainer}>
            <View style={styles.name}>
              <Text style={[styles.shellyKidds, styles.shellyKiddsFlexBox]}>
                Shelly Kidds
              </Text>
              <Text style={[styles.am, styles.amTypo]}>11:20 am</Text>
            </View>
            <View style={styles.chat}>
              <Text
                style={[
                  styles.giftFairyLightsContainer,
                  styles.shellyKiddsFlexBox,
                ]}
              >
                <Text style={[styles.giftF, styles.giftFTypo]}>Gift: F</Text>
                <Text style={styles.giftFTypo}>
                  airy lights (66ft, 200 LED)
                </Text>
              </Text>
              <View style={styles.tags}>
                <Text style={styles.text}>1</Text>
              </View>
            </View>
          </View>
        </Pressable>
        <View style={[styles.chatStack1, styles.chatLayout]}>
          <Image
            style={styles.profileIcon}
            contentFit="cover"
            source={require("../assets/profile5.png")}
          />
          <View style={styles.dataContainer}>
            <View style={styles.name}>
              <Text style={[styles.shellyKidds, styles.shellyKiddsFlexBox]}>
                Carl Wang
              </Text>
              <Text style={[styles.am1, styles.amTypo]}>11:11 am</Text>
            </View>
            <View style={styles.chat}>
              <Text
                style={[
                  styles.giftFairyLightsContainer,
                  styles.shellyKiddsFlexBox,
                ]}
              >
                <Text style={[styles.giftF, styles.giftFTypo]}>Gift: F</Text>
                <Text style={styles.giftFTypo}>aberware pan - moving out</Text>
              </Text>
              <Image
                style={styles.chatChild}
                contentFit="cover"
                source={require("../assets/group-7.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.chatStack1, styles.chatLayout]}>
          <Image
            style={styles.profileIcon}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
          <View style={styles.dataContainer}>
            <View style={styles.name}>
              <Text style={[styles.shellyKidds, styles.shellyKiddsFlexBox]}>
                Peace L.
              </Text>
              <Text style={[styles.yesterday, styles.amTypo]}>Yesterday</Text>
            </View>
            <View style={styles.chat}>
              <Text
                style={[
                  styles.giftFairyLightsContainer,
                  styles.shellyKiddsFlexBox,
                ]}
              >
                <Text style={[styles.giftF, styles.giftFTypo]}>Request</Text>
                <Text style={styles.giftFTypo}>: Neon tank top</Text>
              </Text>
              <View style={styles.tags}>
                <Text style={styles.text}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.chatStack1, styles.chatLayout]}>
          <Image
            style={styles.profileIcon}
            contentFit="cover"
            source={require("../assets/profile4.png")}
          />
          <View style={styles.dataContainer}>
            <View style={styles.name}>
              <Text style={[styles.shellyKidds, styles.shellyKiddsFlexBox]}>
                Ibi Cookey
              </Text>
              <Text style={[styles.am1, styles.amTypo]}>Yesterday</Text>
            </View>
            <View style={styles.chat}>
              <Text
                style={[
                  styles.giftFairyLightsContainer,
                  styles.shellyKiddsFlexBox,
                ]}
              >
                <Text style={[styles.giftF, styles.giftFTypo]}>Request</Text>
                <Text style={styles.giftFTypo}>: Sewing kit</Text>
              </Text>
              <Image
                style={styles.chatChild}
                contentFit="cover"
                source={require("../assets/group-7.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.messages, styles.fishBoxClr]}>Messages</Text>
      <Text style={[styles.fishBox, styles.fishBoxClr]}>FISH BOX</Text>
      <View style={styles.homeParent}>
        <Pressable
          style={styles.home}
          onPress={() => navigation.navigate("PostFeed")}
        >
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
          <Image
            style={styles.unionIcon}
            contentFit="cover"
            source={require("../assets/union.png")}
          />
        </Pressable>
        <Pressable
          style={styles.dms}
          onPress={() => navigation.navigate("AllMessages")}
        >
          <Text style={[styles.dms1, styles.dms1Typo]}>DMs</Text>
          <Image
            style={[styles.dmIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/dm.png")}
          />
        </Pressable>
        <Pressable
          style={styles.saved}
          onPress={() => navigation.navigate("Saved")}
        >
          <Text style={[styles.saved1, styles.home1Typo]}>Saved</Text>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </Pressable>
        <Pressable
          style={styles.profile}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.profile1, styles.home1Typo]}>Profile</Text>
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.iconParent, styles.chatLayout]}>
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/icon2.png")}
        />
        <Text style={[styles.search, styles.dms1Typo]}>Search</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  iconParentBorder: {
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    backgroundColor: Color.white,
    position: "absolute",
  },
  shellyKiddsFlexBox: {
    textAlign: "left",
    flex: 1,
  },
  amTypo: {
    color: Color.neutralWeak,
    marginLeft: 2,
    textAlign: "right",
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
  },
  giftFTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  chatLayout: {
    width: 327,
    flexDirection: "row",
  },
  fishBoxClr: {
    display: "flex",
    color: Color.black,
    alignItems: "center",
    position: "absolute",
  },
  home1Typo: {
    color: Color.colorLightsteelblue,
    left: 0,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  dms1Typo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  iconLayout: {
    width: 22,
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
    height: 65,
    left: "50%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  avatarIcon: {
    width: 56,
    height: 56,
  },
  shellyKidds: {
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    color: Color.neutralActive,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  am: {
    fontFamily: FontFamily.montserratRegular,
    marginLeft: 2,
    textAlign: "right",
  },
  name: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  giftF: {
    fontStyle: "italic",
  },
  giftFairyLightsContainer: {
    lineHeight: 20,
    color: Color.neutralDisabled,
    fontSize: FontSize.size_xs,
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorKhaki,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
  },
  tags: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorKhaki,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    marginLeft: 2,
    alignItems: "center",
    flexDirection: "row",
  },
  chat: {
    marginTop: 2,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  dataContainer: {
    marginLeft: 12,
    alignSelf: "stretch",
    flex: 1,
  },
  profileIcon: {
    width: 58,
    height: 58,
  },
  am1: {
    fontFamily: FontFamily.montserratMedium,
    marginLeft: 2,
    textAlign: "right",
    fontWeight: "500",
    color: Color.neutralWeak,
  },
  chatChild: {
    width: 14,
    height: 11,
    marginLeft: 2,
  },
  chatStack1: {
    marginTop: 16,
  },
  yesterday: {
    fontFamily: FontFamily.mulishMedium,
    marginLeft: 2,
    textAlign: "right",
    fontWeight: "500",
    color: Color.neutralWeak,
  },
  contactList: {
    top: 182,
    left: 27,
    borderRadius: Border.br_3xs,
    height: 631,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 16,
  },
  messages: {
    top: 71,
    left: 112,
    fontSize: FontSize.size_6xl,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    justifyContent: "center",
    width: 206,
    height: 30,
    textAlign: "center",
  },
  fishBox: {
    top: 33,
    left: 195,
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    fontFamily: FontFamily.londrinaSolidRegular,
    width: 201,
    height: 47,
    textAlign: "right",
  },
  home1: {
    top: 25,
  },
  unionIcon: {
    width: 18,
    height: 19,
  },
  home: {
    width: 34,
    height: 40,
  },
  dms1: {
    top: 28,
    left: 2,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  dmIcon: {
    left: 4,
    height: 22,
    top: 0,
    width: 22,
  },
  dms: {
    width: 29,
    height: 43,
    marginLeft: 75,
  },
  saved1: {
    top: 21,
  },
  icon: {
    top: -2,
    left: 8,
    height: 20,
  },
  saved: {
    width: 36,
    height: 36,
    marginLeft: 75,
  },
  profile1: {
    top: 20,
  },
  icon1: {
    height: 17,
    width: 16,
  },
  profile: {
    width: 37,
    height: 35,
    marginLeft: 75,
  },
  homeParent: {
    marginLeft: -216,
    bottom: 0,
    borderTopWidth: 1,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_16xl,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_xl,
    borderColor: Color.black,
    borderStyle: "solid",
    backgroundColor: Color.white,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  icon2: {
    width: 10,
    height: 10,
  },
  search: {
    letterSpacing: -0.1,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    marginLeft: 4,
  },
  iconParent: {
    top: 125,
    left: 56,
    borderRadius: Border.br_8xs,
    height: 31,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    backgroundColor: Color.white,
    position: "absolute",
    alignItems: "center",
  },
  allMessages: {
    backgroundColor: Color.colorLightblue,
    width: "100%",
    height: 932,
    overflow: "hidden",
    flex: 1,
  },
});

export default AllMessages;
