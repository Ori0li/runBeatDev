import { getUserProfile } from "@/libs/api/auth";
import UseContainer from "@/src/components/common/UseContainer";
import EditProfile from "@/src/components/user/EditProfile";
import { useAuthStore } from "@/src/stores/useAuthStore";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

const ProfileScreen = () => {
  const router = useRouter();
  const accessToken = useAuthStore((state) => state.accessToken);
  const [profile, setProfile] = useState({
    name: "",
    trainer: "",
    height: 0,
    birth: "",
    weight: 0,
    gender: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getUserProfile();
        setProfile({
          name: userData.name,
          trainer: userData.trainer,
          height: userData.height,
          birth: userData.birth,
          weight: userData.weight,
          gender: userData.gender,
        });
      } catch (error) {
        // Alert.alert("오류", "프로필 정보를 가져오는데 실패했습니다.", [
        //   {
        //     text: "확인",
        //     // onPress: () => router.back()
        //   },
        // ]);
      }
    };

    fetchProfile();
  }, [accessToken]);

  return (
    <UseContainer>
      <View style={styles.editContainer}>
        <EditProfile
          name={profile.name}
          trainer={profile.trainer}
          height={profile.height}
          birth={profile.birth}
          weight={profile.weight}
          gender={profile.gender}
        />
      </View>
    </UseContainer>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  editContainer: {
    // paddingHorizontal: 20,
    paddingTop: 20,
  },
});
