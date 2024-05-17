import { connect } from "@/dbConn/dbcon";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

import Cars from "@/model/carModel";

connect();

export async function POST(req, context) {
  try {
    const id = context.params.id;

    if (!id) {
      return NextResponse.json(
        { error: "Not receive carId." },
        { status: 400 }
      );
    }
    const objectId = new mongoose.Types.ObjectId(id);
    const carData = await Cars.findById(objectId);

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
