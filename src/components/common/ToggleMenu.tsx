import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ToggleMenu = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenu = () => setMenuVisible((prev) => !prev);

  const handleEdit = (event: GestureResponderEvent) => {
    console.log("수정 클릭됨");
    setMenuVisible(false);
  };

  const handleDelete = (event: GestureResponderEvent) => {
    console.log("삭제 클릭됨");
    setMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu}>
        <MaterialIcons name="more-horiz" size={32} />
      </TouchableOpacity>

      {menuVisible && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={handleEdit} style={styles.menuItem}>
            <Text style={styles.menuText}>수정</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete} style={styles.menuItem}>
            <Text style={styles.menuText}>삭제</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ToggleMenu;

const styles = StyleSheet.create({
  container: {
    position: "relative", // 위치를 상대적으로 설정해서 자식 요소인 메뉴의 위치를 제어할 수 있게 합니다.
  },
  menu: {
    position: "absolute", // 메뉴를 절대 위치로 설정해서 버튼 아래에 표시되도록 합니다.
    top: 25, // 버튼 아래로 메뉴가 위치하도록 설정
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 8,
    elevation: 5, // 안드로이드 그림자
    shadowColor: "#000", // iOS 그림자
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex: 10, // 메뉴가 다른 요소들 위에 표시되도록 설정
  },
  menuItem: {
    width: 30,
  },

  menuText: {
    fontSize: 14,
    fontWeight: "500",
    padding: 2,
  },
});
