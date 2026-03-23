export type ProductType = {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
};

export const products: ProductType[] = [
  {
    id: 1,
    name: "Product 1",
    description: "Description 1",
    category: "Category 1",
    image: "image1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description 2",
    category: "Category 2",
    image: "image2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description 3",
    category: "Category 3",
    image: "image3.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description 4",
    category: "Category 4",
    image: "image4.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    description: "Description 5",
    category: "Category 5",
    image: "image5.jpg",
  },
];
