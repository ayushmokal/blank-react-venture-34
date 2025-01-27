import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductImageProps {
  url: string;
  alt: string;
  className?: string;
}

export function ProductImage({ url, alt, className }: ProductImageProps) {
  return (
    <AspectRatio ratio={1} className={className}>
      <img 
        src={url || "/placeholder.svg"} 
        alt={alt}
        className="object-contain w-full h-full"
      />
    </AspectRatio>
  );
}