import { databaseManager } from "../../libs/databaseManager";

export async function deleteOneProductUseCase(productId: string) {
  const database = databaseManager.getDatabase();

  const productToDelete = await database.product.findUnique({
    where: {
      id: productId,
    },
  });

  await database.product.delete({
    where: {
      id: productId,
    },
  });

  await database.productImage.deleteMany({
    where: {
      productId,
    },
  });

  return productToDelete;
}
