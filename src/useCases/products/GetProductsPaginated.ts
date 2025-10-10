import { databaseManager } from "../../libs/databaseManager";

export async function getAllProductsUseCase(params: {
  page: number;
  limit: number;
}) {
  const database = databaseManager.getDatabase();

  const products = await database.product.findMany({
    skip: (params.page - 1) * params.limit, //offset
    take: params.limit, //limit
    include: {
      images: true,
      category: true,
    },
  });

  const count = await database.product.count();

  const total_pages = Math.ceil(count / params.limit);

  return {
    data: products,
    meta: {
      page: params.page,
      limit: params.limit,
      total_pages: total_pages,
      total_count: count,
    },
  };
}
