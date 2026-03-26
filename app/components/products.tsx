import { Product } from "../data/product";
import { categories } from "../data/products";

export function Products() {
  return (
    <main className="mt-14 mb-12" id="produtos">
      <div className="mx-auto w-full px-4 md:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="w-48 text-5xl font-bold text-zinc-700">
            Produtos
          </span>
          <span>Todas nossos diversificados produtos disponíveis abaixo.</span>
        </div>

        <div className="mt-14 flex flex-col gap-16">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col gap-4">
              <span className="text-3xl font-bold text-zinc-800">
                {category.name}
              </span>

              <div className="grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-5">
                {category.products.map((product, i) => (
                  <Product
                    key={i}
                    title={product.title}
                    description={product.description}
                    images={product.images}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
