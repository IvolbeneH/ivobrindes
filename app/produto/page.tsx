"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

const WHATSAPP_NUMBER = "5586995486524";

const SIZES = ["P", "M", "G", "GG"] as const;

type Size = (typeof SIZES)[number];

function ProdutoPageContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") ?? "";
  const description = searchParams.get("description") ?? "";
  const img0 = searchParams.get("img0") ?? "";

  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState<Size | "">("");
  const [personalizado, setPersonalizado] = useState<"sim" | "nao">("sim");
  const [error, setError] = useState<string>("");

  function openWhatsApp() {
    setError("");

    if (!title) {
      setError("Não foi possível carregar as informações do produto.");
      return;
    }
    if (!size) {
      setError("Selecione um tamanho.");
      return;
    }
    const safeQty = Number.isFinite(quantity) && quantity > 0 ? quantity : 1;

    const message = `Olá! Quero orçamento do produto: ${title}. Quantidade: ${safeQty}. Tamanho: ${size}. Personalizado: ${
      personalizado === "sim" ? "sim" : "não"
    }.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="w-full bg-white pt-16 pb-20 text-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-800">
            {title || "Produto"}
          </h1>
          {description ? (
            <p className="mt-2 max-w-2xl text-zinc-600">{description}</p>
          ) : null}
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            {img0 ? (
              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <Image
                  src={img0}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="flex min-h-[240px] items-center justify-center rounded-xl text-sm text-zinc-400">
                Sem imagem disponível
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="text-sm font-semibold text-zinc-700">
              Monte seu pedido
            </div>

            <div className="mt-5 space-y-4">
              <div className="space-y-2">
                <label htmlFor="quantidade" className="text-sm text-zinc-600">
                  Quantidade
                </label>
                <input
                  id="quantidade"
                  type="number"
                  min={1}
                  step={1}
                  value={quantity}
                  onChange={(e) => {
                    const raw = Number(e.target.value);
                    setQuantity(Number.isFinite(raw) && raw > 0 ? raw : 1);
                  }}
                  className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-amber-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="tamanho" className="text-sm text-zinc-600">
                  Tamanho
                </label>
                <select
                  id="tamanho"
                  value={size}
                  onChange={(e) => setSize(e.target.value as Size | "")}
                  className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-amber-400"
                >
                  <option value="">Selecione...</option>
                  {SIZES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-zinc-600">
                  Produto personalizado?
                </div>
                <div className="flex flex-wrap gap-4">
                  <label className="inline-flex items-center gap-2 text-sm text-zinc-800">
                    <input
                      type="radio"
                      name="personalizado"
                      value="sim"
                      checked={personalizado === "sim"}
                      onChange={() => setPersonalizado("sim")}
                    />
                    Sim
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm text-zinc-800">
                    <input
                      type="radio"
                      name="personalizado"
                      value="nao"
                      checked={personalizado === "nao"}
                      onChange={() => setPersonalizado("nao")}
                    />
                    Não
                  </label>
                </div>
              </div>

              <button
                type="button"
                onClick={openWhatsApp}
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-amber-400 px-6 text-sm font-semibold text-white transition-colors hover:bg-amber-500"
              >
                Fazer orçamento
              </button>

              {error ? (
                <div className="text-sm text-red-600" role="alert">
                  {error}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ProdutoPage() {
  return (
    <Suspense
      fallback={
        <main className="w-full bg-white pt-16 pb-20 text-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
            <div className="text-sm text-zinc-600">Carregando...</div>
          </div>
        </main>
      }
    >
      <ProdutoPageContent />
    </Suspense>
  );
}
