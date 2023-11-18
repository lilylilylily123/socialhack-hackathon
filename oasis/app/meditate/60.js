import { View, Text, StyleSheet } from "react-native";
import { bg_dark } from "../../variables/vars";
import Menu from "../../components/Menu";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text>60</Text>
      <View style={styles.bottom_level}>
        <Menu settings={false} hotlines={true} progress={true} />
      </View>
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
