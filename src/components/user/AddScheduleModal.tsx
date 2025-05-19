import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type AddScheduleModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

const AddScheduleModal = ({ isVisible, onClose }: AddScheduleModalProps) => {
  const [selectedTab, setSelectedTab] = useState<"식단" | "운동">("식단");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>일정 추가</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, selectedTab === "식단" && styles.selectedTab]}
              onPress={() => setSelectedTab("식단")}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === "식단" && styles.selectedTabText,
                ]}
              >
                식단
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, selectedTab === "운동" && styles.selectedTab]}
              onPress={() => setSelectedTab("운동")}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === "운동" && styles.selectedTabText,
                ]}
              >
                운동
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <TextInput
              style={styles.input}
              placeholder="내용을 입력해주세요"
              multiline
              value={content}
              onChangeText={setContent}
            />

            <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
              <Text style={styles.imageButtonText}>사진 추가</Text>
            </TouchableOpacity>

            {image && (
              <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
                <TouchableOpacity
                  style={styles.removeImageButton}
                  onPress={() => setImage(null)}
                >
                  <Text style={styles.removeImageText}>✕</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          <TouchableOpacity style={styles.modalAddButton} onPress={onClose}>
            <Text style={styles.buttonText}>저장하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddScheduleModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  closeButton: {
    fontSize: 20,
    color: "#666",
    padding: 5,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
  },
  selectedTab: {
    borderBottomColor: "#3C23D7",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  selectedTabText: {
    color: "#3C23D7",
    fontWeight: "600",
  },
  content: {
    minHeight: 200,
  },
  input: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    padding: 12,
    minHeight: 150,
    textAlignVertical: "top",
  },
  imageButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  imageButtonText: {
    color: "#666",
    fontSize: 14,
  },
  imageContainer: {
    marginTop: 10,
    position: "relative",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  removeImageButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  removeImageText: {
    color: "white",
    fontSize: 12,
  },
  modalAddButton: {
    backgroundColor: "#3C23D7",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
