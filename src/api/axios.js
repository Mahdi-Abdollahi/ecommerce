import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_API_TOKEN;

const API = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export default API;
