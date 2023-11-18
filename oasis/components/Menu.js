import { StyleSheet, Text, View } from "react-native";
import { bg_black, bg_dark } from "../variables/vars";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";
import { router } from "expo-router";

export default function Menu({ settings, hotlines, progress }) {
  return (
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
      {(hotlines && (
        <Pressable onPress={() => {}}>
          <View style={styles.middle}>
            <Ionicons name="alert-circle-outline" size={24} color="black" />
            <Text>Hotlines</Text>
          </View>
        </Pressable>
      )) || (
        <Pressable
          onPress={() => {
            router.push("/");
          }}
        >
          <View style={styles.left}>
            <Ionicons name="home" size={24} color="black" />
            <Text>Home</Text>
          </View>
        </Pressable>
      )}
      {(progress && (
        <Pressable onPress={() => {}}>
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
            <Ionicons name="home" size={24} color="black" />
            <Text>Home</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
