-- Third batch - Laptop Reviews
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
  'MacBook Pro M3 Max Long-Term Review: 3 Months Later',
  '<p>After three months of intensive use, here''s our updated review of Apple''s most powerful laptop. From professional workflows to gaming performance, we cover it all.</p><h2>Performance Stability</h2><p>The M3 Max maintains its impressive performance even under sustained loads. No thermal throttling observed in our extended testing.</p><h2>Battery Life</h2><p>Still leading the industry in power efficiency while delivering desktop-class performance.</p>',
  'GADGETS',
  'LAPTOPS',
  'Thomas Lee',
  'https://fkthvcaehstlbkgztspt.supabase.co/storage/v1/object/public/blog-images/macbook-m3-review.webp',
  'macbook-pro-m3-max-long-term-review',
  true,
  true,
  true,
  'MacBook Pro M3 Max Long-Term Review: 3 Months Later | Technikaz',
  'Comprehensive long-term review of the MacBook Pro M3 Max after three months of real-world usage.',
  'MacBook Pro, M3 Max, Apple Silicon, laptop review',
  NOW() - INTERVAL '1 day'
);