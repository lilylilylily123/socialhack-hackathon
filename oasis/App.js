import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Menu from "./components/Menu";
import { bg_light, salmon } from "./variables/vars";
// import { useState, useEffect } from "react";
// import { Pressable } from "react-native";

const languages = ["en", "es"];

export default function App() {
  // const [lang, setLang] = useState(languages[0]);

  return (
    <View style={styles.container}>
      <View style={styles.top_level}>
        <Text style={styles.checkup}>Daily Checkup</Text>
        <Text style={styles.streak}>Streak: 16</Text>
      </View>
      <View style={styles.middle}>
        {/* <Text style={styles.hello}>{lang}</Text> */}

        {/* <Pressable
          style={styles.change_language}
          onPress={() => {
            setLang(lang === languages[0] ? languages[1] : languages[0]);
          }}
        >
          <Text>Change Language</Text>
        </Pressable> */}
      </View>
      <View style={styles.bottom_level}>
        <Menu />
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
  top_level: {
    // fontSize: 30,
    marginTop: 120,
    padding: 30,
    backgroundColor: salmon,
    borderRadius: 7,
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
  checkup: {
    fontSize: 30,
    color: "white",
  },
  streak: {
    fontSize: 20,
    color: "white",
  },
  container: {
    flex: 1,
    // flexDirection: "column",
    backgroundColor: bg_light,
    alignItems: "center",
    justifyContent: "center",
  },
  hello: {
    fontSize: 50,
  },
});
