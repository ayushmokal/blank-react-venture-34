import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UserReviewsProps {
  productId: string;
}

export function UserReviews({ productId }: UserReviewsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">User reviews coming soon...</p>
      </CardContent>
    </Card>
  );
}