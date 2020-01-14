import path from "path";
require("dotenv").config();
module.exports = {
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "./src")
    };
    return config;
  },
  target: "serverless",
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    GURUNAVI_API_KEY: process.env.GURUNAVI_API_KEY
  }
};
