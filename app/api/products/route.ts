import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Product from "@/models/product";

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category");
  await connectMongoDB();

  let allProducts;

  try {
    if (category) {
      allProducts = await Product.find({ category });
    } else {
      allProducts = await Product.find();
    }

    return NextResponse.json(allProducts, {
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Error fetching products",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const {
      titles,
      prices,
      image,
      descriptions,
      category,
      isNewProduct,
      discountRate,
    } = await request.json();

    await connectMongoDB();

    const product = await Product.create({
      title: titles,
      prices: {
        eur: prices.eur,
        rub: prices.rub,
      },
      image,
      description: descriptions,
      category,
      isNewProduct,
      discountRate,
    });

    return NextResponse.json(
      {
        message: "Product created successfully",
        createdProduct: product,
      },
      {
        status: 200,
      },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Error creating product",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
