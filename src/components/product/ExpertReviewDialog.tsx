import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";

interface ExpertReviewDialogProps {
  product: Product;
  onClose: () => void;
}

export function ExpertReviewDialog({ product, onClose }: ExpertReviewDialogProps) {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Expert Review - {product.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Expert review form will be implemented here */}
          <div className="flex justify-end">
            <Button onClick={onClose}>Close</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}