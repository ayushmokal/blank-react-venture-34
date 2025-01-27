interface ProductImageProps {
  url?: string;
  productName: string;
  className?: string;
}

export function ProductImage({ url, productName, className }: ProductImageProps) {
  return (
    <div className={className}>
      <img
        src={url || '/placeholder.svg'}
        alt={productName}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
}