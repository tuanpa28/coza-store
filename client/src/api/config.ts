import axios from "axios";

const instance = axios.create({
  baseURL: "https://coza-store-be.vercel.app/api/",
});

export default instance;
