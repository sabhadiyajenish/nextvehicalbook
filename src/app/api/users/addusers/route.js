// import { generateAccessJWT, generateRefreshJWT } from "@/utils/authUtils";
// import { comparePasswords } from "@/utils/passwordUtils";
import { connect } from "@/dbConn/dbcon";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/model/userModel";
import { UserValidationSchema } from "@/utils/validation/userValidation";
import { generateRandomString, hashPassword } from "@/utils/passwordGenerate";
import { generateAccessJWT } from "@/utils/authUtils";

connect();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      postalCode,
      city,
      drivingLicenceNumber,
      companyName = "",
      companyCVR = "",
    } = await reqBody;

    await UserValidationSchema.validate({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      postalCode: postalCode,
      city: city,
      drivindLicence: drivingLicenceNumber,
    });

    const findEmail = await User.findOne({ email });

    if (findEmail) {
      return NextResponse.json({
        message: "Email Already exits..!!",
        status: 500,
      });
    }

    const randomPassword = generateRandomString(8);

    const password = hashPassword(randomPassword);
    const userData = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password,
      phoneNumber: phoneNumber,
      address: address,
      postalCode: postalCode,
      city: city,
      drivindLicence: drivingLicenceNumber,
      companyName: companyName ? companyName : null,
      companyCVR: companyCVR ? companyCVR : null,
    });

    const accessToken = generateAccessJWT({
      _id: userData?._id,
      email: userData?.email,
    });

    const user = await User.findById({
      _id: userData?._id,
    }).select("-password");

    const reponse = NextResponse.json({
      data: user,
      accessToken,
      message: "User Add Successfully..!!",
      status: 200,
    });

    reponse.cookies.set("token", accessToken, {
      httpOnly: true,
      //   secure: true,
    });

    return reponse;
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      message: "something is wrong while adding User information",
      status: 500,
    });
  }
}
