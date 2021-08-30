const axios = require("axios");

const http = axios.create({
  baseURL: process.env.API_BASE_URL || "http://localhost:5000/api/users",
});

exports.http = http;
