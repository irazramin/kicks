import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

const API_BASE_URL = "https://api.escuelajs.co/api/v1";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => config,
  (error) => {
    console.error("[API Request Error]", error);
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const message = (error.response?.data as { message?: string })?.message 
      || error.message 
      || "Something went wrong";
      
    toast.error(`Error: ${message}`);
    
    console.error("[API Response Error]", {
      status: error.response?.status,
      message: message,
      url: error.config?.url,
    });

    return Promise.reject(error);
  },
);
