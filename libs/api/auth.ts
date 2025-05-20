import { useAuthStore } from "@/src/stores/useAuthStore";
import { saveRefreshToken } from "@/src/utils/secureToken";

const BASE_URL = "http://192.168.4.19:3050";

export const authAccount = async (
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
