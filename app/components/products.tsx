import { Product } from "../types/product";

export function Products() {
  return (
    <main className="mt-14 mb-12" id="produtos">
      <div className="mx-auto w-full px-4 md:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="w-48 text-4xl font-bold text-zinc-700">
            Produtos
          </span>
          <span>Todas nossos diversificados produtos diponíveis abaixo.</span>
        </div>
        <div className="mt-14 flex flex-col gap-6">
          <span className="txt-3xl w-36 font-bold text-zinc-700">BRINDES</span>
          <div className="grid grid-cols-2 gap-4 gap-y-16 md:grid-cols-4">
            <Product
              title="Caneta de metal Personalizada."
              description="Canetas feita de Metal, personalizadas sob impressão laser."
              images={["/canetametal2.jpeg", "/canetametal.jpeg"]}
            />
            <Product
              title="Caneta Borrachinha Personalizada."
              description="Canetas de plastico com acabamento emborrachado, personalizadas sob impressão laser."
              images={["/canetaborracha.jpeg"]}
            />
            <Product
              title="Canetas de Porcelana Personalizada."
              description="Canetas de porcelana feita sob impressão no calor."
              images={[
                "/canecaporcelana1.webp",
                "/canecaporcelana2.webp",
                "/canecaporcelana3.webp",
              ]}
            />
            <Product
              title="Xicaras de Porcelana Personalizadas."
              description="Xicaras de Porcelana Personalizadas, feita sob impressão no calor."
              images={["/xicaras2.webp", "/xicaras1.webp", "/xicaras3.webp"]}
            />
            <Product
              title="Bonés Personalizados."
              description="Bonés Personalizados, feitos sob impressão no calor."
              images={["/bone1.webp", "/bone2.webp", "/bone3.webp"]}
            />
            <Product
              title="Mousepads Personalizados."
              description="Mousepads Personalizados, feitos sob impressão no calor."
              images={["/mousepad1.webp", "/mousepad2.webp", "/mousepad3.webp"]}
            />
          </div>
          <span className="w-48bg mt-12 text-3xl font-bold text-zinc-700">
            CHAVEIROS
          </span>
          <div className="grid grid-cols-2 gap-4 gap-y-16 md:grid-cols-4">
            <Product
              title="Chaveiros Pé de Galinha."
              description="Chaveiros Pé de Galinha, personalizadas sob impressão laser."
              images={["/chaveiro1.webp", "/chaveiro2.jpeg", "/chaveiro3.jpeg"]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
