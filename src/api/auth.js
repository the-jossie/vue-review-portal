import { axiosInstance } from "@/configs";

export const loginApi = async (body) => {
  const { data } = await axiosInstance.post("/api/auth/login", body);

  return data;
};

export const signupApi = async (body) => {
  const { data } = await axiosInstance.post("/api/auth/register", body);

  return data;
};
