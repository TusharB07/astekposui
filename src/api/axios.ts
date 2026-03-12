import axios from "axios";
import config from "./config";

const api = axios.create({
  baseURL: config.apiBaseUrl
});

// ✅ Attach JWT automatically
api.interceptors.request.use((req) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// ✅ Handle expired / invalid token
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Remove token
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");

      // Redirect to login
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export default api;
