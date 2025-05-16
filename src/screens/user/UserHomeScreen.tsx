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
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Today 식단 기록하기</Text>
          </View>
        </TouchableOpacity>
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
  buttonWrapper: {
    padding: 15,
    backgroundColor: "#000541",
    borderRadius: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  eventListWrapper: {
    width: "100%",
    height: "100%",
    marginTop: 20,
    backgroundColor: "#D9E6FD",
    padding: 20,
    borderRadius: 10,
  },
});
