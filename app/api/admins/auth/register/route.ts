import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import bcrypt from "bcrypt";
import Admin from "@/models/admin";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export async function POST(request: NextRequest) {
  try {
    const { email, password, firstName, lastName, role } = await request.json();

    await connectMongoDB();

    const hashedPassword = await bcrypt.hash(password, 8);

    const admin = await Admin.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      role,
    });

    const token = jwt.sign({ adminId: admin._id }, JWT_SECRET);

    return NextResponse.json(
      {
        message: "Admin created successfully",
        createdAdmin: admin,
        token: token,
      },
      {
        status: 200,
      },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Error creating admin",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
