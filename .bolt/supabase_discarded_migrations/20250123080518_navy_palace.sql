/*
  # Add GADGETS blog post
  
  1. New Content
    - Adds a new blog post in the GADGETS category
    - Sets proper category and subcategory
    - Includes meta information and featured status
*/

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
  'iPhone 15 Pro Max vs Samsung S24 Ultra: The Ultimate Comparison',
  '<p>A comprehensive comparison between Apple''s and Samsung''s latest flagship devices.</p><h2>Design and Build Quality</h2><p>Both phones feature premium materials with the iPhone sporting a titanium frame while the S24 Ultra continues with the tried and tested aluminum construction.</p><h2>Camera Systems</h2><p>The S24 Ultra brings significant improvements to its already impressive camera system, while the iPhone 15 Pro Max refines its photography capabilities further.</p>',
  'GADGETS',
  'MOBILE',
  'Tech Team',
  'https://fkthvcaehstlbkgztspt.supabase.co/storage/v1/object/public/blog-images/iphone-vs-samsung.webp',
  'iphone-15-pro-max-vs-samsung-s24-ultra-comparison',
  true,
  true,
  true,
  'iPhone 15 Pro Max vs Samsung S24 Ultra Comparison | Technikaz',
  'Detailed comparison between iPhone 15 Pro Max and Samsung S24 Ultra, covering design, cameras, performance, and more.',
  'iPhone 15 Pro Max, Samsung S24 Ultra, flagship comparison, mobile phones, smartphone comparison',
  (NOW() - INTERVAL '2 days')::timestamptz
);