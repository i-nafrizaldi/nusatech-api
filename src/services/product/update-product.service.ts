import { Product } from "@prisma/client";
import prisma from "../../prisma";

export const updateProductService = async (
  id: number,
  body: Partial<Product>
) => {
  try {
    const product = await prisma.product.findFirst({
      where: { id },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    return await prisma.product.update({
      where: { id },
      data: { ...body },
    });
  } catch (error) {
    throw error;
  }
};
