"use client";

import {
  ArrowUpRight,
  Building2,
  Clock,
  CreditCard,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Produtos", href: "#produtos" },
  { label: "Como comprar", href: "#comprar" },
  { label: "Sobre nós", href: "#sobrenos" },
  { label: "Contato", href: "#contato" },
];

const suporteLinks = [
  { label: "Catálogo (PDF)", href: "catalogo.pdf", download: true as const },
  { label: "Whatsapp", href: "#" },
  { label: "Instagram", href: "#" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t border-zinc-800 bg-zinc-950 text-zinc-200"
      id="footer"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <Image
                src="/ivobranco.png"
                alt="Ivobrindes"
                width={150}
                height={150}
                quality={100}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Transformamos ideias em produtos únicos. Brindes personalizados
              para valorizar sua marca, aumentar sua visibilidade e causar uma
              ótima impressão em qualquer ocasião.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <FeatureBadge icon={<ShieldCheck className="h-4 w-4" />}>
                Compra segura
              </FeatureBadge>
              <FeatureBadge icon={<Truck className="h-4 w-4" />}>
                Entregas no prazo.
              </FeatureBadge>
              <FeatureBadge icon={<CreditCard className="h-4 w-4" />}>
                Pix & cartão
              </FeatureBadge>
            </div>
          </div>

          <div className="space-y-4">
            <SectionTitle>Atalhos</SectionTitle>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <SectionTitle>Atendimento</SectionTitle>

            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-zinc-300" />
                <div className="leading-relaxed">
                  <div className="text-zinc-300">Telefone / WhatsApp</div>
                  <Link
                    href="https://wa.me/5586995486524?text=Ola,%20quero%20mais%20informacoes%20sobre%20o%20produto."
                    target="_blank"
                    className="inline-flex items-center gap-1 hover:text-zinc-200"
                  >
                    (86) 99548-6524 <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-zinc-300" />
                <div className="leading-relaxed">
                  <div className="text-zinc-300">E-mail</div>
                  <a
                    href="mailto:contato@ivobrindes.com"
                    className="hover:text-zinc-200"
                  >
                    ivolbene@yahoo.com.br
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 text-zinc-300" />
                <div className="leading-relaxed">
                  <div className="text-zinc-300">Horário</div>
                  <div>Seg–Sex, 08:00–17:00</div>
                  <div>Sabádo, 08:00–12:00</div>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-zinc-300" />
                <div className="leading-relaxed">
                  <div className="text-zinc-300">Local</div>
                  <div>Teresina – PI</div>
                  <div>Rua Magalhães Filho, 630, Centro Norte.</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="space-y-2 pt-2">
              <SectionTitle>Suporte</SectionTitle>
              <ul className="space-y-2">
                {suporteLinks.map((item) => (
                  <li key={item.label}>
                    {"download" in item && item.download ? (
                      <a
                        href={item.href}
                        download
                        className="group inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-200"
                      >
                        {item.label}
                        <ArrowUpRight className="h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
                      </a>
                    ) : (
                      <FooterLink href={item.href}>{item.label}</FooterLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-zinc-800 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500">
            <span>© {year} Ivobrindes. Todos os direitos reservados.</span>
            <span className="hidden md:inline">•</span>
            <span className="inline-flex items-center gap-2">
              <Building2 className="h-4 w-4" /> Brindes personalizados
              corporativos
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
            <span className="mr-1 inline-flex items-center gap-2 text-zinc-500">
              <CreditCard className="h-4 w-4" /> Formas de pagamento:
            </span>
            <PayBadge>Pix</PayBadge>
            <PayBadge>Visa</PayBadge>
            <PayBadge>Mastercard</PayBadge>
            <PayBadge>Boleto</PayBadge>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-semibold tracking-tight text-zinc-100">
      {children}
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isHash = href.startsWith("#");

  const className =
    "group inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200";

  if (isHash) {
    return (
      <a href={href} className={className}>
        {children}
        <ArrowUpRight className="h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      <ArrowUpRight className="h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800"
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
    </Link>
  );
}

function FeatureBadge({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-300">
      <span className="text-zinc-200">{icon}</span>
      {children}
    </span>
  );
}

function PayBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-2 py-1 text-zinc-300">
      {children}
    </span>
  );
}
