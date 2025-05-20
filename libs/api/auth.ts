import { useAuthStore } from "@/src/stores/useAuthStore";
import { saveRefreshToken } from "@/src/utils/secureToken";

const BASE_URL = "http://192.168.4.19:3050";

export const signin_user = async (
  email: string,
  password: string,
  role: "trainer" | "user"
) => {
  const res = await fetch(`${BASE_URL}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, role }),
  });

  const json = await res.json();

  if (!res.ok || !json.success || json.data.role != role) {
    throw new Error(json.message || "로그인 실패");
  }

  const { accessToken, refreshToken, role: serverRole } = json.data;
  useAuthStore.getState().setAuth(accessToken, serverRole);
  await saveRefreshToken(refreshToken);
};

export const getUserProfile = async () => {
  const accessToken = useAuthStore.getState().accessToken;
  if (!accessToken) throw new Error("로그인이 필요합니다.");

  const res = await fetch(`${BASE_URL}/user/profile`, {
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
  birth: string;
  weight: number;
  gender: string;
}) => {
  const accessToken = useAuthStore.getState().accessToken;
  if (!accessToken) throw new Error("로그인이 필요합니다.");

  const res = await fetch(`${BASE_URL}/user/profile`, {
    method: "PUT",
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
