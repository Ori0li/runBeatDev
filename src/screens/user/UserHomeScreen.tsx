import EventListBox from "@/src/components/common/EventListBox";
import UseContainer from "@/src/components/common/UseContainer";
import UserProfile from "@/src/components/user/UserProfile";
import dayjs from "dayjs";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const UserHomeScreen = () => {
  const today = dayjs().format("YYYY-MM-DD");
  const upcoming = dayjs().add(1, "day").format("YYYY-MM-DD");
  return (
    <>
      <UseContainer>
        <UserProfile name="김형준" height={180} weight={75} ptCount={100} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => {}} style={{ flex: 1 }}>
            <View style={styles.buttonWrapper}>
              <Text style={styles.buttonText}>PT 예약</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{ flex: 1 }}>
            <View style={styles.buttonWrapper}>
              <Text style={styles.buttonText}>Today 기록</Text>
            </View>
          </TouchableOpacity>
        </View>
      </UseContainer>
      <View style={styles.eventListWrapper}>
        <EventListBox date={today} type="today" name="김형준" />
        <EventListBox date={upcoming} type="upcoming" name="김형준" />
      </View>
    </>
  );
};
export default UserHomeScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  buttonWrapper: {
    backgroundColor: "#000541",
    borderRadius: 5,
    padding: 15,
    flex: 1,
    width: "100%",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  eventListWrapper: {
    width: "100%",
    height: "100%",
    // marginTop: 10,
    backgroundColor: "#D9E6FD",
    padding: 20,
    borderRadius: 10,
  },
});
