import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductReview } from "./ProductReview";

interface ExpertReviewProps {
  productId: string;
}

export function ExpertReview({ productId }: ExpertReviewProps) {
  return (
    <div className="space-y-6">
      <ProductReview productId={productId} />
    </div>
  );
}