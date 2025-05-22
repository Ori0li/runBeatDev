import { StyleSheet, Text, TextInput, View } from "react-native";

interface HeightInputProps {
  value: number;
  onChangeText: (value: number) => void;
}

// 신장 입력 컴포넌트
export const HeightInput = ({ value, onChangeText }: HeightInputProps) => {
  return (
    <View style={styles.inputBox}>
      <Text style={styles.label}>신장</Text>
      <View style={styles.inputWithUnit}>
        <TextInput
          style={styles.whinput}
          placeholder="숫자만 입력"
          placeholderTextColor="#AAA"
          keyboardType="numeric"
          value={value.toString()}
          onChangeText={(text) => onChangeText(Number(text))}
        />
        <Text style={styles.unitLabel}>cm</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputBox: { flex: 1 },
  label: { fontSize: 15, fontWeight: "600", color: "#333", marginBottom: 8 },
  inputWithUnit: { flexDirection: "row", alignItems: "flex-end" },
  whinput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 15,
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DDDDDD",
  },
  unitLabel: { fontSize: 14, color: "#666", marginLeft: 6, paddingBottom: 10 },
});
