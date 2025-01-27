import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";

interface ProductImageDialogProps {
  product: Product;
  onClose: () => void;
  onSuccess: () => void;
  productType: 'mobile' | 'laptop';
}

export function ProductImageDialog({ product, onClose, onSuccess, productType }: ProductImageDialogProps) {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Update Images - {product.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Image upload form will be implemented here */}
          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button onClick={onSuccess}>Save Changes</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}