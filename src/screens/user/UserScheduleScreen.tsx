import UseContainer from "@/src/components/common/UseContainer";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UserScheduleScreen = () => {
  return (
    <UseContainer>
      <SafeAreaView>
        <Text>유저가 날마다 기록하는 페이지</Text>
      </SafeAreaView>
    </UseContainer>
  );
};
export default UserScheduleScreen;
