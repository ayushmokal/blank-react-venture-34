import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ProductReviewProps {
  productId: string;
}

interface ExpertReview {
  id: string;
  product_id: string;
  rating: number;
  date: string;
  author: string;
  detailed_review?: string;
  summary: string;
  pros: string[];
  cons: string[];
  verdict: string;
}

export function ProductReview({ productId }: ProductReviewProps) {
  const { data: reviews, isLoading } = useQuery({
    queryKey: ['expert-review', productId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('expert_reviews')
        .select('*')
        .eq('product_id', productId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching expert reviews:', error);
        return [];
      }

      return data as ExpertReview[];
    },
  });

  if (isLoading) {
    return <div>Loading expert review...</div>;
  }

  if (!reviews?.length) {
    return (
      <div className="p-6 bg-gray-50 rounded-lg">
        <p className="text-gray-600">No expert review available for this product yet.</p>
      </div>
    );
  }

  // Display the most recent review
  const latestReview = reviews[0];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-8 text-left">
        <span className="text-sm text-gray-500">by {latestReview.author}</span>
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-primary">{latestReview.rating}</span>
          <span className="text-gray-500 ml-1">/10</span>
        </div>
      </div>
      <p className="text-gray-700 text-left">{latestReview.summary}</p>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold text-green-600 mb-4 text-left">PROS</h4>
          <ul className="space-y-2">
            {latestReview.pros.map((pro, index) => (
              <li key={index} className="flex items-center gap-2 text-left">
                <span className="text-green-600">+</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-red-600 mb-4 text-left">CONS</h4>
          <ul className="space-y-2">
            {latestReview.cons.map((con, index) => (
              <li key={index} className="flex items-center gap-2 text-left">
                <span className="text-red-600">-</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t pt-4">
        <h4 className="font-semibold mb-2 text-left">VERDICT</h4>
        <p className="text-gray-700 text-left">{latestReview.verdict}</p>
      </div>

      {latestReview.detailed_review && (
        <Accordion type="single" collapsible className="mt-6">
          <AccordionItem value="detailed-review" className="border-none">
            <AccordionTrigger className="text-left font-semibold">
              Read Full Review
            </AccordionTrigger>
            <AccordionContent>
              <div 
                className="prose max-w-none mt-4 text-left"
                dangerouslySetInnerHTML={{ __html: latestReview.detailed_review }}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
      
      {reviews.length > 1 && (
        <div className="border-t pt-4">
          <p className="text-sm text-gray-500 text-left">
            {reviews.length - 1} more expert {reviews.length - 1 === 1 ? 'review' : 'reviews'} available
          </p>
        </div>
      )}
    </div>
  );
}