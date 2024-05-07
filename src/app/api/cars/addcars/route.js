// import { generateAccessJWT, generateRefreshJWT } from "@/utils/authUtils";
// import { comparePasswords } from "@/utils/passwordUtils";
import { connect } from "@/dbConn/dbcon";
// import User from "@/model/userModel";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(req) {
  try {
    return NextResponse.json({
      message: "Login Successfully..!!",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      message: "error",
      status: 500,
    });
  }
}
