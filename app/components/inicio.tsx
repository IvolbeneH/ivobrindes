export function Inicio() {
  return (
    <section className="relative h-[50rem] w-full text-white">
      <div className="absolute inset-0">
        <img
          src="/bannerfundo.webp"
          alt="Máquina de produção DTF UV"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 md:px-8 xl:max-w-[90rem] xl:px-16 2xl:max-w-[110rem] 2xl:px-24">
        <div className="grid items-start gap-10 md:grid-cols-12 lg:gap-16 xl:gap-24">
          <div className="space-y-5 md:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold tracking-[0.2em] text-amber-300 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Brindes personalizados
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Brindes que valorizam sua marca e fazem sua empresa ser lembrada.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-zinc-200 sm:text-base md:max-w-2xl">
              Na Ivobrindes, você encontra brindes corporativos e personalizados
              para eventos, ações promocionais e presentes...
            </p>

            <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:items-center">
              <a
                href="#produtos"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-sky-600 px-6 text-sm font-semibold text-white hover:bg-sky-500 sm:w-auto"
              >
                Ver produtos
              </a>

              <a
                href="catalogo.pdf"
                download
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white hover:bg-white/20 sm:w-auto"
              >
                Baixar catálogo (PDF)
              </a>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur sm:p-6 md:col-span-5 md:p-7">
            <div className="text-sm font-semibold text-fuchsia-300">
              No catálogo você encontra:
            </div>

            <p className="text-sm leading-relaxed text-zinc-200 sm:text-base">
              Uma seleção dos nossos brindes, opções de personalização...
            </p>

            <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-sm text-zinc-200">
              Baixe o PDF, compare opções...
            </div>

            <div className="text-xs text-zinc-300">
              Dica: se preferir, chame no WhatsApp...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
