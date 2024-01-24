import axios from "axios";
import {clearCookie} from "./auth";

const axiosSecure = axios.create({
  baseURL: `${
    import.meta.env.VITE_NODE_ENV === "production"
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_LOCAL
  }/api/v1`,
  withCredentials: true,
});

axiosSecure.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("Error tracked in the interceptor", error.response);
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      await clearCookie();
      window.location.replace("/auth/login");
    }

    return Promise.reject(error);
  }
);

export default axiosSecure;
