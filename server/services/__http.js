const axios = require("axios");

export const http = axios.create({
  baseURL: process.env.API_BASE_URL,
});
