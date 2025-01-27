import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ProductImage({ src, alt, className, priority = false }: ProductImageProps) {
  return (
    <AspectRatio ratio={1} className={cn("bg-muted", className)}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="object-cover w-full h-full rounded-lg"
      />
    </AspectRatio>
  );
}