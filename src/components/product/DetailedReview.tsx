import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductReview } from "./ProductReview";

interface DetailedReviewProps {
  productId: string;
}

export function DetailedReview({ productId }: DetailedReviewProps) {
  return (
    <div className="space-y-6">
      <ProductReview productId={productId} />
    </div>
  );
}