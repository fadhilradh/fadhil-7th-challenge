const axios = require("axios");

const http = axios.create({
  baseURL: process.env.API_BASE_URL,
});

exports.http = http;
