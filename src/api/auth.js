import { axiosInstance } from "@/configs";

export const loginApi = async (body) => {
  const { data } = await axiosInstance.post("/login", body);

  return data;
};

export const signupApi = async (body) => {
  const { data } = await axiosInstance.post("/signup", body);

  return data;
};
