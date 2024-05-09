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
    const file = formData.get("coverImage[]");
    const files = formData.getAll("SubImages[]"); // Get all files
    const title = formData.get("title");
    const description = formData.get("Description");
    const subDescription = formData.get("SubDescription");
    const pickup_time = formData.get("PickupTime");
    const return_time = formData.get("ReturnTime");

    const perDayCost = formData.get("PerDayCost");
    const address = formData.get("location");

    const seat = formData.get("Seat");
    const manual = formData.get("Manual");
    const perLiter = formData.get("PerLiter");
    const oilType = formData.get("FuelType");
    const doors = "4";
    const hook = formData.get("Hook");
    const carColor = formData.get("carColor");
    const model = formData.get("CarModal");

    // const equipment = ["USB"];
    const arrayEqui = [
      "Airconditioning",
      "Bluetooth",
      "Isofix",
      "SeatHeating",
      "USB",
    ];
    const equipment = [];
    arrayEqui.forEach((equipmentItem) => {
      if (Boolean(formData.get(equipmentItem))) {
        console.log(">>>>>>>>>>>>>>>>", equipmentItem);
        equipment.push(equipmentItem);
      }
    });

    // await CarValidationSchema.validate({
    //   title,
    //   file,
    //   description,
    //   pickup_time,
    //   return_time,
    //   perDayCost,
    //   address,
    //   seat,
    //   manual,
    //   perLiter,
    //   oilType,
    //   doors,
    //   hook,
    //   carColor,
    //   model,
    // });

    // if (!files || files.length === 0) {
    //   return NextResponse.json(
    //     { error: "No files received from subImages." },
    //     { status: 400 }
    //   );
    // }
    // const buffer = Buffer.from(await file.arrayBuffer());

    // const filename = file.name.replaceAll(" ", "_");
    // const namepath = path.join(process.cwd(), "public/uploads/" + filename);
    // await writeFile(namepath, buffer);
    // const avatarSerPath = await fileUploadCloud(namepath);

    // const uploadPromises = files.map(async (file) => {
    //   const buffer = Buffer.from(await file.arrayBuffer());
    //   const filename = file.name.replaceAll(" ", "_");
    //   const namepath = path.join(process.cwd(), "public/uploads/" + filename);
    //   await writeFile(namepath, buffer);
    //   return fileUploadCloud(namepath);
    // });

    // // Wait for all uploads to finish
    // const uploadedPaths = await Promise.all(uploadPromises);
    // let filesImagesPath = [];
    // uploadedPaths.map((items, key) => {
    //   filesImagesPath.push(items?.url);
    // });
    // const carData = await Cars.create({
    //   title,
    //   description,
    //   subDescription,
    //   pickup_time,
    //   return_time,
    //   perDayCost,
    //   address,
    //   carInformation: [
    //     {
    //       seat,
    //       manual,
    //       perLiter,
    //       oilType,
    //       doors,
    //       hook,
    //       carColor,
    //       model,
    //     },
    //   ],
    //   equipment: equipment || [],
    //   coverImage: avatarSerPath?.url || " ",
    //   subImagees: filesImagesPath || [],

    //   // loginType: "email",
    // });

    // const equipment = formData.get("equipment");

    return NextResponse.json({
      // carData,
      equipment,
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
