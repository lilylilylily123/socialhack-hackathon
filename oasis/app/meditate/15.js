import { View, Text, StyleSheet } from "react-native";
import { bg_dark, purple, salmon } from "../../variables/vars";
import { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

const steps = [
  ["Sit comfortably with a straight spine", 30],
  ["Close your eyes and take a deep breath", 15],
  ["Hold your breath", 10],
  ["Exhale slowly and completely", 15],
  ["Hold your breath", 10],
];

export default function Page() {
  // const [key, setKey] = useState(0);
  // const [duration, setDuration] = useState(steps[0][1]);
  const [text, setText] = useState(steps[0][0]);
  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying
        // key={key}
        duration={30}
        colors={salmon}
        onComplete={() => {
          // setKey((prevKey) => prevKey + 1);
          if (text[0] === "S") {
            setText(steps[1][0]);
            return { shouldRepeat: true, newInitialRemainingTime: 5 };
          } else if (text[0] === "C") {
            setText(steps[2][0]);
            return {
              shouldRepeat: true,
              delay: 1,
              newInitialRemainingTime: 10,
            };
          }
        }}
      >
        {({ remainingTime }) => <Text style={styles.text}>{text}</Text>}
      </CountdownCircleTimer>
      <View style={styles.bottom_level}>
        <Menu settings={false} hotlines={true} progress={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 15,
    padding: 10,
    width: "80%",
    textAlign: "center",
  },
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
