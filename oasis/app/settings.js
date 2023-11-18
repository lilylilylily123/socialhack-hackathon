import { StatusBar, View } from "react-native";
import { StyleSheet, Text } from "react-native";
import { bg_dark } from "../variables/vars";
import Menu from "../components/Menu";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>test</Text>
      <View style={styles.bottom_level}>
        <Menu settings={false} hotlines={true} progress={true} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bg_dark,
    alignItems: "center",
    justifyContent: "center",
  },
  bottom_level: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
