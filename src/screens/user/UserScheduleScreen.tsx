import { createRecord, getRecords } from "@/libs/api/records";
import DaySelector from "@/src/components/common/DaySelector";
import MonthSelector from "@/src/components/common/MonthSelector";
import ScheduleTab from "@/src/components/common/ScheduleTab";
import UseContainer from "@/src/components/common/UseContainer";
import AddScheduleModal from "@/src/components/user/AddScheduleModal";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ScheduleData {
  id: number;
  tag: "식단" | "운동";
  date: string;
  content: string;
  image?: string;
}

export default function UserScheduleScreen() {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTab, setSelectedTab] = useState<"식단" | "운동">("식단");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [schedules, setSchedules] = useState<ScheduleData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSchedules = async () => {
    try {
      setLoading(true);
      setError(null);
      const date = selectedDate.format("YYYY-MM-DD");
      const data = await getRecords(date);
      setSchedules(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "기록을 불러오는데 실패했습니다."
      );
      Alert.alert(
        "오류",
        err instanceof Error ? err.message : "기록을 불러오는데 실패했습니다."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, [selectedDate]);

  const handleMonthChange = (monthIndex: number) => {
    const updated = currentMonth.month(monthIndex);
    setCurrentMonth(updated);
    setSelectedDate(updated.date(1));
  };

  const handleAddSchedule = async (data: {
    content: string;
    tag: "식단" | "운동";
    image?: string;
  }) => {
    try {
      const date = selectedDate.format("YYYY-MM-DD");
      await createRecord({
        date,
        content: data.content,
        tag: data.tag,
        image: data.image,
      });
      Alert.alert("성공", "기록이 추가되었습니다.");
      setIsModalVisible(false);
      fetchSchedules();
    } catch (err) {
      Alert.alert(
        "오류",
        err instanceof Error ? err.message : "기록 추가에 실패했습니다."
      );
    }
  };

  const filteredSchedules = schedules.filter(
    (schedule) => schedule.tag === selectedTab
  );

  return (
    <UseContainer>
      <View style={{ flex: 1, marginTop: 10 }}>
        <View style={{ flex: 1 }}>
          <View>
            <MonthSelector
              selectedMonth={currentMonth.month()}
              onMonthChange={handleMonthChange}
            />
          </View>
          <View style={{ marginBottom: 20, marginTop: 10 }}>
            <DaySelector
              daysInMonth={Array.from(
                { length: currentMonth.daysInMonth() },
                (_, i) => currentMonth.date(i + 1)
              )}
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          </View>

          <View>
            <ScheduleTab
              selectedTab={selectedTab}
              setSelectedTab={(tab) => setSelectedTab(tab as "식단" | "운동")}
            />
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {loading ? (
              <Text style={styles.loadingText}>로딩 중...</Text>
            ) : error ? (
              <Text style={styles.errorText}>{error}</Text>
            ) : filteredSchedules.length === 0 ? (
              <Text style={styles.emptyText}>등록된 기록이 없습니다.</Text>
            ) : (
              filteredSchedules.map((schedule) => (
                <View key={schedule.id} style={styles.card}>
                  <Text style={styles.cardText}>{schedule.content}</Text>
                  {schedule.image && (
                    <Image
                      source={{ uri: schedule.image }}
                      style={styles.image}
                    />
                  )}
                </View>
              ))
            )}
          </ScrollView>
        </View>
        <View style={styles.fixedButtonWrapper}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setIsModalVisible(true)}
            activeOpacity={1}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <AddScheduleModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          onAdd={handleAddSchedule}
        />
      </View>
    </UseContainer>
  );
}

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
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
    borderRadius: 8,
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
  loadingText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#666",
  },
  errorText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "red",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#666",
  },
});
