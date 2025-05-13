import UseContainer from "@/src/components/common/UseContainer";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UserPTScreen = () => {
  return (
    <UseContainer>
      <SafeAreaView>
        <Text>유저 PT 신청하는 페이지</Text>
      </SafeAreaView>
    </UseContainer>
  );
};
export default UserPTScreen;
