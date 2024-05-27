import { connect } from "@/dbConn/dbcon";

import { NextResponse } from "next/server";

import User from "@/model/userModel";

connect();

export async function POST(req) {
  try {
    const user = await User.find({}).select("-password").sort({ _id: -1 });

    return NextResponse.json({
      user,
      message: " All Users get Successfully..!!",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      message: "something is wrong while getting all users",
      status: 500,
    });
  }
}
