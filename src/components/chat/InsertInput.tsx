import { StyleSheet, TextInput } from "react-native";

const InsertInput = () => {
  return <TextInput style={styles.input} />;
};
const styles = StyleSheet.create({
  input: {
    // width: 300,
    width: "auto",
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    flex: 1,
  },
});
export default InsertInput;
