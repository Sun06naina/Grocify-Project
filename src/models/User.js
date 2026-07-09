import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      default: "",
    },

    addresses: [
      {
        name: String,
        phone: String,
        house: String,
        area: String,
        city: String,
        pincode: String,
        landmark: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);