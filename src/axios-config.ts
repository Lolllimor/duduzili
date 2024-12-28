import { cookieStorage } from "@ibnlanre/portal";
import axios from "axios";
import CryptoJS, { SHA256 } from "crypto-js";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import { handleError } from "./lib/errorHandler";
import { encrypt } from "./lib/encrypt";
import { decrypt } from "./lib/decrypt";

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

API.interceptors.request.use(
  (config) => {
    let requestTs = String(Date.now());
    const HASH_KEY = SHA256(
      (process.env.NEXT_PUBLIC_API_KEY as string) +
        (process.env.NEXT_PUBLIC_SECRET_KEY as string) +
        requestTs
    ).toString(CryptoJS.enc.Hex);
    let token = cookieStorage.getItem("duduzili-auth") as string;
    if (token) {
      token = JSON.parse(token)?.access_token;
      const decodedToken = jwtDecode(token);
      const isExpired =
        dayjs.unix(decodedToken.exp as number).diff(dayjs()) < 1;
      console.log({ isExpired });
      config.headers.Authorization = `Bearer ${token}`;
    }
     config.headers['ADMIN-API-KEY'] = process.env.NEXT_PUBLIC_API_KEY;
     config.headers['ADMIN-HASH-KEY'] = HASH_KEY;
     config.headers['ADMIN-IDEMPOTENCY-KEY'] = requestTs;

    return config;
  },
  (error) => {
    handleError(error);
    Promise.reject(error);
  }
);

// ENCRYPT ALL REQUESTS
API.interceptors.request.use((req) => {
  // console.log(req.data)
  if (req.data?.withFile) {
    const { data } = req.data;
    req.data = data;
  } else {
    req.data = encrypt(req.data);
  }
  return req;
});
// DECRYPT ALL RESPONSES
API.interceptors.response.use(
  (res) => {
    if (res.data) {
      res.data = decrypt(res.data);
    }
    return res;
  }
  // (error) => {
  //   errorMessageHandler(error as ErrorType);
  //   return error
  // }
);

// LOGIN API INSTANCE

export const LOGIN_API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

LOGIN_API.interceptors.request.use(
  (config) => {
    let requestTs = String(Date.now());
    const HASH_KEY = SHA256(
      (process.env.NEXT_PUBLIC_API_KEY as string) +
        (process.env.NEXT_PUBLIC_SECRET_KEY as string) +
        requestTs
    ).toString(CryptoJS.enc.Hex);
    config.headers["ADMIN-API-KEY"] = process.env.NEXT_PUBLIC_API_KEY;
    config.headers["ADMIN-HASH-KEY"] = HASH_KEY;
    config.headers["ADMIN-IDEMPOTENCY-KEY"] = requestTs;

    return config;
  },
  (error) => {
    handleError(error);
    Promise.reject(error);
  }
);

// ENCRYPT ALL REQUESTS
LOGIN_API.interceptors.request.use((req) => {
  req.data = encrypt(req.data);
  return req;
});
// DECRYPT ALL RESPONSES
LOGIN_API.interceptors.response.use(
  (res) => {
    if (res.data) {
      res.data = decrypt(res.data);
    }
    return res;
  }
  // (error) => {
  //   errorMessageHandler(error as ErrorType);
  //   return error
  // }
);
