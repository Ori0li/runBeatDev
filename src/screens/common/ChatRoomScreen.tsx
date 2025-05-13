import UseContainer from "@/src/components/common/UseContainer";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatRoomScreen = () => {
  return (
    <UseContainer>
      <SafeAreaView>
        <Text>채팅방 페이지</Text>
      </SafeAreaView>
    </UseContainer>
  );
};
export default ChatRoomScreen;
