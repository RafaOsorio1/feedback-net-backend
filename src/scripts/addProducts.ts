import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async (tx) => {
    await tx.product.upsert({
      where: {
        id: "clx8f6y5z0002j4xr8i9o0p1m",
      },
      update: {},
      create: {
        id: "clx8f6y5z0002j4xr8i9o0p1m",
        name: "Camiseta Básica",
        description: "Camiseta de algodón 100% color blanco",
        price: 24.99,
        stock: 50,
        sku: "CAM-001",
        categoryId: "clx8f6y5z0000j4xr7q1q2w3e",
      },
    });

    await tx.product.upsert({
      where: {
        id: "clx8f6y5z0003j4xr1a2s3d4f",
      },
      update: {},
      create: {
        id: "clx8f6y5z0003j4xr1a2s3d4f",
        name: "Smartphone X20",
        description: "Teléfono inteligente con cámara de 108MP",
        price: 599.99,
        stock: 30,
        sku: "PHN-001",
        categoryId: "clx8f6y5z0001j4xr4h5j6k7l",
      },
    });

    await tx.productImage.createMany({
      data: [
        {
          productId: "clx8f6y5z0002j4xr8i9o0p1m",
          url: "https://ejemplo.com/camiseta1.jpg",
        },
        {
          productId: "clx8f6y5z0002j4xr8i9o0p1m",
          url: "https://ejemplo.com/camiseta2.jpg",
        },
        {
          productId: "clx8f6y5z0003j4xr1a2s3d4f",
          url: "https://ejemplo.com/smartphone1.jpg",
        },
        {
          productId: "clx8f6y5z0003j4xr1a2s3d4f",
          url: "https://ejemplo.com/smartphone2.jpg",
        },
      ],
    });

    await tx.productVariant.createMany({
      data: [
        {
          productId: "clx8f6y5z0002j4xr8i9o0p1m",
          name: "Color",
          value: "#FFFFFF",
        },
        {
          productId: "clx8f6y5z0002j4xr8i9o0p1m",
          name: "Talla",
          value: "M",
        },
        {
          productId: "clx8f6y5z0003j4xr1a2s3d4f",
          name: "Color",
          value: "#000000",
        },
        {
          productId: "clx8f6y5z0003j4xr1a2s3d4f",
          name: "Color",
          value: "#FFFFFF",
        },
      ],
    });
  });
}

main();
