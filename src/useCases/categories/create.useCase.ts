import { databaseManager } from "../../libs/databaseManager";

export async function createCategoryUseCase(name: string) {
  const database = databaseManager.getDatabase();

  const result = await database.category.create({
    data: {
      name,
    },
  });

  return result;
}
