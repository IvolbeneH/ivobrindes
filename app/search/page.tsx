"use client";

import { useSearchParams } from "next/navigation";
import { categories } from "../data/products";
import { Product } from "../data/product";
export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const normalize = (str: string) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const allProducts = categories.flatMap((cat) => cat.products);

  const filtered = allProducts.filter(
    (product) =>
      normalize(product.title).includes(normalize(query)) ||
      normalize(product.description).includes(normalize(query)),
  );

  return (
    <main className="p-8">
      <h1 className="mb-6 text-2xl font-bold">Resultados para: "{query}"</h1>

      {filtered.length === 0 && <p>Nenhum produto encontrado</p>}

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {filtered.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            description={product.description}
            images={product.images}
          />
        ))}
      </div>
    </main>
  );
}
