import ButtonForm from "@/src/components/common/ButtonForm";
import InputForm from "@/src/components/common/InputForm";
import { StyleSheet, View } from "react-native";

const SignUpScreen = () => {
  const handleSignUp = () => {
    console.log("회원가입 완료");
  };

  return (
    <View style={styles.section}>
      <InputForm title="*아이디" placeholder="2~8자리 닉네임을 입력해주세요" />
      <InputForm title="*비밀번호" placeholder="특수문자를 포함한 6자리 이상" />
      <InputForm
        title="*비밀번호 확인"
        placeholder="특수문자를 포함한 6자리 이상"
      />
      <ButtonForm name="회원가입 완료" onPress={handleSignUp} />
    </View>
  );
};
const styles = StyleSheet.create({
  section: {
    paddingTop: 50,
  },
});
export default SignUpScreen;
