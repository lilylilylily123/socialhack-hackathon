import { StyleSheet, Text, View } from "react-native";
import { bg_black, bg_dark, bg_light, purple, salmon } from "../variables/vars";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Menu({ settings, hotlines, progress }) {
  const [hotlineSelect, setHotlineSelect] = useState(false);
  return (
    <View style={styles.container2}>
      {hotlineSelect && (
        <>
          <Pressable
            onPress={() => {
              setHotlineSelect(!hotlineSelect);
            }}
            style={styles.overlay2}
          ></Pressable>
          <Pressable>
            <View style={styles.overlay}>
              <View style={styles.text_container}>
                <View style={styles.hotlineNum}>
                  <Text style={styles.hotlineText}>
                    Teléfono de la Esperanza
                  </Text>
                </View>
                <View style={styles.hotlineNum}>
                  <Text style={styles.hotlineText}>
                    Teléfono contra el Suicidio
                  </Text>
                </View>
                <View style={styles.hotlineNum}>
                  <Text style={styles.hotlineText}>
                    Ayuda a Niños y Adolescentes
                  </Text>
                </View>
              </View>
              <View style={styles.icon_containers}>
                <View style={styles.hotlineIcon}>
                  <Ionicons name="call" size={24} color="black" />
                </View>
                <View style={styles.hotlineIcon}>
                  <Ionicons name="call" size={24} color="black" />
                </View>
                <View style={styles.hotlineIcon}>
                  <Ionicons name="call" size={24} color="black" />
                </View>
              </View>
            </View>
          </Pressable>
        </>
      )}
      <View style={styles.container}>
        {(settings && (
          <Pressable
            onPress={() => {
              router.push("/settings");
            }}
          >
            <View style={styles.left}>
              <Ionicons name="settings-outline" size={24} color="black" />
              <Text>Settings</Text>
            </View>
          </Pressable>
        )) || (
          <Pressable
            onPress={() => {
              router.push("/");
            }}
          >
            <View style={styles.left}>
              <Ionicons name="home-outline" size={24} color="black" />
              <Text> ‎ ‎Home‎‎‎ ‎‎‎‎‎‎‎‎‎ </Text>
            </View>
          </Pressable>
        )}
        <Pressable
          onPress={() => {
            setHotlineSelect(!hotlineSelect);
          }}
        >
          <View style={styles.middle}>
            <Ionicons
              name={hotlineSelect ? "alert-circle" : "alert-circle-outline"}
              size={24}
              color="black"
            />
            <Text>Hotlines</Text>
          </View>
        </Pressable>

        {(progress && (
          <Pressable
            onPress={() => {
              router.push("/progress");
            }}
          >
            <View style={styles.right}>
              <Ionicons name="bar-chart-outline" size={24} color="black" />
              <Text>Progress</Text>
            </View>
          </Pressable>
        )) || (
          <Pressable
            onPress={() => {
              router.push("/");
            }}
          >
            <View style={styles.left}>
              <Ionicons name="home-outline" size={24} color="black" />
              <Text>‎ ‎ Home‎‎ ‎ </Text>
            </View>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text_container: {
    flexDirection: "column",
    height: "100%",
    marginLeft: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  hotlineText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon_containers: {
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
  },
  hotlineIcon: {
    alignSelf: "center",
    backgroundColor: salmon,
    borderRadius: 9,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
  },
  hotlineNum: {
    fontWeight: "bold",
    backgroundColor: bg_dark,
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    // height: 50,
    padding: 6,
    borderRadius: 9,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
  },

  container: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: bg_dark,
    alignItems: "center",
    justifyContent: "space-evenly",
    // alignSelf: "flex-end",
    // marginTop: 300,
    bottom: 0,
    height: 100,
    textAlign: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  overlay: {
    flexDirection: "row",
    position: "absolute",
    zIndex: 2,
    // left: "50%",
    bottom: 50,
    opacity: 1,
    alignSelf: "center",
    height: 180,
    width: 360,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: bg_light,
  },
  overlay2: {
    // position: "absolute",
    zIndex: 0,
    height: 900,
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: bg_black,
    justifyContent: "center",
    opacity: 0.5,
  },

  container2: {
    // zIndex: 2,
    // height: "100vh",
    // width: "100vw",
    // opacity: 0.5,
    // alignItems: "center",
    // justifyContent: "center",
  },
  left: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  settings: {
    alignItems: "center",
    justifyContent: "center",
  },
  middle: {
    // left: 5,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  alert: {
    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    alignItems: "center",
    justifyContent: "center",
  },
  hourglass: {
    alignItems: "center",
    justifyContent: "center",
  },
});

{
  /* <Text style={styles.hello}>{lang}</Text> */
}

{
  /* <Pressable
  style={styles.change_language}
  onPress={() => {
    setLang(lang === languages[0] ? languages[1] : languages[0]);
  }}
>
  <Text>Change Language</Text>
</Pressable> */
}
// "main": "node_modules/expo/AppEntry.js",
