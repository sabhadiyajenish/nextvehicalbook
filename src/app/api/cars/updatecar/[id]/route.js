import { connect } from "@/dbConn/dbcon";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

import Cars from "@/model/carModel";

connect();

export async function POST(req, context) {
  try {
    const id = context.params.id;
    const reqBody = await req.json();
    const {
      title,
      location,
      PerDayCost,
      carSizeType,
      Description,
      SubDescription,
      coverImage,
      SubImages,
      carColor,
      Seat,
      Manual,
      FuelType,
      CarModal,
      PerLiter,
      Hook,
      PickupTime,
      ReturnTime,
      equipment,
    } = await reqBody;
    const objectId = mongoose.Types.ObjectId.isValid(id);
    if (!objectId) {
      return NextResponse.json({
        error: "provided Car id is incorrect.",
        status: 400,
      });
    }
    const carInfo = await Cars.findById(id);
    carInfo.title = title || carInfo.title;
    carInfo.address = location || carInfo.address;
    carInfo.coverImage = coverImage == null ? carInfo.coverImage : coverImage;
    carInfo.subImagees =
      SubImages.length !== 0
        ? carInfo.subImagees.concat(SubImages)
        : carInfo.subImagees;
    carInfo.description = Description || carInfo.description;
    carInfo.subDescription = SubDescription || carInfo.subDescription;
    carInfo.pickup_time = PickupTime || carInfo.pickup_time;
    carInfo.return_time = ReturnTime || carInfo.return_time;
    carInfo.perDayCost = PerDayCost || carInfo.perDayCost;
    carInfo.equipment = equipment || carInfo.equipment;

    carInfo.carInformation[0].carColor = carColor;
    carInfo.carInformation[0].hook = Hook;
    carInfo.carInformation[0].manual = Manual;
    carInfo.carInformation[0].model = CarModal;
    carInfo.carInformation[0].oilType = FuelType;
    carInfo.carInformation[0].perLiter = PerLiter;
    carInfo.carInformation[0].seat = Seat;

    carInfo.carSizeType = carSizeType;
    const res = await carInfo.save();

    return NextResponse.json({
      res,
      carSizeType,
      message: " Car Updated Successfully..!!",
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
