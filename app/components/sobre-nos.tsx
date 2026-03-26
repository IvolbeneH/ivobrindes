import Image from "next/image";

export function SobreNos() {
  return (
    <section className="w-full bg-white text-zinc-950">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:py-16 md:px-8 md:py-20 lg:py-24 xl:max-w-[90rem] xl:px-16 2xl:max-w-[110rem] 2xl:px-24">
        <div className="grid items-center gap-10 md:grid-cols-12 lg:gap-16 xl:gap-24">
          <div className="space-y-5 md:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1 text-[11px] font-semibold tracking-[0.2em] text-sky-700 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Sobre nós
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Qualidade e compromisso em cada detalhe
            </h2>

            <p className="text-sm leading-relaxed text-zinc-700 sm:text-base">
              A Ivobrindes é especializada na produção de brindes personalizados
              e materiais para campanhas eleitorais. Trabalhamos com foco em
              qualidade, agilidade e atenção aos detalhes para garantir que sua
              marca ou campanha tenha o destaque que merece.
            </p>

            <p className="text-sm leading-relaxed text-zinc-700 sm:text-base">
              Desde o primeiro contato até a entrega final, nossa missão é
              oferecer uma experiência simples, rápida e eficiente, ajudando
              você a escolher os melhores produtos para cada necessidade.
            </p>
            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4">
                <div className="text-sm font-semibold text-sky-800">
                  Produção ágil
                </div>
                <div className="pt-1 text-sm text-sky-900/80">
                  Entregas rápidas para atender prazos apertados.
                </div>
              </div>

              <div className="rounded-2xl border border-fuchsia-100 bg-fuchsia-50/80 p-4">
                <div className="text-sm font-semibold text-fuchsia-800">
                  Alta qualidade
                </div>
                <div className="pt-1 text-sm text-fuchsia-900/80">
                  Impressão e acabamento com padrão profissional.
                </div>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-amber-50/80 p-4 sm:col-span-2">
                <div className="text-sm font-semibold text-amber-800">
                  Atendimento personalizado
                </div>
                <div className="pt-1 text-sm text-amber-900/80">
                  Ajudamos você a escolher a melhor solução para sua campanha ou
                  empresa.
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
              <Image
                src="/bannerivobrindes.png"
                alt="Sobre a empresa"
                className="h-full w-full object-cover"
                fill
              />
            </div>

            <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700 shadow-sm">
              Trabalhamos com empresas, eventos e campanhas políticas,
              entregando soluções completas em brindes e materiais
              personalizados.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
