import { StyleSheet, Text, View } from "react-native";
type MessageProps = {
  content: string;
};

const Message = ({ content }: MessageProps) => {
  return (
    <View style={styles.messageBox}>
      <Text>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageBox: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    maxWidth: "60%",
  },
  content: {
    fontSize: 12,
    color: "#333",
    lineHeight: 0,
    padding: 0,
    margin: 0,
  },
});
export default Message;
