import Image from "next/image";

export function Banner() {
  return (
    <Image
      src="/bannerv1.png"
      alt="banner"
      width={1920}
      height={800}
      quality={100}
      priority
      className="hidden h-auto w-full object-cover sm:block"
    />
  );
}
