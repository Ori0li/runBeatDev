import ButtonForm from "@/src/components/common/ButtonForm";
import InputForm from "@/src/components/common/InputForm";
import UseContainer from "@/src/components/common/UseContainer";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

const EditPwd = () => {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async () => {
    if (!currentPassword) {
      Alert.alert("알림", "현재 비밀번호를 입력해주세요.");
      return;
    }
    if (!newPassword) {
      Alert.alert("알림", "새 비밀번호를 입력해주세요.");
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("알림", "새 비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await fetch(
        "http://192.168.6.49:3050/auth/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            currentPassword,
            newPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "비밀번호 변경에 실패했습니다.");
      }

      Alert.alert("성공", "비밀번호가 변경되었습니다.", [
        {
          text: "확인",
          onPress: () => router.back(),
        },
      ]);
    } catch (error) {
      Alert.alert(
        "오류",
        error instanceof Error ? error.message : "비밀번호 변경에 실패했습니다."
      );
    }
  };

  return (
    <UseContainer>
      <View style={styles.section}>
        <InputForm
          title="현재 비밀번호"
          placeholder="현재 비밀번호를 입력해주세요"
          value={currentPassword}
          setValue={setCurrentPassword}
        />
        <InputForm
          title="새 비밀번호"
          placeholder="새 비밀번호를 입력해주세요"
          value={newPassword}
          setValue={setNewPassword}
        />
        <InputForm
          title="새 비밀번호 확인"
          placeholder="새 비밀번호를 다시 입력해주세요"
          value={confirmPassword}
          setValue={setConfirmPassword}
        />
        <ButtonForm name="비밀번호 변경" onPress={handleChangePassword} />
      </View>
    </UseContainer>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingTop: 50,
  },
});

export default EditPwd;
