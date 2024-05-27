// import { generateAccessJWT, generateRefreshJWT } from "@/utils/authUtils";
// import { comparePasswords } from "@/utils/passwordUtils";
import { connect } from "@/dbConn/dbcon";
import { NextResponse } from "next/server";
import CarsModel from "@/model/carBookedModel";
import { UserValidationSchema } from "@/utils/validation/userValidation";
import { generateRandomString, hashPassword } from "@/utils/passwordGenerate";
import { generateAccessJWT } from "@/utils/authUtils";

connect();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const {
      pickUpDate,
      returnDates,
      insurance,
      kilometer,
      extraKilometers,
      pickupLocation,
      city,
      drivingLicenceNumber,
      companyName = "",
      companyCVR = "",
    } = await reqBody;

    // await UserValidationSchema.validate({
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   phoneNumber: phoneNumber,
    //   address: address,
    //   postalCode: postalCode,
    //   city: city,
    //   drivindLicence: drivingLicenceNumber,
    // });

    // const userData = await User.create({
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   password,
    //   phoneNumber: phoneNumber,
    //   address: address,
    //   postalCode: postalCode,
    //   city: city,
    //   drivindLicence: drivingLicenceNumber,
    //   companyName: companyName ? companyName : null,
    //   companyCVR: companyCVR ? companyCVR : null,
    // });

    return NextResponse.json({
      // userData,
      message: "Car Booking Successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      message: "something is wrong while adding User information",
      status: 500,
    });
  }
}
