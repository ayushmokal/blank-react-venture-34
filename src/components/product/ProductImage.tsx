import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface ProductImageProps {
  url?: string;
  productName: string;
  className?: string;
}

export function ProductImage({ url, productName, className = "" }: ProductImageProps) {
  return (
    <AspectRatio ratio={1} className={`overflow-hidden rounded-lg ${className}`}>
      <img
        src={url || "/placeholder.svg"}
        alt={productName}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </AspectRatio>
  );
}