// import prismadb from "./prisma";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const elements = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app.tsx",
      },
      {
        id: "3",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "20",
            isSelectable: true,
            name: "pages",
            children: [
              {
                id: "21",
                isSelectable: true,
                name: "interface.ts",
              },
            ],
          },
        ],
      },
      {
        id: "6",
        isSelectable: true,
        name: "ui",
        children: [
          {
            id: "7",
            isSelectable: true,
            name: "carousel.tsx",
          },
        ],
      },
    ],
  },
];

async function createElement(element, parentId = null) {
  const { id, isSelectable, name, children } = element;

  const createdElement = await prisma.element.create({
    data: {
      id,
      isSelectable,
      name,
      parentId,
    },
  });

  if (children && children.length > 0) {
    for (const child of children) {
      await createElement(child, createdElement.id);
    }
  }

  return createdElement;
}

async function main() {
  try {
    for (const element of elements) {
      await createElement(element);
    }
    console.log("Data uploaded successfully");
  } catch (error) {
    console.error("Error uploading data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
