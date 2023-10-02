import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Admin from "@/models/admin";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    await connectMongoDB();

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return NextResponse.json(
        {
          message: "Admin not found.",
        },
        {
          status: 201,
        },
      );
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return NextResponse.json(
        {
          message: "Incorrect password.",
        },
        {
          status: 201,
        },
      );
    }

    const token = jwt.sign({ adminId: admin._id }, JWT_SECRET);

    return NextResponse.json(
      {
        message: "Login successful",
        admin,
        token,
      },
      {
        status: 200,
      },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Login failed",
        error: error.message,
      },
      {
        status: 404,
      },
    );
  }
}
