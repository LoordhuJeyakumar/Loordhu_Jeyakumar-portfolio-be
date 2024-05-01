const dotEnv = require("dotenv");

dotEnv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_SECURE = process.env.EMAIL_SECURE;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

module.exports = {
  MONGODB_URI,
  PORT,
  DB_NAME,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
  EMAIL_SECURE,
};
