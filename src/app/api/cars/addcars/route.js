// import { generateAccessJWT, generateRefreshJWT } from "@/utils/authUtils";
// import { comparePasswords } from "@/utils/passwordUtils";
import { connect } from "@/dbConn/dbcon";
// import User from "@/model/userModel";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
// import Cars from "@/model/carModel";
import { writeFile } from "fs/promises";
import path from "path";
import { fileUploadCloud } from "@/utils/cloudinary";
import Cars from "@/model/carModel";
import { CarValidationSchema } from "@/utils/validation/carValidation";

connect();

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("coverImage");
    const files = formData.getAll("subImages"); // Get all files
    const title = formData.get("title");
    const description = formData.get("description");
    const subDescription = formData.get("subDescription");
    const pickup_time = formData.get("pickup_time");
    const return_time = formData.get("return_time");

    const perDayCost = formData.get("perDayCost");
    const address = formData.get("address");

    const seat = formData.get("seat");
    const manual = formData.get("manual");
    const perLiter = formData.get("perLiter");
    const oilType = formData.get("oilType");
    const doors = formData.get("doors");
    const hook = formData.get("hook");
    const carColor = formData.get("carColor");
    const model = formData.get("model");

    const equipment = formData.get("equipment");
    await CarValidationSchema.validate({
      title,
      file,
      description,
      pickup_time,
      return_time,
      perDayCost,
      address,
      seat,
      manual,
      perLiter,
      oilType,
      doors,
      hook,
      carColor,
      model,
    });

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: "No files received from subImages." },
        { status: 400 }
      );
    }
    const buffer = Buffer.from(await file.arrayBuffer());

    const filename = file.name.replaceAll(" ", "_");
    const namepath = path.join(process.cwd(), "public/uploads/" + filename);
    await writeFile(namepath, buffer);
    const avatarSerPath = await fileUploadCloud(namepath);

    const uploadPromises = files.map(async (file) => {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = file.name.replaceAll(" ", "_");
      const namepath = path.join(process.cwd(), "public/uploads/" + filename);
      await writeFile(namepath, buffer);
      return fileUploadCloud(namepath);
    });

    // Wait for all uploads to finish
    const uploadedPaths = await Promise.all(uploadPromises);
    let filesImagesPath = [];
    uploadedPaths.map((items, key) => {
      filesImagesPath.push(items?.url);
    });
    const carData = await Cars.create({
      title,
      description,
      subDescription,
      pickup_time,
      return_time,
      perDayCost,
      address,
      carInformation: [
        {
          seat,
          manual,
          perLiter,
          oilType,
          doors,
          hook,
          carColor,
          model,
        },
      ],
      equipment: [equipment],
      coverImage: avatarSerPath?.url || " ",
      subImagees: filesImagesPath || [],

      // loginType: "email",
    });

    // const equipment = formData.get("equipment");

    return NextResponse.json({
      carData,

      message: "Car Add Successfully..!!",
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
