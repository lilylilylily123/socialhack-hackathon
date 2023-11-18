import { StyleSheet, Text, View } from "react-native";
import { bg_dark } from "../variables/vars";

export default function Menu() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text>Left </Text>
      </View>
      <View style={styles.middle}>
        <Text>Middle </Text>
      </View>
      <View style={styles.right}>
        <Text>Right </Text>
      </View>
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
