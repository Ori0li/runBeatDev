import Profile from "@/src/components/chat/Profile";
import RunBeatLogo from "@/src/components/common/RunBeatLogo";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const TrainerChatListScreen = () => {
  return (
    <>
      <View style={{ padding: 20 }}>
        <RunBeatLogo />
      </View>
      <ScrollView>
        <View style={styles.chatList}>
          <Profile width={64} height={64} />
          <View>
            <Text style={styles.userTitle}>유저 이름</Text>
            <Text style={styles.contentText}>content내용</Text>
          </View>
        </View>
        <View style={styles.chatList}>
          <Profile width={64} height={64} />
          <View>
            <Text style={styles.userTitle}>유저 이름</Text>
            <Text style={styles.contentText}>content내용</Text>
          </View>
        </View>
        <View style={styles.chatList}>
          <Profile width={64} height={64} />
          <View>
            <Text style={styles.userTitle}>유저 이름</Text>
            <Text style={styles.contentText}>content내용</Text>
          </View>
        </View>
        <View style={styles.chatList}>
          <Profile width={64} height={64} />
          <View>
            <Text style={styles.userTitle}>유저 이름</Text>
            <Text style={styles.contentText}>content내용</Text>
          </View>
        </View>
        <View style={styles.chatList}>
          <Profile width={64} height={64} />
          <View>
            <Text style={styles.userTitle}>유저 이름</Text>
            <Text style={styles.contentText}>content내용</Text>
          </View>
        </View>
        <View style={styles.chatList}>
          <Profile width={64} height={64} />
          <View>
            <Text style={styles.userTitle}>유저 이름</Text>
            <Text style={styles.contentText}>content내용</Text>
          </View>
        </View>
        <View style={styles.chatList}>
          <Profile width={64} height={64} />
          <View>
            <Text style={styles.userTitle}>유저 이름</Text>
            <Text style={styles.contentText}>content내용</Text>
          </View>
        </View>
        <View style={styles.chatList}>
          <Profile width={64} height={64} />
          <View>
            <Text style={styles.userTitle}>유저 이름</Text>
            <Text style={styles.contentText}>content내용</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  chatList: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EFEFEF",
    marginBottom: -1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 40,
    padding: 20,
  },
  userTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333333",
    marginBottom: 5,
  },
  contentText: {
    color: "#A3A3A3",
  },
});
export default TrainerChatListScreen;
