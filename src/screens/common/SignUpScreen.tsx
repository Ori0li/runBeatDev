import ButtonForm from "@/src/components/common/ButtonForm";
import InputForm from "@/src/components/common/InputForm";
import UseContainer from "@/src/components/common/UseContainer";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const SignUpScreen = () => {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleSignUp = () => {
    console.log("회원가입 완료");
  };

  return (
    <UseContainer>
      <View style={styles.section}>
        <InputForm
          title="*아이디"
          placeholder="2~8자리 닉네임을 입력해주세요"
          value={id}
          setValue={setID}
        />
        <InputForm
          title="*비밀번호"
          placeholder="특수문자를 포함한 6자리 이상"
          value={password}
          setValue={setPassword}
        />
        <InputForm
          title="*비밀번호 확인"
          placeholder="특수문자를 포함한 6자리 이상"
          value={passwordCheck}
          setValue={setPasswordCheck}
        />
        <ButtonForm name="회원가입 완료" onPress={handleSignUp} />
      </View>
    </UseContainer>
  );
};
const styles = StyleSheet.create({
  section: {
    paddingTop: 50,
  },
});
export default SignUpScreen;
