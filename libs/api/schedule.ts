import { useAuthStore } from "@/src/stores/useAuthStore";

const BASE_URL = "http://192.168.4.19:3050";

export const getSchedule = async () => {
  const accessToken = useAuthStore.getState().accessToken;
  if (!accessToken) throw new Error("로그인이 필요합니다.");
};
