import axios from "axios";

const newRequest = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

export default newRequest;

