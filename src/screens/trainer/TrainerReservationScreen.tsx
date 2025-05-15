import DaySelector from "@/src/components/common/DaySelector";
import MonthSelector from "@/src/components/common/MonthSelector";
import UseContainer from "@/src/components/common/UseContainer";
import dayjs from "dayjs";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const sampleData = [
  { id: "1", name: "김태희 회원님", time: "09:00 - 10:00", date: "2025-05-15" },
  { id: "2", name: "이민호 회원님", time: "10:00 - 11:00", date: "2025-05-15" },
  { id: "3", name: "정우성 회원님", time: "11:00 - 12:00", date: "2025-05-15" },
  { id: "4", name: "손예진 회원님", time: "09:00 - 10:00", date: "2025-05-16" },
  { id: "5", name: "공유 회원님", time: "10:00 - 11:00", date: "2025-05-17" },
  { id: "6", name: "전지현 회원님", time: "11:00 - 12:00", date: "2025-05-17" },
];

const TrainerReservationScreen = () => {
  const today = dayjs();
  const [currentMonth, setCurrentMonth] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);

  const daysInMonth = Array.from(
    { length: currentMonth.daysInMonth() },
    (_, i) => currentMonth.date(i + 1)
  );

  const filteredData = sampleData.filter(
    (item) => item.date === selectedDate.format("YYYY-MM-DD")
  );

  const handleMonthChange = (monthIndex: number) => {
    const updated = currentMonth.month(monthIndex);
    setCurrentMonth(updated);
    setSelectedDate(updated.date(1));
  };
  return (
    <UseContainer>
      <DaySelector
        daysInMonth={daysInMonth}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />
      <MonthSelector
        selectedMonth={currentMonth.month()}
        onMonthChange={handleMonthChange}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </UseContainer>
  );
};
export default TrainerReservationScreen;

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F9F9F9",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  name: { fontSize: 16, fontWeight: "bold" },
  time: { fontSize: 14, color: "#666" },
  date: { fontSize: 12, color: "#aaa", alignSelf: "center" },
});
