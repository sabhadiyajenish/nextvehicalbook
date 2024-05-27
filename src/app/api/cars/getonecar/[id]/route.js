import { connect } from "@/dbConn/dbcon";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

import Cars from "@/model/carModel";

connect();

export async function POST(req, context) {
  try {
    const id = context.params.id;

    const objectId = mongoose.Types.ObjectId.isValid(id);
    if (!objectId) {
      return NextResponse.json({
        error: "provided Car id is incorrect.",
        status: 400,
      });
    }
    const carData = await Cars.findById(id);

    return NextResponse.json({
      carData,
      message: " Car get Successfully..!!",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      message: "something is wrong while updating car details",
      status: 500,
    });
  }
}
