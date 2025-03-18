import axios from "axios";
import { API_HOST } from "../libs/constants.ts";

const apiClient = axios.create({
  baseURL: API_HOST,
});

export default apiClient;
