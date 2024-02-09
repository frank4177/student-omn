import axios from "axios";

// Base URL
const BASE_URL = "https://test.omniswift.com.ng/api"

export const request = axios.create({
  baseURL: BASE_URL
});

// Headers
 export const header = {
    headers: {
        Accept: "application/json"
    },
  };