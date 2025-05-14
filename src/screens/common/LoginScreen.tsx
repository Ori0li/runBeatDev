import ButtonForm from "@/src/components/common/ButtonForm";
import InputForm from "@/src/components/common/InputForm";
import { StyleSheet, View } from "react-native";

const LoginScreen = () => {
  const handleLogin = () => {
    console.log("로그인 완료");
  };

  return (
    <View style={styles.section}>
      <InputForm title="아이디" placeholder="아이디를 입력하세요" />
      <InputForm title="비밀번호" placeholder="비밀번호를 입력하세요" />
      <ButtonForm name="로그인" onPress={handleLogin} />
    </View>
  );
};
const styles = StyleSheet.create({
  section: {
    paddingTop: 50,
  },
});
export default LoginScreen;
