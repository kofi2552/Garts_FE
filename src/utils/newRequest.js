import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  // baseURL: "https://koyarr-server.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;

// baseURL: "http://localhost:8800/api/",VITE_BASE_URL
