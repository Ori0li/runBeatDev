import UseContainer from "@/src/components/common/UseContainer";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UserHomeScreen = () => {
  return (
    <UseContainer>
      <SafeAreaView>
        <Text>유저 홈 페이지</Text>
      </SafeAreaView>
    </UseContainer>
  );
};
export default UserHomeScreen;
