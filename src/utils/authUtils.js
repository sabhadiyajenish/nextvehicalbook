import jwt from "jsonwebtoken";

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET; // Replace with your actual secret key
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET; // Replace with your actual secret key

export function generateAccessJWT(payload) {
  console.log("payload", payload);
  return jwt.sign(payload, JWT_ACCESS_SECRET, {
    expiresIn: JWT_REFRESH_SECRET,
  }); // Token expires in 1 day
}

export function decodeAccessJWT(token) {
  return jwt.verify(token, JWT_ACCESS_SECRET); // Token expires in 1 day
}
