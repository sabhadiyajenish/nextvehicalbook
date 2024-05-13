import { connect } from "@/dbConn/dbcon";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

import Cars from "@/model/carModel";
import { deleteImage } from "@/utils/cloudinary";

connect();
function extractPublicIdFromUrl(url) {
  const startIndex = url.lastIndexOf("/") + 1;
  const endIndex =
    url.lastIndexOf(".") !== -1 ? url.lastIndexOf(".") : url.length;
  return url.substring(startIndex, endIndex);
}

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
    let imageUrl = [];
    imageUrl.push(carData?.coverImage);

    carData?.subImagees?.forEach((element) => {
      imageUrl.push(element);
    });
    imageUrl.forEach((ele) => {
      const publicId = extractPublicIdFromUrl(ele);
      deleteImage(publicId);
    });

    const carInfo = await Cars.findByIdAndDelete(objectId);

    return NextResponse.json({
      carInfo,
      message: " Car Deleted Successfully..!!",
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
