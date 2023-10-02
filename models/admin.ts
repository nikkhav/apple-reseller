import mongoose, { Schema } from "mongoose";

const validRoles = ["admin", "head admin"];

const AdminSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (value: string) {
          return value.length >= 8;
        },
        message: "Password must be at least 8 characters long.",
      },
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "admin",
      validate: {
        validator: function (value: string) {
          return validRoles.includes(value);
        },
        message: "Role must be 'admin' or 'head admin'.",
      },
    },
  },
  {
    timestamps: true,
  },
);

const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

export default Admin;
