import axios from "axios";

export const api = axios.create({
  baseURL: "https://ignite-react-2022-dtmoney-iqd2ap04q-glsvitoria.vercel.app",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
