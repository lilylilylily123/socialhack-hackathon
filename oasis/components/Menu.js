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
    positionn: "absolute",
    bottom: 0,
    height: 100,

    textAlign: "center",
  },
});
