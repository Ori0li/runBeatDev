import { useAuthStore } from "@/src/stores/useAuthStore";

const BASE_URL = "http://192.168.4.19:3050";

export const getUserMainProfile = async () => {
  const accessToken = useAuthStore.getState().accessToken;
  if (!accessToken) throw new Error("로그인이 필요합니다.");

  const res = await fetch(`${BASE_URL}/profile/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message || "프로필 정보를 가져오는데 실패했습니다.");
  }

  return json.data;
};

export const getUserDetailProfile = async () => {
  const accessToken = useAuthStore.getState().accessToken;
  if (!accessToken) throw new Error("로그인이 필요합니다.");

  const res = await fetch(`${BASE_URL}/profile/info`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message || "프로필 정보를 가져오는데 실패했습니다.");
  }

  return json.data;
};

export const updateUserProfile = async (profileData: {
  name: string;
  trainer: string;
  height: number;
  weight: number;
  gender: string;
}) => {
  const accessToken = useAuthStore.getState().accessToken;
  if (!accessToken) throw new Error("로그인이 필요합니다.");

  const res = await fetch(`${BASE_URL}/profile/info`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(profileData),
  });

  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message || "프로필 수정에 실패했습니다.");
  }

  return json.data;
};
