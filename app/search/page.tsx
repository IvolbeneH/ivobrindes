"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { categories } from "../data/products";
import { Product } from "../data/product";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim() || "";

  const normalize = (str: string = "") =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const allProducts = categories.flatMap((cat) => cat.products);

  if (!query) {
    return <p className="p-8">Digite algo para buscar</p>;
  }

  const q = normalize(query);

  const filtered = allProducts.filter((product) => {
    const title = normalize(product.title);
    const desc = normalize(product.description);

    return title.includes(q) || desc.includes(q);
  });

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

export default function SearchPage() {
  return (
    <Suspense fallback={<p className="p-8">Carregando...</p>}>
      <SearchContent />
    </Suspense>
  );
}
