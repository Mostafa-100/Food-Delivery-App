import axios from "axios";
import { API_HOST } from "../libs/constants";

const apiClient = axios.create({
  baseURL: API_HOST,
  headers: {
    Accept: "application/json",
  },
});

export default apiClient;
