import { BlogFormData } from "@/types/blog";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface FeaturedArticlesGridProps {
  articles: BlogFormData[];
}

export function FeaturedArticlesGrid({ articles }: FeaturedArticlesGridProps) {
  if (!articles.length) return null;

  // Get exactly 6 articles (2 main featured + 4 regular)
  const mainFeaturedArticles = articles.slice(0, 2);
  const regularArticles = articles.slice(2, 10);

  return (
    <div className="space-y-4">
      {/* Top Featured Articles Section */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* First Article - Wide (65%) */}
        {mainFeaturedArticles[0] && (
          <div className="lg:w-2/3">
            <Link to={`/article/${mainFeaturedArticles[0].slug}`} className="group block">
              <div className="relative rounded-lg overflow-hidden">
                <AspectRatio ratio={21/9}>
                  <img
                    src={mainFeaturedArticles[0].image_url || '/placeholder.svg'}
                    alt={mainFeaturedArticles[0].title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                        {mainFeaturedArticles[0].title}
                      </h2>
                      {mainFeaturedArticles[0].meta_description && (
                        <p className="text-sm text-gray-200 line-clamp-2">
                          {mainFeaturedArticles[0].meta_description}
                        </p>
                      )}
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </Link>
          </div>
        )}

        {/* Second Article - Narrow (35%) */}
        {mainFeaturedArticles[1] && (
          <div className="lg:w-1/3 lg:max-w-[400px]">
            <Link to={`/article/${mainFeaturedArticles[1].slug}`} className="group block">
              <div className="relative rounded-lg overflow-hidden">
                <AspectRatio ratio={1}>
                  <img
                    src={mainFeaturedArticles[1].image_url || '/placeholder.svg'}
                    alt={mainFeaturedArticles[1].title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-lg md:text-xl font-bold text-white mb-2">
                        {mainFeaturedArticles[1].title}
                      </h2>
                      {mainFeaturedArticles[1].meta_description && (
                        <p className="text-sm text-gray-200 line-clamp-2">
                          {mainFeaturedArticles[1].meta_description}
                        </p>
                      )}
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </Link>
          </div>
        )}
      </div>

      {/* Regular Articles Grid */}
      {regularArticles.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {regularArticles.map((article) => (
            <Link 
              key={article.slug}
              to={`/article/${article.slug}`}
              className="group block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden">
                <AspectRatio ratio={16/9}>
                  <img
                    src={article.image_url || '/placeholder.svg'}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </AspectRatio>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                {article.meta_description && (
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {article.meta_description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}