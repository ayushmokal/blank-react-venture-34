-- Add second GADGETS blog post with simplified structure
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
  'Xiaomi 14 Pro vs iPhone 15 Pro Max: Camera Showdown',
  '<p>A detailed comparison of two photography powerhouses. We pit the Xiaomi 14 Pro''s Leica-tuned camera system against Apple''s latest flagship.</p><h2>Main Camera Performance</h2><p>Both phones excel in different scenarios, with the iPhone showing better consistency while the Xiaomi offers more versatility.</p><h2>Night Photography</h2><p>Surprising results in low-light conditions where the Xiaomi 14 Pro shows significant improvements.</p>',
  'TECH',
  'News',
  'Sarah Miller',
  'https://fkthvcaehstlbkgztspt.supabase.co/storage/v1/object/public/blog-images/xiaomi14-vs-iphone15.webp',
  'xiaomi-14-pro-vs-iphone-15-pro-max-camera-comparison',
  false,
  true,
  true,
  'Xiaomi 14 Pro vs iPhone 15 Pro Max: Ultimate Camera Comparison | Technikaz',
  'In-depth camera comparison between the Xiaomi 14 Pro and iPhone 15 Pro Max, testing various shooting scenarios and features.',
  'Xiaomi 14 Pro, iPhone 15 Pro Max, camera comparison, mobile photography',
  (NOW() - INTERVAL '3 days')::timestamptz
);