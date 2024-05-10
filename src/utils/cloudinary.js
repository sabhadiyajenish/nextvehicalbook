import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";
cloudinary.config({
  cloud_name: "do0bsfskk",
  api_key: "673335253975921",
  api_secret: "u_Ir7mJExKsFN2uw6CfIOI9LSUM",
});

export const fileUploadCloud = async (filePathName) => {
  try {
    if (!filePathName) return null;

    const fileResponse = await cloudinary.uploader.upload(filePathName, {
      resource_type: "auto",
    });

    console.log("File uploaded successfully", fileResponse);
    // fs.unlinkSync(filePathName);
    return fileResponse;
  } catch (error) {
    // fs.unlinkSync(filePathName);
    console.log("Clouinary file Error", error);
  }
};
