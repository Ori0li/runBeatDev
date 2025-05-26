import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

type TrainerProfileProps = {
  name: string;
  photoUrl: string;
  scheduleCount: number;
};

const TrainerProfile = ({
  name,
  photoUrl,
  scheduleCount,
}: TrainerProfileProps) => {
  return (
    <SafeAreaView style={styles.profileSection}>
      <View style={styles.profileWrapper}>
        <View style={styles.profileImageWrapper}>
          <Image style={styles.profileImage} src={photoUrl}></Image>
        </View>
        <View style={styles.profileInfoWrapper}>
          <View>
            <Text style={styles.profileText}>트레이너</Text>
            <Text style={styles.profileName}>{name}님 반가워요!</Text>
          </View>
          <View>
            <Text style={styles.profileText}>오늘의 일정: {scheduleCount}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TrainerProfile;

const styles = StyleSheet.create({
  profileSection: {
    backgroundColor: "#3C23D7",
    padding: 20,
    borderRadius: 5,
    elevation: 3,
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
  profileImageWrapper: {
    width: 64,
    height: 64,
    borderRadius: 9999,
    marginRight: 20,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 9999,
    objectFit: "cover",
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
