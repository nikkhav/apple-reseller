import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Product from "@/models/product";

export async function GET(
  request: NextRequest,
  route: { params: { productId: string } },
) {
  try {
    const productId = route.params.productId;

    await connectMongoDB();

    // Find the product by ID
    const product = await Product.findById(productId);

    if (!product) {
      return NextResponse.json(
        {
          message: "Product not found.",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(product, {
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Error fetching product",
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
  route: { params: { productId: string } },
) {
  try {
    const productId = route.params.productId;
    const updatedData = await request.json();

    await connectMongoDB();

    // Find the product by ID and update its information
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatedData,
      {
        new: true,
      },
    );

    if (!updatedProduct) {
      return NextResponse.json(
        {
          message: "Product not found.",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      {
        message: "Product updated successfully",
        updatedProduct,
      },
      {
        status: 200,
      },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Error updating product",
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
  route: { params: { productId: string } },
) {
  try {
    const productId = route.params.productId;

    await connectMongoDB();

    // Find the product by ID and delete it
    const deletedProduct = await Product.findByIdAndRemove(productId);

    if (!deletedProduct) {
      return NextResponse.json(
        {
          message: "Product not found.",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      {
        message: "Product deleted successfully",
        deletedProduct,
      },
      {
        status: 200,
      },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Error deleting product",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
