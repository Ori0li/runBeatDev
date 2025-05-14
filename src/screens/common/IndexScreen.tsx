import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const IndexScreen = () => {
  const router = useRouter();

  const handleUserLogin = () => {
    router.push("/user/(tabs)");
  };

  const handleTrainerLogin = () => {
    router.push("/trainer/(tabs)");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.LogoWrapper}>
          <Image
            style={styles.img}
            source={require("@/assets/images/common/SymbolLogo.png")}
          />
          <TouchableOpacity
            style={styles.userLoginButton}
            onPress={handleUserLogin}
          >
            <Text style={styles.userLoginText}>회원 로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.trainerLoginButton}
            onPress={handleTrainerLogin}
          >
            <Text style={styles.trainerLoginText}>트레이너 로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  LogoWrapper: {
    width: "70%",
    marginTop: 20,
    marginBottom: 20,
    margin: "auto",
  },
  img: {
    width: "100%",
    objectFit: "contain",
  },
  userLoginButton: {
    width: "100%",
    borderRadius: 9999,
    backgroundColor: "#3C23D7",
    padding: 15,
    marginBottom: 20,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
  userLoginText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  trainerLoginButton: {
    width: "100%",
    borderRadius: 9999,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#3C23D7",
    padding: 15,
    marginBottom: 20,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
  trainerLoginText: {
    color: "#3C23D7",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
});
export default IndexScreen;
