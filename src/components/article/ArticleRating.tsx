import { useState } from "react";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ArticleRatingProps {
  blogId: string;
  currentRating: number;
  onRatingUpdate: (newRating: number) => void;
}

export function ArticleRating({ blogId, currentRating, onRatingUpdate }: ArticleRatingProps) {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleRating = async (rating: number) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      // First check if the ratings table exists by checking its schema
      const { data: tableExists } = await supabase
        .from('ratings')
        .select('id')
        .limit(1)
        .maybeSingle();

      // If table doesn't exist, create it
      if (tableExists === null) {
        await supabase.rpc('create_ratings_table');
      }

      // Proceed with rating submission
      const { error: submitError } = await supabase
        .from('ratings')
        .insert([{ blog_id: blogId, rating }]);

      if (submitError) {
        throw submitError;
      }

      // Update the UI
      onRatingUpdate(rating);
      
      toast({
        title: "Thank you for rating!",
        description: "Your rating has been submitted successfully.",
      });
    } catch (error: any) {
      console.error('Error submitting rating:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit rating. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <p className="text-sm text-gray-600 mb-2">Rate this article</p>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            disabled={isSubmitting}
            onClick={() => handleRating(rating)}
            onMouseEnter={() => setHoveredRating(rating)}
            onMouseLeave={() => setHoveredRating(0)}
            className="relative p-1 transition-colors hover:text-primary disabled:cursor-not-allowed"
          >
            <Star
              className={`h-6 w-6 ${
                rating <= (hoveredRating || currentRating)
                  ? "fill-primary text-primary"
                  : "fill-none text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
      {currentRating > 0 && (
        <p className="text-sm text-gray-600 mt-2">
          Average rating: {currentRating.toFixed(1)} / 5
        </p>
      )}
    </div>
  );
}