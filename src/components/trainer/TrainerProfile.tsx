import { SafeAreaView, StyleSheet, Text, View } from "react-native";

type TrainerProfileProps = {
  name: string;
};

const TrainerProfile = ({ name }: TrainerProfileProps) => {
  return (
    <SafeAreaView style={styles.profileSection}>
      <View style={styles.profileWrapper}>
        <View style={styles.profileImage}></View>
        <View style={styles.profileInfoWrapper}>
          <View>
            <Text style={styles.profileText}>트레이너</Text>
            <Text style={styles.profileName}>{name}님 반가워요!</Text>
          </View>
          <View>
            <Text style={styles.profileText}>오늘의 일정: 5</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TrainerProfile;

const styles = StyleSheet.create({
  profileSection: {
    marginHorizontal: 20,
    backgroundColor: "#3C23D7",
    padding: 20,
    borderRadius: 5,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    marginTop: 20,
  },
  profileWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    // justifyContent: "space-around",
  },
  profileInfoWrapper: {},
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 9999,
    backgroundColor: "#FFFFFF",
    marginRight: 20,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  profileText: {
    fontSize: 14,
    color: "#FFFFFF",
    marginBottom: 4,
  },
});
