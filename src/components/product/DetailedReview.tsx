import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/types/product";

interface DetailedReviewProps {
  product: Product;
}

export function DetailedReview({ product }: DetailedReviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Detailed Review</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Add detailed review content */}
      </CardContent>
    </Card>
  );
}