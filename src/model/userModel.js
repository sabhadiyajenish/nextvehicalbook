import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  drivindLicence: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyCVR: {
    type: String,
    required: true,
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
