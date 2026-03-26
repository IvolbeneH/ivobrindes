import { Product } from "../data/product";

export function CampanhaEleitoral() {
  const produtos = [
    {
      title: "Santinhos",
      description:
        "Material essencial para divulgação em massa. Impressão de alta qualidade com acabamento profissional.",
      images: ["/santinho1.png", "/santinho3.avif"],
    },
    {
      title: "Cartazes",
      description:
        "Perfeitos para aumentar a visibilidade da campanha em pontos estratégicos.",
      images: ["/cartazz1.jpg", "/cartazz2.jpg"],
    },
    {
      title: "Bottons",
      description:
        "Brindes populares e de alto impacto para engajamento do público.",
      images: ["/botton2.png", "/botton3.png", "/botton1.jpg"],
    },
  ];

  return (
    <section className="w-full bg-zinc-50 text-zinc-950">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:py-16 md:px-8 md:py-20 lg:py-24 xl:max-w-[90rem] xl:px-16 2xl:max-w-[110rem] 2xl:px-24">
        <div className="mb-10 max-w-2xl space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-fuchsia-50 px-4 py-1 text-[11px] font-semibold tracking-[0.2em] text-fuchsia-700 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            Campanhas eleitorais
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Trabalhamos também com campanhas eleitorais!
          </h2>

          <p className="text-sm text-zinc-700 sm:text-base">
            Produzimos materiais personalizados para campanhas políticas com
            qualidade profissional, rapidez e excelente custo-benefício.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {produtos.map((item) => (
            <Product
              key={item.title}
              title={item.title}
              description={item.description}
              images={item.images}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-amber-100 bg-amber-50 p-6 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-lg font-semibold text-amber-800">
              Precisa de orçamento rápido?
            </h3>
            <p className="text-sm text-amber-900/80">
              Fale com a gente e monte sua campanha com agilidade.
            </p>
          </div>

          <a
            href="https://wa.link/byfros"
            target="_blank"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-amber-400 px-6 text-sm font-semibold text-white transition-colors hover:bg-amber-500"
          >
            Pedir orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
