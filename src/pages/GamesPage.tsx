import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function GamesPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("ALL");

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
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Gaming News & Reviews</h1>
        <div className="flex gap-4 mb-8">
          {["ALL", "News", "Reviews", "Guides"].map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubcategory(sub)}
              className={`px-4 py-2 rounded-lg ${
                selectedSubcategory === sub
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs?.map((blog) => (
            <div key={blog.id} className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600">{blog.content.substring(0, 150)}...</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}