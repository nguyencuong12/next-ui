import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_URL,
});
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  },
);
export default instance;
