import { View, Text, StyleSheet, ScrollView } from "react-native";
import { bg_dark, bg_black, bg_light, salmon } from "../variables/vars";
import Menu from "../components/Menu";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Page() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        snapToAlignment={"end"}
        style={styles.scroll}
      >
        <View style={styles.BigContainer}>
          <View style={welcome.welcome}>
            <Text style={text2.welcome}>Morning Routine</Text>
          </View>
          <View style={styles.checkboxes}>
            <View style={styles.content}>
              <View style={styles.rows}>
                <BouncyCheckbox size={35} fillColor={salmon} />
                <Text style={text2.checklist}>
                  Start the day with a positive action, and being thankful for
                  what you have and what you will do today.
                </Text>
              </View>
              <View style={styles.rows}>
                <BouncyCheckbox size={35} fillColor={salmon} />
                <Text style={text2.checklist}>
                  Have a healthy and balanced breakfast, avoiding excess sugar
                  and caffeine.
                </Text>
              </View>
              <View style={styles.rows}>
                <BouncyCheckbox size={35} fillColor={salmon} />
                <Text style={text2.checklist}>
                  Engage in physical exercise that you enjoy, such as walking,
                  running, dancing, or practicing yoga.
                </Text>
              </View>
              <View style={styles.rows}>
                <BouncyCheckbox size={35} fillColor={salmon} />
                <Text style={text2.checklist}>
                  Stimulate your mind with an intellectual activity, such as
                  reading, writing, solving crosswords, or learning something
                  new.
                </Text>
              </View>
              <View style={styles.rows}>
                <BouncyCheckbox size={35} fillColor={salmon} />
                <Text style={text2.checklist}>
                  Organize your time and set priorities for the day, remembering
                  to include moments of rest and leisure.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.BigContainer}>
          <View style={welcome.welcome2}>
            <Text style={text2.welcome}>Afternoon Routine</Text>
          </View>
          <View style={styles.checkboxes}>
            <View style={styles.content}>
              <View style={styles.rows}>
                <BouncyCheckbox size={35} fillColor={salmon} />
                <Text style={text2.checklist}>
                  Fulfill your work and/or academic obligations.
                </Text>
              </View>
              <View style={styles.rows}>
                <BouncyCheckbox size={35} fillColor={salmon} />
                <Text style={text2.checklist}>
                  Set aside time to relax and unwind. Engage in activities you
                  are passionate about, such as playing an instrument, painting,
                  cooking, or watching a series.
                </Text>
              </View>
              <View style={styles.rows}>
                <BouncyCheckbox size={35} fillColor={salmon} />
                <Text style={text2.checklist}>
                  Take advantage of opportunities to socialize with loved ones,
                  whether in person or through phone or video calls. Express
                  your affection, support, and interest in their lives.
                </Text>
              </View>
              <View style={styles.rows}>
                <BouncyCheckbox size={35} fillColor={salmon} />
                <Text style={text2.checklist}>
                  Avoid unnecessary conflicts and discussions, and seek
                  constructive solutions to problems.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.BigContainer}>
          <View style={welcome.welcome3}>
            <Text style={text2.welcome}>Night Routine</Text>
          </View>
          <View style={styles.checkboxes}>
            <View style={styles.content}>
              <View style={styles.rows}>
                <BouncyCheckbox size={35} fillColor={salmon} />
                <Text style={text2.checklist}>
                  Before going to bed, take stock of your day and acknowledge
                  your achievements and areas for improvement.
                </Text>
              </View>
              <View style={styles.rows}>
                <BouncyCheckbox size={35} fillColor={salmon} />
                <Text style={text2.checklist}>
                  Think about what you can do the next day to progress towards
                  your goals and to feel better.
                </Text>
              </View>
              <View style={styles.rows}>
                <BouncyCheckbox size={35} fillColor={salmon} />
                <Text style={text2.checklist}>
                  Practice relaxation techniques such as deep breathing or
                  mindfulness.
                </Text>
              </View>
              <View style={styles.rows}>
                <BouncyCheckbox size={35} fillColor={salmon} />
                <Text style={text2.checklist}>
                  Avoid the use of electronic devices, exposure to artificial
                  light before sleep, and the consumption of alcohol or tobacco.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottom_level}>
        <Menu settings={false} hotlines={true} progress={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BigContainer: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  scroll: {
    flex: 1,
    width: "100%",
  },
  rows: {
    flexDirection: "row",
    width: 300,
    marginLeft: 50,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  checkboxes: {
    flex: 1,
    width: 300,
    marginRight: 80,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 20,
  },
  boxes: {
    flexDirection: "column",
    alignItems: "flex-start",
    height: 500,
    justifyContent: "space-between",
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

const welcome = StyleSheet.create({
  welcome: {
    marginLeft: 20,
    borderRadius: 9,
    maxHeight: "auto",
    padding: 10,
    display: "flex",
    height: 60,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90,
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
    marginLeft: 50,
    borderRadius: 9,
    maxHeight: "auto",
    padding: 10,
    display: "flex",
    height: 60,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90,
    textAlign: "center",
    backgroundColor: bg_dark,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
  },
  welcome3: {
    marginLeft: 0,
    borderRadius: 9,
    maxHeight: "auto",
    padding: 10,
    display: "flex",
    height: 60,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90,
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
  checklist: {
    fontSize: 20,
    color: bg_black,
    fontWeight: "bold",
    padding: 10,
  },
  welcome: {
    fontSize: 30,
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
