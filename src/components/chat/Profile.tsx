import { Image, StyleSheet, View } from "react-native";
type ProfileProps = {
  width?: number;
  height?: number;
};
const Profile: React.FC<ProfileProps> = ({ width, height }) => {
  return (
    <View style={{ ...styles.profile, width: width, height: height }}>
      <Image
        style={styles.profileImage}
        source={require("@/assets/images/common/RunBeat.png")}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    borderRadius: 999,
    backgroundColor: "#ffffff",
    overflow: "hidden",
    borderColor: "#efefef",
    borderWidth: 1,
  },
  profileImage: {
    width: "100%",
    objectFit: "cover",
  },
});
export default Profile;
