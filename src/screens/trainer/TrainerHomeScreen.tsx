import { getScheduleToday, getTrainerProfile } from "@/libs/api/trainer";
import UseContainer from "@/src/components/common/UseContainer";
import TrainerEventList from "@/src/components/trainer/TrainerEventList";
import TrainerProfile from "@/src/components/trainer/TrainerProfile";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const sampleData = [
  { id: "1", name: "김태희 회원님", time: "09:00 - 10:00", date: "2025-05-15" },
  { id: "2", name: "이민호 회원님", time: "10:00 - 11:00", date: "2025-05-15" },
  { id: "3", name: "정우성 회원님", time: "11:00 - 12:00", date: "2025-05-15" },
  { id: "4", name: "손예진 회원님", time: "09:00 - 10:00", date: "2025-05-16" },
  { id: "5", name: "공유 회원님", time: "10:00 - 11:00", date: "2025-05-17" },
  { id: "6", name: "전지현 회원님", time: "11:00 - 12:00", date: "2025-05-17" },
  { id: "7", name: "공유 회원님", time: "10:00 - 11:00", date: "2025-05-20" },
  { id: "8", name: "전지현 회원님", time: "11:00 - 12:00", date: "2025-05-20" },
  { id: "9", name: "공유 회원님", time: "10:00 - 11:00", date: "2025-05-20" },
  {
    id: "10",
    name: "전지현 회원님",
    time: "11:00 - 12:00",
    date: "2025-05-20",
  },
  { id: "11", name: "공유 회원님", time: "10:00 - 11:00", date: "2025-05-20" },
  {
    id: "12",
    name: "전지현 회원님",
    time: "11:00 - 12:00",
    date: "2025-05-20",
  },
];

type TrainerProfile = {
  name: string;
  photoUrl: string;
};
type ScheduleToday = {
  name: string;
  required: boolean;
  description: string;
};

const TrainerHomeScreen = () => {
  const [trainerName, setTrainerName] = useState<TrainerProfile>({
    name: "",
    photoUrl: "",
  });
  const [scheduleToday, setScheduleToday] = useState<ScheduleToday>({
    name: "",
    required: true,
    description: "",
  });
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getTrainerProfile();
        setTrainerName(profileData);
        // console.log(profileData);
      } catch (error) {
        console.error("프로필 정보를 가져오는데 실패했습니다.", error);
      }
    };

    const fetchScheduleToday = async () => {
      try {
        const scheduleToday = await getScheduleToday();
        setScheduleToday(scheduleToday);
        console.log(scheduleToday);
      } catch (error) {
        console.error("트레이너 오늘 예약 목록 조회에 실패하였습니다.", error);
      }
    };
    fetchProfile();
    fetchScheduleToday();
  }, []);

  const today = dayjs();

  const filteredData = sampleData.filter(
    (item) => item.date === today.format("YYYY-MM-DD")
  );

  const handleCancelSchedule = (id: string) => {
    console.log(`일정 취소: ${id}`);
  };

  return (
    <UseContainer>
      <View style={{ flex: 1, marginTop: 10 }}>
        <View>
          <TrainerProfile
            name={`${trainerName.name}`}
            photoUrl={trainerName.photoUrl}
            scheduleCount={scheduleToday.length || 0}
          />
        </View>
        <View>
          <Text style={styles.dateTitle}>
            {today.format("M월 D일")} 오늘의 일정
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredData.map((item) => (
            <TrainerEventList
              key={item.id}
              name={item.name}
              time={item.time}
              onCancel={() => handleCancelSchedule(item.id)}
            />
          ))}
        </ScrollView>
      </View>
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
  },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    color: "#bbb",
    fontSize: 15,
  },
});
