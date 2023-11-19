import { StyleSheet, Text, View } from "react-native";
import { RobotoFlex_400Regular } from "@expo-google-fonts/roboto-flex";
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Menu from "../components/Menu";

import { useFonts } from "expo-font";
import {
  bg_black,
  bg_dark,
  bg_light,
  drk_yellow,
  purple,
  salmon,
  yellow,
} from "../variables/vars";
import { Pressable } from "react-native";
import { router } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.other_container}>
        <View style={styles.t1container}>
          <Text style={styles.t1}>In the past 10 days...</Text>
        </View>
        <View style={styles.t2container}>
          <Text style={styles.t2}>
            You have clicked <FontAwesomeIcon color="green" icon={faSmile} /> 7
            times!{"\n"}
            With an average score of{" "}
            <View style={styles.greenBox}>
              <Text style={styles.greenBoxText}>8.6</Text>
            </View>
          </Text>
        </View>
        <View style={styles.t3container}>
          <Pressable
            onPress={() => {
              AsyncStorage.removeItem("mood");
              AsyncStorage.removeItem("streak");
              alert("Mood history cleared!");
              router.push("/");
            }}
          >
            <Text style={styles.t3}>Clear mood history</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.bottom_level}>
        <Menu settings={true} hotlines={true} progress={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: bg_light,
  },
  other_container: {
    flex: 1,
    marginTop: 80,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  t1container: {
    marginTop: 120,
    flexDirection: "row",
    backgroundColor: bg_dark,
    alignItems: "center",
    justifyContent: "center",
    // bottom: 0,
    height: 60,
    width: 300,
    // top: 200,
    alignSelf: "center",
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    borderRadius: 9,
    backgroundColor: "#E7DEDA",
    padding: 5,
  },

  t2container: {
    flexDirection: "row",
    backgroundColor: bg_dark,
    alignItems: "center",
    justifyContent: "space-evenly",
    // bottom: 0,
    height: 100,
    width: 300,
    // top: 200,
    alignSelf: "center",
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    borderRadius: 9,
    backgroundColor: "transparent",
    padding: 20,
  },
  bottom_level: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },

  t3container: {
    flexDirection: "row",
    backgroundColor: bg_dark,
    alignItems: "center",
    justifyContent: "space-evenly",
    // bottom: 0,
    height: 40,
    width: 220,
    // top: 680,
    alignSelf: "center",
    marginTop: 250,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    borderRadius: 9,
    backgroundColor: "#F05365",
    padding: 5,
  },
  t1: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "bold",
  },

  t2: {
    alignItems: "center",
    textAlign: "center",
    fontSize: 20,
  },
  greenBox: {
    backgroundColor: "green",
    padding: 2,
    borderRadius: 5,
    width: 30,
    alignItems: "center",
    marginHorizontal: 5, // Adjust margin for spacing around the box
    alignSelf: "center", // Align the box horizontally
    justifyContent: "center", // Align the text vertically
  },
  greenBoxText: {
    color: "white",
    width: 30,
    fontWeight: "bold", // If you want the text inside the box to be bold
    textAlign: "center",
  },
  t3: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F2EDEB",
  },
});
