import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export type ProductType = {
  title: string;
  description: string;
  images: string[];
};

export function Product({ title, description, images = [] }: ProductType) {
  const hasMultipleImages = images.length > 1;
  const href = `/produto?title=${encodeURIComponent(
    title,
  )}&description=${encodeURIComponent(
    description,
  )}&img0=${encodeURIComponent(images[0] ?? "")}`;

  return (
    <Card className="w-full rounded-2xl border border-zinc-400">
      <CardContent className="flex h-full flex-col">
        <div className="relative aspect-square w-full">
          {hasMultipleImages ? (
            <Carousel className="h-full w-full">
              <CarouselContent>
                {images.map((img) => (
                  <CarouselItem key={img}>
                    <div className="relative aspect-square w-full">
                      <Image
                        fill
                        src={img}
                        alt={title}
                        className="rounded-2xl object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="absolute top-1/2 left-2 z-10 -translate-y-1/2 border-none" />
              <CarouselNext className="absolute top-1/2 right-2 z-10 -translate-y-1/2 border-none" />
            </Carousel>
          ) : (
            <Image
              fill
              className="rounded-2xl object-cover"
              src={images[0]}
              alt={title}
            />
          )}
        </div>

        <div className="flex flex-1 flex-col space-y-4 px-2 py-3">
          <h3 className="text-lg font-semibold">{title}</h3>

          <p className="text-sm text-gray-500">{description}</p>

          <Link
            href={href}
            className="mt-auto inline-flex h-10 items-center justify-center rounded-xl bg-amber-400 px-6 text-sm font-semibold text-white transition-colors hover:bg-amber-500"
          >
            Ver produto
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
