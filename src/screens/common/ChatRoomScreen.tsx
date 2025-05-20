import InsertButton from "@/src/components/chat/InsertButton";
import InsertInput from "@/src/components/chat/InsertInput";
import Message from "@/src/components/chat/Message";
import Profile from "@/src/components/chat/Profile";
import RunBeatLogo from "@/src/components/common/RunBeatLogo";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const ChatRoomScreen = () => {
  const testMessage =
    "[닉네임]님이 신청하신 5/13(화) 18:00시 PT일정이 김형준 트레이너님에게등록되었습니다! PT 일정을 수정하고 싶을때는 하루 전까지 수정 할 수 있습니다!";
  return (
    <>
      <View style={{ padding: 20, paddingBottom: 0 }}>
        <RunBeatLogo />
      </View>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollPage}
          contentContainerStyle={{ paddingBottom: 150 }}
        >
          <View style={styles.userMessage}>
            <Profile width={50} height={50} />
            <Message content={testMessage} />
          </View>
        </ScrollView>
        <View style={styles.insertWrapper}>
          <InsertInput></InsertInput>
          <InsertButton></InsertButton>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollPage: {
    width: "100%",
    height: "60%",
    backgroundColor: "#C3D8FF",
    paddingHorizontal: 20,
    paddingVertical: 30,
    overflow: "hidden",
  },
  container: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  userMessage: {
    display: "flex",
    flexDirection: "row",
    gap: 18,
    marginBottom: 20,
  },
  insertWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 75,
    paddingBottom: 26,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    backgroundColor: "#C3D8FF",
  },
});
export default ChatRoomScreen;
