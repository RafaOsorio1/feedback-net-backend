import { databaseManager } from "../../libs/databaseManager";

export async function createImages(params: {
  imageURLs: string[];
  productId: string;
}) {
  const database = databaseManager.getDatabase();
  const { imageURLs, productId } = params;

  await database.productImage.createMany({
    data: imageURLs.map((url) => ({
      productId,
      url,
    })),
  });
}
