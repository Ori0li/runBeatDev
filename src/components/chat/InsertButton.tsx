import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, TouchableOpacity } from "react-native";

const InsertButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <MaterialIcons name={"send"} color={"#ffffff"} size={22} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // paddingVertical: 10,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "#3C23D7",
    borderRadius: 5,
    alignSelf: "flex-start",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default InsertButton;
