interface ProductImageProps {
  url?: string;
  productName: string;
}

export function ProductImage({ url, productName }: ProductImageProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg">
      <img
        src={url || '/placeholder.svg'}
        alt={productName}
        className="object-cover w-full h-full"
      />
    </div>
  );
}