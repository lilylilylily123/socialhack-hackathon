import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import { bg_dark, bg_black, bg_light } from "../variables/vars";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import Slider from "@react-native-community/slider";
// import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSmile, faMeh, faFrown } from "@fortawesome/free-solid-svg-icons";
// import { getUniqueId } from "react-native-device-info";
// import PocketBase from "pocketbase";
// const pb = new PocketBase("https://oasis-socialhack-pds.pockethost.io");
// const deviceID = getUniqueId();
export default function Page() {
  const [press, setPress] = useState("");
  const [value, setValue] = useState(0);
  const [streak, setStreak] = useState(0);
  useEffect(() => {
    loadStreak();
  }, []);
  const [lang, setLang] = useState("");
  const getLang = async () => {
    const lang = await AsyncStorage.getItem("lang");
    // console.log(lang);
    return lang.toString();
  };
  useEffect(() => {
    getLang().then((lang) => {
      setLang(lang);
    });
  }, []);
  const loadStreak = async () => {
    try {
      const storedStreak = await AsyncStorage.getItem("streak");
      if (storedStreak !== null) {
        setStreak(parseInt(storedStreak, 10));
      }
    } catch (error) {
      console.error("Error loading streak:", error);
    }
  };
  const updateStreak = async () => {
    try {
      const currentDate = new Date();
      const date2 = currentDate.toDateString();
      const storedMoodData = await AsyncStorage.getItem("mood");

      if (storedMoodData) {
        const parsedData = JSON.parse(storedMoodData);
        if (parsedData.date === date2) {
          await AsyncStorage.setItem("streak", (streak + 1).toString());
          setStreak(streak + 1);
        } else {
          await AsyncStorage.setItem("streak", "1");
          setStreak(1);
        }
      } else {
        await AsyncStorage.setItem("streak", "1");
        setStreak(1);
      }
      await AsyncStorage.setItem(
        "mood",
        JSON.stringify({ date: date2, mood: press, value: value }),
      );
    } catch (error) {
      console.error("Error updating streak:", error);
    }
  };
  const submitFunction = async () => {
    const date = new Date();
    const date2 = date.toDateString();
    await AsyncStorage.setItem(
      "mood",
      JSON.stringify({ date: date2, mood: press, value: value }),
    );

    updateStreak();
    router.push("/");
  };
  return (
    <View style={styles.container}>
      <View style={welcome.welcome}>
        <Text style={text2.welcome}>
          {/* {lang} */}
          {lang === "es"
            ? "Como te sientes hoy?"
            : "How are you feeling today?"}
        </Text>
      </View>
      <View style={styles.icons}>
        <Pressable
          onPress={() => {
            setPress("frown");
          }}
        >
          <FontAwesomeIcon
            style={press === "frown" ? styles.hvr : styles.icon}
            icon={faFrown}
            size={60}
            color="#e64747"
          />
        </Pressable>

        <Pressable
          onPress={() => {
            setPress("mid");
          }}
        >
          <FontAwesomeIcon
            style={press === "mid" ? styles.hvr : styles.icon}
            icon={faMeh}
            size={60}
            color="#e6e22e"
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setPress("happy");
          }}
        >
          <FontAwesomeIcon
            icon={faSmile}
            style={press === "happy" ? styles.hvr : styles.icon}
            size={60}
            color="#8fb935"
          />
        </Pressable>
      </View>

      <View style={welcome.welcome2}>
        <Text style={text2.welcome}>
          {lang === "es"
            ? "Como te sientes hoy?"
            : "How are you feeling today?"}
        </Text>
      </View>
      <Slider
        step={0}
        onValueChange={(value2) => {
          setValue(value2);
        }}
        style={{ width: 280, height: 40, marginTop: 30 }}
        minimumValue={0}
        maximumValue={10}
        minimumTrackTintColor="white"
        maximumTrackTintColor="black"
        thumbTintColor={
          value > 3 && value < 7
            ? "#e6e22e"
            : "#e64747" && value > 7
              ? "#8fb935"
              : "#e64747"
        }
      />
      <Pressable
        onPress={async () => {
          value === 0 || press === "" ? router.push("/mood") : submitFunction();
        }}
        style={value === 0 || press === "" ? styles.submit2 : styles.submit}
      >
        <Text style={text2.welcome}>
          {lang === "es" ? "Guardar" : "Submit"}
        </Text>
      </Pressable>
      <View style={styles.bottom_level}>
        <Menu settings={false} hotlines={true} progress={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  submit: {
    marginTop: 200,
    backgroundColor: bg_dark,
    padding: 10,
    // width: 200,
    borderRadius: 9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
  },
  submit2: {
    marginTop: 200,
    backgroundColor: bg_dark,
    padding: 10,
    opacity: 0.5,
    // width: 200,
    borderRadius: 9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 300,
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
  },
  icon: {},
  hvr: {
    transform: [{ scale: 1.3 }],
  },
  container: {
    flex: 1,
    backgroundColor: bg_light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottom_level: {
    position: "absolute",
    bottom: 0,
    width: "100%",
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
  welcome2: {
    borderRadius: 9,
    maxHeight: "auto",
    padding: 10,
    display: "flex",
    height: 60,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
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

const text2 = StyleSheet.create({
  welcome: {
    fontSize: 22,
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
