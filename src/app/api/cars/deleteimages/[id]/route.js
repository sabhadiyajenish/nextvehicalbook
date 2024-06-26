import { connect } from "@/dbConn/dbcon";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

import Cars from "@/model/carModel";

connect();

export async function POST(req, context) {
  try {
    const id = context.params.id;
    const reqBody = await req.json();
    const updatedPreviews = await reqBody;
    const objectId = mongoose.Types.ObjectId.isValid(id);
    if (!objectId) {
      return NextResponse.json({
        error: "provided Car id is incorrect.",
        status: 400,
      });
    }
    const carInfo = await Cars.findById(id);
    carInfo.subImagees =
      updatedPreviews.length !== 0 ? updatedPreviews : carInfo.subImagees;

    const res = await carInfo.save();

    return NextResponse.json({
      res,
      message: "image deletesd Successfully..!!",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      message: "something is wrong while deleting image",
      status: 500,
    });
  }
}
