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
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="flex w-full flex-col bg-yellow-300 shadow-lg backdrop-blur-md"
      id="contato"
    >
      <div className="flex h-20 w-full items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="group flex-shrink-0">
          <Image
            src="/ivobrindes.png"
            alt="Logo"
            width={150}
            height={150}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="hidden flex-1 justify-center md:flex">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl">
            <SearchInput />
          </div>
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          <a href="#produtos" className="transition hover:text-zinc-700">
            Produtos
          </a>
          <a href="#comprar" className="transition hover:text-zinc-700">
            Como comprar
          </a>
          <a href="#sobrenos" className="transition hover:text-zinc-700">
            Sobre nós
          </a>
          <a href="#footer" className="transition hover:text-zinc-700">
            Contato
          </a>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 lg:hidden">
            <SocialIcon
              href="https://www.instagram.com/ivobrindess"
              icon="/instagram.svg"
            />
            <SocialIcon
              href="https://wa.me/5586995486524"
              icon="/whatsapp.svg"
            />
            <SocialIcon href="catalogo.pdf" icon="/download.svg" />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="rounded-xl p-2 hover:bg-zinc-100">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="flex w-[280px] flex-col px-4"
              >
                <SheetHeader className="mt-1 text-lg">Menu</SheetHeader>

                <div className="mt-4">
                  <SearchInput onSearch={() => setOpen(false)} />
                </div>

                <div className="mt-6 flex flex-col gap-3 text-base">
                  <a className="menu-item" href="#produtos">
                    Produtos
                  </a>
                  <a className="menu-item" href="#comprar">
                    Como comprar
                  </a>
                  <a className="menu-item" href="#sobrenos">
                    Sobre nós
                  </a>
                  <a className="menu-item" href="#footer">
                    Contato
                  </a>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="catalogo.pdf"
                    download
                    className="rounded-xl bg-amber-400 px-4 py-2 text-center font-semibold text-white"
                  >
                    Baixar catálogo
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <SocialIcon
              href="https://www.instagram.com/ivobrindess"
              icon="/instagram.svg"
            />
            <SocialIcon
              href="https://wa.me/5586995486524"
              icon="/whatsapp.svg"
            />
            <SocialIcon href="catalogo.pdf" icon="/download.svg" />
          </div>
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
        width={35}
        height={35}
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <ArrowUpRight className="absolute -top-1 -right-1 h-3 w-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:rotate-12 group-hover:opacity-100" />
    </Link>
  );
}
