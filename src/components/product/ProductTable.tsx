import { Product } from "@/types/product";
import { ProductImage } from "./ProductImage";

interface ProductTableProps {
  products: Product[];
  onView: (product: Product) => void;
  onAddReview: (product: Product) => void;
  onDelete: (id: string) => void;
}

export function ProductTable({ products, onView, onAddReview, onDelete }: ProductTableProps) {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product.id} className="flex items-center gap-4 p-4 border rounded-lg">
          <ProductImage
            url={product.image_url}
            productName={product.name}
            className="w-24 h-24"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.brand}</p>
            <p className="text-sm text-gray-700">Price: ₹{product.price.toLocaleString()}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => onView(product)} className="btn btn-primary">View</button>
            <button onClick={() => onAddReview(product)} className="btn btn-secondary">Add Review</button>
            <button onClick={() => onDelete(product.id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
