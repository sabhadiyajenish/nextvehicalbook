import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(`${process.env.MONGO_URL}/carbooking`);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MONGOdb conncted..!!");
    });
    connection.on("error", (err) => {
      console.log("MONGodb connection failed!", err);
      process.exit();
    });
  } catch (error) {
    console.log("something is wrong while connection mongodb", error);
  }
}
