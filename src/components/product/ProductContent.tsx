import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductSpecifications } from "./ProductSpecifications";
import { ExpertReview } from "./ExpertReview";
import { DetailedReview } from "./DetailedReview";
import { UserReviews } from "./UserReviews";
import { Button } from "@/components/ui/button";
import { Share2, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/types/product";

export function ProductContent({ product, type }: { product: Product; type: 'mobile' | 'laptop' }) {
  const [activeTab, setActiveTab] = useState("overview");
  const { toast } = useToast();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out the ${product.name}`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied",
        description: "Product link copied to clipboard",
      });
    }
  };

  const renderAnnouncement = () => {
    if ('announced' in product && product.announced) {
      return (
        <div className="announcement-section">
          <span className="text-muted-foreground">Announced:</span>
          <span className="font-medium">{product.announced}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>
            <p className="text-muted-foreground">by {product.brand}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="price-section">
            <span className="text-muted-foreground">Price:</span>
            <span className="font-medium">₹{product.price.toLocaleString()}</span>
          </div>
          {renderAnnouncement()}
        </div>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="expert-review">Expert Review</TabsTrigger>
          <TabsTrigger value="detailed-review">Detailed Review</TabsTrigger>
          <TabsTrigger value="user-reviews">User Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-6">
          <ProductSpecifications product={product} />
        </TabsContent>
        <TabsContent value="expert-review" className="mt-6">
          <ExpertReview productId={product.id!} />
        </TabsContent>
        <TabsContent value="detailed-review" className="mt-6">
          <DetailedReview productId={product.id!} />
        </TabsContent>
        <TabsContent value="user-reviews" className="mt-6">
          <UserReviews productId={product.id!} />
        </TabsContent>
      </Tabs>
    </div>
  );
}