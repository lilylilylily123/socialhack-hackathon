import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Menu from "../components/Menu";
import { router } from "expo-router";
import {
  bg_black,
  bg_dark,
  bg_light,
  drk_yellow,
  purple,
  salmon,
  yellow,
} from "../variables/vars";
// import { useState, useEffect } from "react";
import { Pressable } from "react-native";

export default function App() {
  // const [lang, setLang] = useState(languages[0]);

  return (
    <View style={styles.container}>
      <View style={welcome.welcome}>
        <Text style={text.welcome}>Welcome back!</Text>
      </View>
      <Pressable
        onPress={() => {
          router.push("/mood");
        }}
      >
        <View style={styles.top_level}>
          <Text style={text.checkup}>Today's Mood</Text>
          <Text style={text.streak}>You're on a streak of 16!</Text>
        </View>
      </Pressable>
      <View style={styles.middle}>
        <Text style={text.meditate}>Meditation</Text>
        <View style={meditate.btns}>
          <Pressable
            style={meditate.btn}
            onPress={() => {
              router.push("/meditate/15");
            }}
          >
            <Text style={text.btn}>15 Min</Text>
          </Pressable>
          <Pressable
            style={meditate.btn}
            onPress={() => {
              router.push("/meditate/30");
            }}
          >
            <Text style={text.btn}>30 Min</Text>
          </Pressable>
          <Pressable
            style={meditate.btn}
            onPress={() => {
              router.push("/meditate/60");
            }}
          >
            <Text style={text.btn}>60 Min</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.double_box}>
        <Pressable
          onPress={() => {
            router.push("/routines");
          }}
        >
          <View style={boxes.left_box}>
            <Text style={text.left_box}>Routines</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            router.push("/diets");
          }}
        >
          <View style={boxes.right_box}>
            <Text style={text.right_box}>Healthy Diets</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.bottom_level}>
        <Menu settings={true} hotlines={true} progress={true} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  change_language: {
    backgroundColor: "lightblue",
    padding: 15,
    borderRadius: 7,
  },
  double_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    marginTop: 30,
  },
  top_level: {
    // fontSize: 30,
    width: 300,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    padding: 30,
    backgroundColor: salmon,
    borderRadius: 9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
  },
  middle: {
    padding: 30,
    backgroundColor: yellow,
    marginTop: 30,
    width: 300,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
  },
  bottom_level: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: bg_light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  hello: {
    fontSize: 50,
  },
});

export const text = StyleSheet.create({
  welcome: {
    fontSize: 30,
    color: bg_black,
    fontWeight: "bold",
    // padding: 10,
  },
  checkup: {
    fontSize: 30,
    color: bg_light,
    fontWeight: "bold",
  },
  streak: {
    fontSize: 20,
    color: bg_light,
  },
  meditate: {
    fontSize: 30,
    color: bg_light,
    fontWeight: "bold",
    padding: 10,
  },
  btn: {
    // fontSize: 15,
    color: bg_light,
    fontWeight: "bold",
  },
  left_box: {
    fontSize: 30,
    color: bg_light,
    fontWeight: "bold",
  },
  right_box: {
    fontSize: 30,
    color: bg_light,
    fontWeight: "bold",
  },
});

const boxes = StyleSheet.create({
  left_box: {
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 140,
    backgroundColor: purple,
    // padding: 30,
    borderRadius: 9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
  },
  right_box: {
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 140,
    backgroundColor: purple,
    // padding: 30,
    borderRadius: 9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
  },
});

export const welcome = StyleSheet.create({
  welcome: {
    borderRadius: 9,
    maxHeight: "auto",
    padding: 10,
    display: "flex",
    height: 60,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 130,
    textAlign: "center",
    backgroundColor: bg_dark,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
  },
});

const meditate = StyleSheet.create({
  btns: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // height: 100,
    marginTop: 20,
    width: 290,
    marginBottom: -23,
  },
  btn: {
    backgroundColor: drk_yellow,
    borderRadius: 9,
    padding: 10,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 3,
    marginRight: 3,
  },
});
