-- Fifth batch - Comparison Articles
INSERT INTO blogs (
  title,
  content,
  category,
  subcategory,
  author,
  image_url,
  slug,
  featured,
  featured_in_category,
  popular,
  meta_title,
  meta_description,
  meta_keywords,
  created_at
) VALUES
(
  'Best Gaming Laptops Under ₹1,50,000 (2024)',
  '<p>Finding the perfect balance of performance and value in gaming laptops. Our comprehensive guide to the best gaming laptops under ₹1,50,000.</p><h2>Top Picks</h2><p>Detailed reviews of each recommended laptop with pros and cons.</p><h2>Performance Comparisons</h2><p>Gaming benchmarks and thermal performance analysis.</p>',
  'GADGETS',
  'LAPTOPS',
  'Rahul Kumar',
  'https://fkthvcaehstlbkgztspt.supabase.co/storage/v1/object/public/blog-images/gaming-laptops-guide.webp',
  'best-gaming-laptops-under-150000-2024',
  false,
  true,
  true,
  'Best Gaming Laptops Under ₹1,50,000 (2024) | Technikaz',
  'Comprehensive guide to the best gaming laptops available under ₹1,50,000 in 2024.',
  'gaming laptops, budget gaming, laptop guide, RTX 4060',
  NOW() - INTERVAL '6 days'
);