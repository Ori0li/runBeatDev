import { StyleSheet, Text, TextInput, View } from "react-native";

interface AgeInputProps {
  value: number;
  onChangeText: (text: string) => void;
}

// 나이 입력 컴포넌트
const AgeInput = ({ value, onChangeText }: AgeInputProps) => {
  return (
    <View style={styles.inputBlock}>
      <Text style={styles.label}>나이</Text>
      <TextInput
        style={styles.input}
        placeholder="숫자만 입력"
        placeholderTextColor="#AAA"
        keyboardType="numeric"
        value={value.toString()}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBlock: { marginBottom: 20 },
  label: { fontSize: 15, fontWeight: "600", color: "#333", marginBottom: 8 },
  input: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 12,
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DDDDDD",
  },
});

export default AgeInput;
