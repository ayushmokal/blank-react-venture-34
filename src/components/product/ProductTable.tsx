import { Product } from '@/types/product';
import { Table } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

export interface ProductTableProps {
  products: Product[];
  onView: (product: Product) => void;
  onAddReview: (product: Product) => void;
  onDelete: (id: string) => Promise<void>;
  onUpdateImages?: (product: Product) => void;
}

export function ProductTable({ products, onView, onAddReview, onDelete, onUpdateImages }: ProductTableProps) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.brand}</td>
            <td>{product.price}</td>
            <td>
              <Button onClick={() => onView(product)}>View</Button>
              <Button onClick={() => onAddReview(product)}>Add Review</Button>
              <Button onClick={() => onUpdateImages && onUpdateImages(product)}>Update Images</Button>
              <Button onClick={() => onDelete(product.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
