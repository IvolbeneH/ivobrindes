"use client";

import {
  ArrowUpRight,
  Instagram,
  Layers,
  Menu,
  MessageCircleCheck,
  MessageCircleMore,
  UserRound,
  Van,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header
      className="flex h-20 w-full items-center justify-between px-4 shadow-lg backdrop-blur-md md:px-6"
      id="contato"
    >
      <Link href="/" className="group">
        <Image
          src="/ivobrindes.png"
          alt="Logo"
          width={110}
          height={110}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="hidden md:block">
        <SearchInput />
      </div>

      <div className="hidden items-center gap-10 lg:flex">
        <a href="#produtos" className="hover:text-zinc-700">
          Produtos
        </a>
        <a href="#comprar" className="hover:text-zinc-700">
          Como comprar
        </a>
        <a href="#sobrenos" className="hover:text-zinc-700">
          Sobre nós
        </a>
        <a href="#footer" className="hover:text-zinc-700">
          Contato
        </a>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 sm:flex">
          <SocialIcon
            href="https://www.instagram.com/ivobrindess?igsh=Z3UyMnVhbHV0cGt4"
            icon="/instagram.svg"
          />
          <SocialIcon href="https://wa.me/5586995486524" icon="/whatsapp.svg" />
        </div>

        <a
          href="catalogo.pdf"
          download
          className="group relative hidden items-center justify-center rounded-xl p-2 transition-all duration-300 hover:bg-zinc-100/10 sm:flex"
        >
          <Image
            src="/download.svg"
            alt="catalogo"
            width={32}
            height={32}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <ArrowUpRight className="absolute -top-1 -right-1 h-4 w-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:rotate-12 group-hover:opacity-100" />
        </a>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="rounded-xl p-2 hover:bg-zinc-100">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="flex w-[280px] flex-col px-4">
              <SheetHeader className="mt-1 text-lg">Menu</SheetHeader>
              <div className="mt-6 flex flex-col gap-3 text-base">
                <a
                  href="#produtos"
                  className="flex items-center gap-3 rounded-xl bg-zinc-100 px-5 py-3 font-medium transition hover:bg-zinc-200"
                >
                  Produtos
                  <Layers className="h-5 w-5" />
                </a>
                <a
                  href="#produtos"
                  className="flex items-center gap-3 rounded-xl bg-zinc-100 px-5 py-3 font-medium transition hover:bg-zinc-200"
                >
                  Como comprar
                  <Van className="h-6 w-6" />
                </a>
                <a
                  href="#produtos"
                  className="flex items-center gap-3 rounded-xl bg-zinc-100 px-5 py-3 font-medium transition hover:bg-zinc-200"
                >
                  Sobre-nós
                  <UserRound className="h-5 w-5" />
                </a>
                <a
                  href="#produtos"
                  className="flex items-center gap-3 rounded-xl bg-zinc-100 px-5 py-3 font-medium transition hover:bg-zinc-200"
                >
                  Contato
                  <MessageCircleMore className="h-5 w-5" />
                </a>

                <div className="mt-3 flex flex-col">
                  <a
                    href="catalogo.pdf"
                    download
                    className="mt-4 inline-flex items-center justify-center rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-white"
                  >
                    Baixar catálogo
                  </a>
                  <a
                    href="https://www.instagram.com/ivobrindess/"
                    download
                    target="_blank"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-pink-500 bg-transparent px-4 py-2 text-sm font-semibold text-zinc-700"
                  >
                    Ver Instagram
                    <Instagram className="text-pink-400" />
                  </a>
                  <a
                    href="https://wa.link/s1cjzl"
                    download
                    target="_blank"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-green-500 bg-transparent px-4 py-2 text-sm font-semibold text-zinc-700"
                  >
                    Ver Whatsapp
                    <MessageCircleCheck className="text-green-400" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group relative flex items-center justify-center rounded-xl p-2 transition-all duration-300 hover:bg-zinc-100/10"
    >
      <Image
        src={icon}
        alt="social"
        width={28}
        height={28}
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <ArrowUpRight className="absolute -top-1 -right-1 h-3 w-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:rotate-12 group-hover:opacity-100" />
    </Link>
  );
}
