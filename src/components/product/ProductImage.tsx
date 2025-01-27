import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

interface ProductImageProps {
  imageUrl: string;
  productName: string;
  className?: string;
}

export function ProductImage({ imageUrl, productName, className }: ProductImageProps) {
  return (
    <AspectRatio ratio={1} className={cn("bg-muted", className)}>
      <Image
        src={imageUrl}
        alt={productName}
        fill
        className="object-cover rounded-md"
      />
    </AspectRatio>
  );
}