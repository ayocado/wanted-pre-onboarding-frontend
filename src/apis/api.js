import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: { "Content-Type": "application/json" },
});

export const signupApi = async (email, password) => {
  try {
    const data = await axiosApi.post("/auth/signup", { email, password });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const signinApi = async (email, password) => {
  try {
    const data = await axiosApi.post("/auth/signin", { email, password });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
