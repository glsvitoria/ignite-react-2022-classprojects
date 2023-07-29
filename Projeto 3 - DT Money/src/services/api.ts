import axios from "axios";

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const api = axios.create({
  baseURL: "https://ignite-react-2022-dtmoney-iqd2ap04q-glsvitoria.vercel.app",
});
