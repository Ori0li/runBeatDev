import DaySelector from "@/src/components/common/DaySelector";
import MonthSelector from "@/src/components/common/MonthSelector";
import UseContainer from "@/src/components/common/UseContainer";
import TrainerEventList from "@/src/components/trainer/TrainerEventList";
import TrainerProfile from "@/src/components/trainer/TrainerProfile";
import dayjs from "dayjs";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";

const sampleData = [
  { id: "1", name: "김태희 회원님", time: "09:00 - 10:00", date: "2025-05-15" },
  { id: "2", name: "이민호 회원님", time: "10:00 - 11:00", date: "2025-05-15" },
  { id: "3", name: "정우성 회원님", time: "11:00 - 12:00", date: "2025-05-15" },
  { id: "4", name: "손예진 회원님", time: "09:00 - 10:00", date: "2025-05-16" },
  { id: "5", name: "공유 회원님", time: "10:00 - 11:00", date: "2025-05-17" },
  { id: "6", name: "전지현 회원님", time: "11:00 - 12:00", date: "2025-05-17" },
];

const TrainerHomeScreen = () => {
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

  const handleCancelSchedule = (id: string) => {
    console.log(`일정 취소: ${id}`);
  };

  return (
    <UseContainer>
      <TrainerProfile name="홍길동" />
      <MonthSelector
        selectedMonth={currentMonth.month()}
        onMonthChange={handleMonthChange}
      />
      <DaySelector
        daysInMonth={daysInMonth}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />
      <Text style={styles.dateTitle}>
        {selectedDate.format("M월 D일")} 오늘의 일정
      </Text>
      {filteredData.map((item) => (
        <TrainerEventList
          key={item.id}
          name={item.name}
          time={item.time}
          onCancel={() => handleCancelSchedule(item.id)}
        />
      ))}
    </UseContainer>
  );
};
export default TrainerHomeScreen;

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff" },
  dateTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
    // marginVertical: 16,
    marginHorizontal: 20,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    color: "#bbb",
    fontSize: 15,
  },
});
