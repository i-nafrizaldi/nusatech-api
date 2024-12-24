import { Product } from "@prisma/client";
import prisma from "../../prisma";

interface CreateProduct extends Omit<Product, "id"> {}

export const createProductService = async (body: CreateProduct) => {
  try {
    const { name, price } = body;

    const existingProduct = await prisma.product.findFirst({
      where: { name },
    });

    if (existingProduct) {
      throw new Error("Product already exist !");
    }

    const result = await prisma.product.create({
      data: {
        ...body,
      },
    });

    return {
      message: "Create Product Success !",
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
