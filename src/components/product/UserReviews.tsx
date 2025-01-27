import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/types/product";

interface UserReviewsProps {
  product: Product;
}

export function UserReviews({ product }: UserReviewsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Add user reviews content */}
      </CardContent>
    </Card>
  );
}