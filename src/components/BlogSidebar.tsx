import { useState } from "react";
import { Button } from "./ui/button";
import { useInfiniteQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ITEMS_PER_PAGE = 5;

interface BlogItem {
  id: string;
  title: string;
  image_url: string;
  created_at: string;
  slug: string;
}

export function BlogSidebar() {
  const [selectedCategory, setSelectedCategory] = useState("TECH");

  const { 
    data, 
    fetchNextPage, 
    hasNextPage, 
    isFetchingNextPage 
  } = useInfiniteQuery({
    queryKey: ['sidebar-items', selectedCategory],
    queryFn: async ({ pageParam = 0 }) => {
      console.log('Fetching sidebar items for:', selectedCategory, 'page:', pageParam);
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('category', selectedCategory)
        .order('created_at', { ascending: false })
        .range(pageParam * ITEMS_PER_PAGE, (pageParam + 1) * ITEMS_PER_PAGE - 1);
      
      if (error) {
        console.error('Error fetching sidebar items:', error);
        throw error;
      }
      
      return data || [];
    },
    getNextPageParam: (lastPage: BlogItem[], allPages: BlogItem[][]) => {
      return lastPage.length === ITEMS_PER_PAGE ? allPages.length : undefined;
    },
    initialPageParam: 0,
  });

  const mainCategories = ["TECH", "GAMES", "ENTERTAINMENT", "STOCKS"];

  const renderBlogItem = (item: BlogItem) => (
    <Link 
      to={`/article/${item.slug}`}
      key={item.id} 
      className="flex gap-4 hover:bg-gray-50 p-4 text-left"
    >
      <div className="w-32 flex-shrink-0">
        <AspectRatio ratio={16/9}>
          <img
            src={item.image_url || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-full object-cover rounded border"
          />
        </AspectRatio>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium line-clamp-2 text-base">
          {item.title}
        </h4>
        <p className="text-sm text-gray-500 mt-2">
          {new Date(item.created_at).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}
        </p>
      </div>
    </Link>
  );

  const renderAdvertisement = (key: number) => (
    <div key={`advertisement-${key}`} className="p-4 bg-gray-50">
      <AspectRatio ratio={16/9}>
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Advertisement</span>
        </div>
      </AspectRatio>
    </div>
  );

  return (
    <aside className="space-y-8">
      <div className="rounded-lg border bg-white">
        {/* Header */}
        <div className="bg-primary text-white p-3">
          <h2 className="text-xl font-bold">Upcomings</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap border-b">
          {mainCategories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className={`flex-1 rounded-none border-b-2 ${
                selectedCategory === category 
                ? "border-primary text-primary" 
                : "border-transparent"
              }`}
              onClick={() => {
                console.log('Switching to category:', category);
                setSelectedCategory(category);
              }}
            >
              {category.split(' ').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ')}
            </Button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-4">
          {data?.pages.map((page, pageIndex) => (
            <div key={pageIndex}>
              {page.slice(0, 5).map((item) => (
                <Link 
                  to={`/article/${item.slug}`}
                  key={item.id} 
                  className="flex gap-4 hover:bg-gray-50 p-4 text-left"
                >
                  <div className="w-32 flex-shrink-0">
                    <AspectRatio ratio={16/9}>
                      <img
                        src={item.image_url || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover rounded border"
                      />
                    </AspectRatio>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium line-clamp-2 text-base">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-2">
                      {new Date(item.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </Link>
              ))}
              
              {/* First Advertisement after 5 posts */}
              {page.length > 0 && renderAdvertisement(pageIndex * 2)}
              
              {/* Next 5 blog posts */}
              {page.slice(5).map((item) => (
                <Link 
                  to={`/article/${item.slug}`}
                  key={item.id} 
                  className="flex gap-4 hover:bg-gray-50 p-4 text-left"
                >
                  <div className="w-32 flex-shrink-0">
                    <AspectRatio ratio={16/9}>
                      <img
                        src={item.image_url || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover rounded border"
                      />
                    </AspectRatio>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium line-clamp-2 text-base">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-2">
                      {new Date(item.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ))}

          {/* Load More Button */}
          {hasNextPage && (
            <div className="p-4 text-center">
              <Button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                variant="outline"
              >
                {isFetchingNextPage ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}

          {/* Empty State */}
          {data?.pages[0]?.length === 0 && (
            <div className="p-4 text-center text-gray-500">
              No upcoming items found
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}