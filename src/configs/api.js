import axios from "axios";
import Vue from "vue";
import { APP_NAME, STORAGE_KEYS } from "./app";

const APIURL = "http://localhost:5000";

const getToken = () => {
  if (typeof window !== "undefined") {
    try {
      const store = JSON.parse(
        window["localStorage"][`${APP_NAME}-${STORAGE_KEYS.auth}`]
      );

      const apiToken = store && store.token;

      return apiToken ? `Bearer ${apiToken}` : "";
    } catch (error) {
      return "";
    }
  }
};

const getApiConfig = (url, contentType = "application/json") => {
  return {
    baseURL: url,
    headers: {
      "Content-Type": contentType,
      Authorization: getToken(),
      Accept: "*/*",
    },
    timeout: 10000,
  };
};

const axiosInstance = axios.create(getApiConfig(APIURL));

const axiosInstanceWithMultiPart = axios.create(
  getApiConfig(APIURL, "multipart/form-data")
);

const interceptRequestFor = (instance) => {
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        localStorage.clear();

        Vue.$toast.error("Session expired. Please login", {
          timeout: 2000,
        });
      }
      return Promise.reject(error);
    }
  );
};

interceptRequestFor(axiosInstance);
interceptRequestFor(axiosInstanceWithMultiPart);

export { axiosInstance, axiosInstanceWithMultiPart };
