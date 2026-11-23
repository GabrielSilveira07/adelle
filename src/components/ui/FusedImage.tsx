import Image from "next/image";

type Mask = "b" | "long" | "edge-b" | "lr-tb";
type Props = {
  src: string;
  alt: string;
  mask: Mask;
  sizes: string;
  className?: string;
  priority?: boolean;
  position?: string;
};

/* Foto sem moldura: preenche o contêiner e se dissolve no fundo pela máscara escolhida. */
export default function FusedImage({ src, alt, mask, sizes, className = "", priority, position = "50% 50%" }: Props) {
  return (
    <figure className={`bleed ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={85}
        className={`mask-${mask}`} style={{ objectPosition: position }} />
    </figure>
  );
}
