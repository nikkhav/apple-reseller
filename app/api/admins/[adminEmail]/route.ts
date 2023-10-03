import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Admin from "@/models/admin";

export async function GET(
  request: NextRequest,
  route: { params: { adminEmail: string } },
) {
  try {
    const adminEmail = route.params.adminEmail;

    await connectMongoDB();

    const admin = await Admin.findOne({
      email: adminEmail,
    });

    if (!admin) {
      return NextResponse.json(
        {
          message: "Admin not found.",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(admin, {
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Error fetching admin",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}

export async function PATCH(
  request: NextRequest,
  route: { params: { adminEmail: string } },
) {
  try {
    const adminEmail = route.params.adminEmail;
    const updatedData = await request.json();

    await connectMongoDB();

    // Find the admin by email and update their information
    const updatedAdmin = await Admin.findOneAndUpdate(
      {
        email: adminEmail,
      },
      updatedData,
      {
        new: true,
      },
    );

    if (!updatedAdmin) {
      return NextResponse.json(
        {
          message: "Admin not found.",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      {
        message: "Admin updated successfully",
        updatedAdmin,
      },
      {
        status: 200,
      },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Error updating admin",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  route: { params: { adminEmail: string } },
) {
  try {
    const adminEmail = route.params.adminEmail;

    await connectMongoDB();

    // Find the admin by email and delete them
    const deletedAdmin = await Admin.findOneAndDelete({
      email: adminEmail,
    });

    if (!deletedAdmin) {
      return NextResponse.json(
        {
          message: "Admin not found.",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      {
        message: "Admin deleted successfully",
        deletedAdmin,
      },
      {
        status: 200,
      },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Error deleting admin",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
