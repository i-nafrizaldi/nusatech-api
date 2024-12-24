import { Prisma } from "@prisma/client";
import prisma from "../../prisma";

export const getProductsService = async () => {
  try {
    const products = await prisma.product.findMany();

    return {
      message: "Create Products Success !",
      data: products,
    };
  } catch (error) {
    throw error;
  }
};
