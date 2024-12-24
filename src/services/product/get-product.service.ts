import prisma from "../../prisma";

export const getProductService = async (id: number) => {
  try {
    const product = await prisma.product.findFirst({
      where: { id },
    });

    if (!product) {
      throw new Error("Product not found !");
    }

    return {
      message: "Get Product Success !",
      data: product,
    };
  } catch (error) {
    throw error;
  }
};
