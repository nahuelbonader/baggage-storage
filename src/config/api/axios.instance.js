import axios from "axios";

const url = process.env.API_URL_LOCAL || "http://localhost:3000/";

const instance = axios.create({
  baseURL: url,
  withCredentials: true,
});

const fetchAPI = ({ method, url, body }) => {
  return instance[method](url, body);
};

export default fetchAPI;
