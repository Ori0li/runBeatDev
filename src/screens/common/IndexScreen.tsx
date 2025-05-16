import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const IndexScreen = () => {
  const router = useRouter();

  const handleUserLogin = () => {
    router.push("/login/(tabs)/login?role=user");
  };

  const handleTrainerLogin = () => {
    router.push("/login/(tabs)/login?role=trainer");
  };

  const handleSignup = () => {
    router.push("/login/(tabs)/register");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.Wrapper}>
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
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.signupText}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    // position: "relative",
  },
  Wrapper: {
    width: "70%",
    margin: "auto",
    top: "50%",
    // marginTop: 150,
  },
  img: {
    width: "100%",
    objectFit: "contain",
    marginBottom: 50,
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
  signupText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#c5c5c5",
    textAlign: "center",
    width: "100%",
    // marginTop: 250,
    top: 300,
  },
});
export default IndexScreen;
