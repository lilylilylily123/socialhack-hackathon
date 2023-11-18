import { View, Text, StyleSheet } from "react-native";
import { bg_dark } from "../../variables/vars";
import { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

const steps = [
  ["Sit comfortably with a straight spine", 10],
  ["Close your eyes and take a deep breath", 5],
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
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
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
        {({ remainingTime }) => <Text>{text}</Text>}
      </CountdownCircleTimer>
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
