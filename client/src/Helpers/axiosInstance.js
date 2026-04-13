import axios from "axios";

const BASE_URL =  "https://learning-management-system-ryez.onrender.com/api/v1" //http://localhost:5000

const axiosInstance = axios.create();


axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;