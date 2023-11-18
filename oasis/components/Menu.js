import { StyleSheet, Text, View } from "react-native";
import { bg_black, bg_dark } from "../variables/vars";
import { SvgXml } from "react-native-svg";

export default function Menu() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <SettingSvg style={styles.settings} />
        <Text>settings</Text>
      </View>
      <View style={styles.middle}>
        <AlertSvg style={styles.alert}/>
        <Text>Hotlines</Text>
      </View>
      <View style={styles.right}>
      <HourglassSvg style={styles.hourglass}/>
        <Text>progress</Text>
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
    shadowColor: 'black',
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

const SettingSvg = () => <SvgXml xml={settings_svg} />

const settings_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`

const AlertSvg = () => <SvgXml xml={alert_svg} />

const alert_svg =  `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`

const HourglassSvg = () => <SvgXml xml={hourglass_svg} />

const hourglass_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512"><path d="M145.61 464h220.78c19.8 0 35.55-16.29 33.42-35.06C386.06 308 304 310 304 256s83.11-51 95.8-172.94c2-18.78-13.61-35.06-33.41-35.06H145.61c-19.8 0-35.37 16.28-33.41 35.06C124.89 205 208 201 208 256s-82.06 52-95.8 172.94c-2.14 18.77 13.61 35.06 33.41 35.06z" fill="none" stroke="#0F0F0F" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.23 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87 9.95 12.04 6.47 29.13-9.1 29.13z"/></svg>'
