import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  subImagees: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  subDescription: {
    type: String,
  },
  carInformation: [
    {
      seat: {
        type: Number,
      },

      manual: {
        type: String,
      },
      perLiter: {
        type: String,
      },
      oilType: {
        type: String,
        enum: ["petrol", "deisel", "gas"],
        default: "petrol",
      },
      doors: { type: Number },
      hook: {
        type: String,
      },
      carColor: {
        type: String,
      },
      model: {
        type: String,
      },
    },
  ],
  equipment: [
    {
      type: String,
      enum: ["AirConditioning", "Seat Heating", "Isofix", "Bluetooth", "USB"],
    },
  ],
  pickup_time: {
    type: Date,
  },
  return_time: {
    type: Date,
  },
  perDayCost: {
    type: Number,
    required: [true, "perday cost is required"],
  },
  address: {
    type: String,
  },
});

const Cars = mongoose.models.cars || mongoose.model("cars", carSchema);

export default Cars;
