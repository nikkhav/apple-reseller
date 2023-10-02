import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Admin from "@/models/admin";

export async function GET() {
  await connectMongoDB();

  const allAdmins = await Admin.find({});

  return NextResponse.json(allAdmins, {
    status: 200,
  });
}
