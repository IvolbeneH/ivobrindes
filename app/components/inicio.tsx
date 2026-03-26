export function Inicio() {
  return (
    <section className="w-full bg-white text-zinc-950">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:py-16 md:px-8 md:py-20 lg:py-24 xl:max-w-[90rem] xl:px-16 2xl:max-w-[110rem] 2xl:px-24">
        <div className="grid items-start gap-10 md:grid-cols-12 lg:gap-16 xl:gap-24">
          <div className="space-y-5 md:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1 text-[11px] font-semibold tracking-[0.2em] text-amber-700 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Brindes personalizados
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl md:text-5xl lg:text-6xl">
              Brindes que valorizam sua marca e fazem sua empresa ser lembrada.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-zinc-700 sm:text-base md:max-w-2xl">
              Na Ivobrindes, você encontra brindes corporativos e personalizados
              para eventos, ações promocionais e presentes. Do orçamento à
              personalização, a gente te ajuda a escolher o item ideal e
              garantir um resultado com acabamento premium.
            </p>

            <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:items-center">
              <a
                href="#produtos"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-sky-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-sky-500 sm:w-auto"
              >
                Ver produtos
              </a>

              <a
                href="catalogo.pdf"
                download
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-fuchsia-200 bg-fuchsia-50 px-6 text-sm font-semibold text-fuchsia-700 transition-colors hover:border-fuchsia-300 hover:bg-fuchsia-100 sm:w-auto"
              >
                Baixar catálogo (PDF)
              </a>
            </div>
            <div className="grid gap-3 pt-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4">
                <div className="text-sm font-semibold text-sky-800">
                  Personalização
                </div>
                <div className="pt-1 text-sm leading-relaxed text-sky-900/80">
                  Sua marca com presença: gravação, impressão e acabamento.
                </div>
              </div>

              <div className="rounded-2xl border border-fuchsia-100 bg-fuchsia-50/80 p-4">
                <div className="text-sm font-semibold text-fuchsia-800">
                  Para empresas
                </div>
                <div className="pt-1 text-sm leading-relaxed text-fuchsia-900/80">
                  Ideal para eventos, ações internas e campanhas promocionais.
                </div>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-amber-50/80 p-4 sm:col-span-2 lg:col-span-1">
                <div className="text-sm font-semibold text-amber-800">
                  Orçamento rápido
                </div>
                <div className="pt-1 text-sm leading-relaxed text-amber-900/80">
                  Escolha o produto e peça uma proposta com agilidade.
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-2xl border border-fuchsia-100 bg-gradient-to-b from-white to-fuchsia-50 p-5 sm:p-6 md:col-span-5 md:p-7">
            <div className="text-sm font-semibold tracking-tight text-fuchsia-800">
              No catálogo você encontra:
            </div>

            <p className="text-sm leading-relaxed text-zinc-700 sm:text-base">
              Uma seleção dos nossos brindes, opções de personalização, modelos
              e medidas, além de preços/valores de referência para você montar
              sua escolha e pedir orçamento com mais agilidade.
            </p>

            <div className="rounded-xl border border-fuchsia-100 bg-white p-4 text-sm text-zinc-700">
              Baixe o PDF, compare opções, já separe os itens que você quer e
              envie pra gente para acelerar o atendimento.
            </div>

            <div className="text-xs text-zinc-600">
              Dica: se preferir, chame no WhatsApp e a gente te orienta na
              escolha.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
