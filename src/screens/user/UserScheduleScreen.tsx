import DaySelector from "@/src/components/common/DaySelector";
import MonthSelector from "@/src/components/common/MonthSelector";
import ScheduleTab from "@/src/components/common/ScheduleTab";
import UseContainer from "@/src/components/common/UseContainer";
import AddScheduleModal from "@/src/components/user/AddScheduleModal";
import dayjs from "dayjs";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const sampleData = [
  {
    id: "1",
    tag: "식단",
    date: "2025-05-15",
    content: "형준이가 내 밥을 뺏어 먹었다...",
  },
  {
    id: "2",
    tag: "식단",
    date: "2025-05-15",
    content: "오늘  슬퍼서 파스타에 치킨에 피자에 짜장면까지 시켜먹었다",
  },
  {
    id: "3",
    tag: "식단",
    date: "2025-05-15",
    content:
      "오늘 닭가슴살 10개를 한번에 먹었더니 단백질 과다섭취로 배가 아프다",
  },
  {
    id: "4",
    tag: "식단",
    date: "2025-05-16",
    content:
      "프로틴 쉐이크에 바나나 넣고 갈았더니 완전 맛있어서 3잔이나 마셨다",
  },
  {
    id: "5",
    tag: "식단",
    date: "2025-05-17",
    content: "오늘 먹은 브로콜리 샐러드가 너무 맛있어서 3번이나 리필했다",
  },
  {
    id: "6",
    tag: "식단",
    date: "2025-05-17",
    content:
      "고구마 찐거랑 닭가슴살이랑 먹었더니 완전 꿀조합이다. 내일도 먹어야지",
  },
  {
    id: "7",
    tag: "운동",
    date: "2025-05-15",
    content:
      "오늘 데드리프트 할 때 너무 힘줘서 방구 나와서 앞에 있던 사람이 깜짝 놀랐다",
  },
  {
    id: "8",
    tag: "운동",
    date: "2025-05-15",
    content:
      "벤치프레스 하다가 바벨이 떨어질뻔해서 비명지르니까 옆 사람이 귀신인줄 알고 도망갔다",
  },
  {
    id: "9",
    tag: "운동",
    date: "2025-05-15",
    content:
      "스쿼트 하다가 바지가 찢어져서 엉덩이가 보였는데 아무도 말 안해줬다",
  },
  {
    id: "10",
    tag: "운동",
    date: "2025-05-16",
    content:
      "덤벨 들다가 놓쳐서 발가락 찍었더니 옆에서 운동하던 헬창이 '초보는 티나네~' 하고 비웃었다",
  },
  {
    id: "11",
    tag: "운동",
    date: "2025-05-17",
    content:
      "런닝머신에서 뛰다가 핸드폰 떨어뜨려서 뒤로 날아가는거 잡으려다 나도 같이 날아갔다",
  },
  {
    id: "12",
    tag: "운동",
    date: "2025-05-17",
    content:
      "플랭크 하다가 방구 뀌었는데 마스크 썼다고 내가 한 줄 아무도 모를거라 생각했다",
  },
  {
    id: "13",
    tag: "운동",
    date: "2025-05-17",
    content:
      "플랭크 하다가 방구 뀌었는데 마스크 썼다고 내가 한 줄 아무도 모를거라 생각했다",
  },
  {
    id: "14",
    tag: "운동",
    date: "2025-05-17",
    content:
      "플랭크 하다가 방구 뀌었는데 마스크 썼다고 내가 한 줄 아무도 모를거라 생각했다",
  },
  {
    id: "15",
    tag: "운동",
    date: "2025-05-17",
    content:
      "플랭크 하다가 방구 뀌었는데 마스크 썼다고 내가 한 줄 아무도 모를거라 생각했다",
  },
  {
    id: "16",
    tag: "운동",
    date: "2025-05-17",
    content:
      "플랭크 하다가 방구 뀌었는데 마스크 썼다고 내가 한 줄 아무도 모를거라 생각했다",
  },
  {
    id: "17",
    tag: "운동",
    date: "2025-05-17",
    content:
      "플랭크 하다가 방구 뀌었는데 마스크 썼다고 내가 한 줄 아무도 모를거라 생각했다",
  },
  {
    id: "18",
    tag: "운동",
    date: "2025-05-17",
    content:
      "플랭크 하다가 방구 뀌었는데 마스크 썼다고 내가 한 줄 아무도 모를거라 생각했다",
  },
  {
    id: "19",
    tag: "운동",
    date: "2025-05-17",
    content:
      "플랭크 하다가 방구 뀌었는데 마스크 썼다고 내가 한 줄 아무도 모를거라 생각했다",
  },
];

const UserScheduleScreen = () => {
  const today = dayjs();
  const [currentMonth, setCurrentMonth] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTab, setSelectedTab] = useState("식단");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const daysInMonth = Array.from(
    { length: currentMonth.daysInMonth() },
    (_, i) => currentMonth.date(i + 1)
  );

  const filteredData = sampleData.filter(
    (item) =>
      item.tag === selectedTab &&
      item.date === selectedDate.format("YYYY-MM-DD")
  );

  const handleMonthChange = (monthIndex: number) => {
    const updated = currentMonth.month(monthIndex);
    setCurrentMonth(updated);
    setSelectedDate(updated.date(1));
  };

  return (
    <UseContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View>
            <DaySelector
              daysInMonth={daysInMonth}
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          </View>
          <View>
            <MonthSelector
              selectedMonth={currentMonth.month()}
              onMonthChange={handleMonthChange}
            />
          </View>
          <View>
            <ScheduleTab
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {filteredData.map((item) => (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardText}>{item.content}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.fixedButtonWrapper}>
          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            style={styles.addButton}
            activeOpacity={1}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <AddScheduleModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      </SafeAreaView>
    </UseContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#C0C0C0",
    borderRadius: 8,
  },
  cardText: {
    fontSize: 16,
  },
  fixedButtonWrapper: {
    width: "100%",
  },
  addButton: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#C0C0C0",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#C0C0C0",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default UserScheduleScreen;
