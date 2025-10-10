import { databaseManager } from "../../libs/databaseManager";

export async function getOneProductUseCase(id: string) {
  const database = databaseManager.getDatabase();

  return await database.product.findUnique({
    where: {
      id: id,
    },
  });
}
