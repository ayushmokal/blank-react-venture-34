import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ExpertReviewFormData } from "@/schemas/expertReviewSchemas";

export function useExpertReview() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const addExpertReview = async (productId: string, reviewData: ExpertReviewFormData) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('expert_reviews')
        .insert([{ product_id: productId, ...reviewData }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Expert review added successfully",
      });

      return data;
    } catch (error: any) {
      console.error("Error adding expert review:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to add expert review",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    addExpertReview,
    isLoading,
  };
}
