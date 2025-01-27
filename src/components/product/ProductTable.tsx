import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductImage } from "./ProductImage";
import { FileText } from "lucide-react";

interface Product {
  id: string;
  name: string;
  image_url?: string;
}

interface ProductTableProps {
  products: Product[];
  onView: (product: Product) => void;
  onAddReview: (product: Product) => void;
  onAddDetailedReview: (product: Product) => void;
  onDelete: (id: string) => void;
}

export function ProductTable({
  products,
  onView,
  onAddReview,
  onAddDetailedReview,
  onDelete,
}: ProductTableProps) {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="w-[400px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <div className="w-16 h-16">
                  <ProductImage 
                    imageUrl={product.image_url || "/placeholder.svg"} 
                    productName={product.name} 
                  />
                </div>
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onView(product)}
                    className="whitespace-nowrap"
                  >
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onAddReview(product)}
                    className="whitespace-nowrap"
                  >
                    <FileText className="h-4 w-4 mr-1" />
                    Add Review
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onAddDetailedReview(product)}
                    className="whitespace-nowrap"
                  >
                    <FileText className="h-4 w-4 mr-1" />
                    Add Detailed Review
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => onDelete(product.id)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}