import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api", // Use full API URL
  withCredentials: true, // Ensures cookies (refresh token) are sent
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      if (isLoggedIn) {
        localStorage.setItem("isLoggedIn", "false");
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default api;
