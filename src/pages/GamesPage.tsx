import { useState } from "react";
import { CategoryPageContent } from "@/components/category/CategoryPageContent";
import { CategoryHeader } from "@/components/category/CategoryHeader";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

export function GamesPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("ALL");

  const handleSubcategoryChange = (newSubcategory: string) => {
    setSelectedSubcategory(newSubcategory);
  };

  const { data: blogs, isLoading } = useQuery({
    queryKey: ['blogs', 'games', selectedSubcategory],
    queryFn: async () => {
      let query = supabase
        .from('blogs')
        .select('*')
        .eq('category', 'games')
        .order('created_at', { ascending: false });

      if (selectedSubcategory !== "ALL") {
        query = query.eq('subcategory', selectedSubcategory);
      }

      const { data } = await query;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-[200px] w-full mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-[300px]" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <CategoryHeader 
        title="Gaming" 
        description="Latest gaming news, reviews, and guides" 
      />
      <CategoryPageContent
        blogs={blogs || []}
        onSubcategoryChange={handleSubcategoryChange}
        selectedSubcategory={selectedSubcategory}
        subcategories={["ALL", "News", "Reviews", "Guides"]}
      />
    </div>
  );
}