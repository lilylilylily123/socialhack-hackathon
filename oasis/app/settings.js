import { StatusBar, View } from "react-native";
import { StyleSheet, Text } from "react-native";
import { bg_dark } from "../variables/vars";
import DropDownPicker from "react-native-dropdown-picker";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Settings() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "English", value: "en" },
    { label: "Español", value: "es" },
  ]);
  useEffect(() => {
    AsyncStorage.getItem("lang").then((lang) => {
      setValue(lang);
    });
  }, []);

  const getLang = async () => {
    const lang = await AsyncStorage.getItem("lang");
    // console.log(lang);
    return lang.toString();
  };
  useEffect(() => {
    getLang().then((lang) => {
      console.log(lang);
    });
  });
  return (
    <View style={styles.container}>
      <DropDownPicker
        style={{}}
        placeholder="English"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        onChangeValue={(item) => {
          // console.log(item);
          AsyncStorage.setItem("lang", item);
        }}
        setItems={setItems}
      />
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
