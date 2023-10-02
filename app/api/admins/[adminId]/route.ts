import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Admin from "@/models/admin";

export async function GET(
  request: NextRequest,
  route: { params: { adminId: string } },
) {
  try {
    const adminId = route.params.adminId;

    await connectMongoDB();

    const admin = await Admin.findById(adminId);

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
  route: { params: { adminId: string } },
) {
  try {
    const adminId = route.params.adminId;
    const updatedData = await request.json();

    await connectMongoDB();

    // Find the admin by ID and update their information
    const updatedAdmin = await Admin.findByIdAndUpdate(adminId, updatedData, {
      new: true,
    });

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
  route: { params: { adminId: string } },
) {
  try {
    const adminId = route.params.adminId;

    await connectMongoDB();

    // Find the admin by ID and delete them
    const deletedAdmin = await Admin.findByIdAndRemove(adminId);

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
