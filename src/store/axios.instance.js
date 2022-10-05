import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:7000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
