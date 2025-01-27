import { useState } from "react";
import { CategoryPageContent } from "@/components/category/CategoryPageContent";
import { PageHeader } from "@/components/category/PageHeader";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type TechSubcategory = "ALL" | "News" | "Reviews" | "Guides";

export function TechPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState<TechSubcategory>("ALL");

  const handleSubcategoryChange = (newSubcategory: string) => {
    setSelectedSubcategory(newSubcategory as TechSubcategory);
  };

  const { data: blogs = [] } = useQuery({
    queryKey: ['blogs', 'tech', selectedSubcategory],
    queryFn: async () => {
      let query = supabase
        .from('blogs')
        .select('*')
        .eq('category', 'tech')
        .order('created_at', { ascending: false });

      if (selectedSubcategory !== "ALL") {
        query = query.eq('subcategory', selectedSubcategory.toLowerCase());
      }

      const { data } = await query;
      return data || [];
    },
  });

  return (
    <div>
      <PageHeader 
        title="Tech" 
        description="Latest technology news, reviews, and guides" 
      />
      <CategoryPageContent
        blogs={blogs}
        onSubcategoryChange={handleSubcategoryChange}
        selectedSubcategory={selectedSubcategory}
        subcategories={["ALL", "News", "Reviews", "Guides"]}
      />
    </div>
  );
}