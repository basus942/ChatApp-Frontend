import axios from "axios";

export const API = axios.create({
  baseURL: "chatapp-backend-1bpc.onrender.com",
  // withCredentials: true,
});

API.interceptors.request.use(
  (req) => {
    req.headers = {
      ...req.headers,
      "Content-Type": "application/json",
    };

    return req;
  },
  (err) => {
    Promise.reject(err);
  }
);
