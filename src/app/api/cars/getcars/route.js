import { connect } from "@/dbConn/dbcon";

import { NextResponse } from "next/server";

import Cars from "@/model/carModel";

connect();

export async function POST(req) {
  try {
    const carData = await Cars.find({});
    // const requestedStartDate = new Date("2024-05-09T12:00:00.000Z"); // Start of the requested day
    // const requestedEndDate = new Date("2024-05-10T18:00:00.000Z");
    // const bookedCars = await Cars.find({
    //   pickup_time: { $lte: requestedStartDate },
    //   return_time: { $gte: requestedEndDate },
    // });
    // const availableCars = await Cars.find({
    //   _id: { $nin: bookedCars },
    // });
    return NextResponse.json({
      carData,

      message: " All Car get Successfully..!!",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      message: "something is wrong while adding car information",
      status: 500,
    });
  }
}
