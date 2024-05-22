import mongoose from "mongoose";

const carBookedSchema = new mongoose.Schema({
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cars",
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  pickupDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled", "completed"],
    default: "pending",
  },
  insurance: {
    type: Boolean,
    default: false,
  },
  kilometer: {
    type: Number,
    required: true,
  },
  extraKilometer: {
    type: Number,
    default: 0,
  },
  extras: [
    {
      name: {
        type: String,
        enum: ["Child seat", "Winter wheels", "Roof box"],
      },
      quantity: {
        type: Number,
        default: 1,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  pickupLocation: {
    type: String,
    required: true,
  },
  returnLocation: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    // required: true,
  },
  //   duration: {
  //     type: Number,
  //     required: true,
  //   },
  discount: {
    type: Number,
    default: 0,
  },
  cancellationReason: String,
  pickupInstructions: String,
  returnInstructions: String,
  additionalCharges: {
    type: Number,
    default: 0,
  },
  driverLicense: {
    type: String,
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const CarBooked =
  mongoose.models.carbooks || mongoose.model("carbooks", carBookedSchema);

export default CarBooked;
