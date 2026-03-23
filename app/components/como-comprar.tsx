export function ComoComprar() {
  return (
    <section
      id="comprar"
      className="w-full bg-white py-16 text-zinc-950 md:py-24"
    >
      <div className="mx-auto w-full max-w-460 px-4 md:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-zinc-700 md:text-4xl">
              Como comprar
            </h2>
            <p className="max-w-2xl text-zinc-600">
              Em poucos passos você escolhe o produto, define as opções e envia
              o pedido para a gente finalizar com você no WhatsApp.
            </p>
          </div>

          <ol className="grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <div className="text-sm font-semibold text-zinc-800">
                1. Ver produto
              </div>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                Clique em <strong>Ver produto</strong> para abrir a página do
                item.
              </p>
            </li>

            <li className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <div className="text-sm font-semibold text-zinc-800">
                2. Escolher opções
              </div>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                Selecione <strong>quantidade</strong>,{" "}
                <strong>tamanho (se o produto tiver)</strong> e se o produto
                será <strong>personalizado</strong> ou não.
              </p>
            </li>

            <li className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <div className="text-sm font-semibold text-zinc-800">
                3. Fazer orçamento
              </div>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                Ao clicar em <strong>Fazer orçamento</strong>, enviamos suas
                escolhas para o atendimento.
              </p>
            </li>

            <li className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <div className="text-sm font-semibold text-zinc-800">
                4. Falar com um vendedor
              </div>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                Você será redirecionado para o <strong>WhatsApp</strong> para
                falar com um vendedor e finalizar seu pedido.
              </p>
            </li>
          </ol>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm text-amber-900">
              Dica: se preferir, você pode enviar o orçamento com mais agilidade
              direto pelo WhatsApp, sem necessariamente escolher o produto por
              aqui.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
