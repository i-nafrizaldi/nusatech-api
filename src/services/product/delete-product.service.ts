import prisma from "../../prisma";

export const deleteProductService = async (id: number) => {
  try {
    const product = await prisma.product.findFirst({
      where: { id },
    });

    if (!product) {
      throw new Error("Product not found !");
    }

    const deleteProduct = await prisma.product.delete({
      where: { id },
    });

    return { message: "Delete address success", data: deleteProduct };
  } catch (error) {
    throw error;
  }
};
