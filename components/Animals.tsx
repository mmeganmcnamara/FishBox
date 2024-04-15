import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Animals = () => {
  return (
    <View style={styles.animals}>
      <Image
        style={[styles.hedgehogIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/hedgehog.png")}
      />
      <Image
        style={[styles.hamsterIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/hamster.png")}
      />
      <Text style={[styles.hedgehog, styles.pigLayout]}>Hedgehog</Text>
      <Text style={[styles.frog, styles.cowTypo]}>Frog</Text>
      <View style={[styles.pigParent, styles.parentLayout]}>
        <Image
          style={[styles.pigIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/pig.png")}
        />
        <Text style={[styles.pig, styles.pigLayout]}>Pig</Text>
      </View>
      <Text style={[styles.cow, styles.cowPosition]}>Cow</Text>
      <Text style={[styles.hamster, styles.hamsterPosition]}>Hamster</Text>
      <View style={[styles.catParent, styles.parentPosition]}>
        <Image
          style={[styles.pigIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/cat1.png")}
        />
        <Text style={[styles.pig, styles.pigLayout]}>Cat</Text>
      </View>
      <View style={[styles.koalaParent, styles.parentPosition]}>
        <Text style={[styles.pig, styles.pigLayout]}>Koala</Text>
        <Image
          style={[styles.pigIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/koala.png")}
        />
      </View>
      <Image
        style={[styles.cowIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/cow.png")}
      />
      <View style={[styles.pandaParent, styles.cowPosition]}>
        <Text style={[styles.pig, styles.pigLayout]}>Panda</Text>
        <Image
          style={[styles.pigIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/panda.png")}
        />
      </View>
      <Image
        style={[styles.frogIcon, styles.parentPosition]}
        contentFit="cover"
        source={require("../assets/frog.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "8%",
    height: "10.66%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 35,
    width: 35,
  },
  pigLayout: {
    width: 70,
    position: "absolute",
  },
  cowTypo: {
    top: 239,
    textAlign: "center",
    color: Color.gray4,
    fontFamily: FontFamily.inputFieldLabel,
    fontSize: FontSize.size_4xs_8,
  },
  parentLayout: {
    left: 303,
    height: 63,
    width: 70,
  },
  cowPosition: {
    left: 224,
    width: 70,
    position: "absolute",
  },
  hamsterPosition: {
    left: 145,
    width: 70,
  },
  parentPosition: {
    top: 187,
    position: "absolute",
  },
  hedgehogIcon: {
    top: "24.15%",
    right: "73%",
    bottom: "65.19%",
    left: "19%",
  },
  hamsterIcon: {
    left: 162,
    top: 80,
    position: "absolute",
    overflow: "hidden",
  },
  hedgehog: {
    textAlign: "center",
    color: Color.gray4,
    fontFamily: FontFamily.inputFieldLabel,
    fontSize: FontSize.size_4xs_8,
    left: 66,
    width: 70,
    top: 132,
  },
  frog: {
    width: 70,
    position: "absolute",
    left: 66,
  },
  pigIcon: {
    top: 0,
    left: 18,
    position: "absolute",
  },
  pig: {
    top: 53,
    left: 0,
    textAlign: "center",
    color: Color.gray4,
    fontFamily: FontFamily.inputFieldLabel,
    fontSize: FontSize.size_4xs_8,
  },
  pigParent: {
    height: 63,
    top: 80,
    position: "absolute",
  },
  cow: {
    top: 239,
    textAlign: "center",
    color: Color.gray4,
    fontFamily: FontFamily.inputFieldLabel,
    fontSize: FontSize.size_4xs_8,
  },
  hamster: {
    textAlign: "center",
    color: Color.gray4,
    fontFamily: FontFamily.inputFieldLabel,
    fontSize: FontSize.size_4xs_8,
    top: 132,
    position: "absolute",
  },
  catParent: {
    height: 63,
    left: 303,
    width: 70,
  },
  koalaParent: {
    left: 145,
    width: 70,
    height: 63,
  },
  cowIcon: {
    top: "56.65%",
    right: "37%",
    bottom: "32.69%",
    left: "55%",
  },
  pandaParent: {
    height: 63,
    top: 80,
  },
  frogIcon: {
    left: 83,
    height: 35,
    width: 35,
    overflow: "hidden",
  },
  animals: {
    backgroundColor: Color.white,
    width: 439,
    height: 329,
    overflow: "hidden",
  },
});

export default Animals;
