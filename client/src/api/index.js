import axios from "axios";

const axiosPublic = axios.create({
  baseURL: `${
    import.meta.env.VITE_NODE_ENV === "development"
      ? import.meta.env.VITE_API_URL_LOCAL
      : import.meta.env.VITE_API_URL_PROD
  }/api/v1`,
});

export default axiosPublic;
