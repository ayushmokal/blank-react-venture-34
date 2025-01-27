-- Fourth batch - More Laptop Reviews
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
  'ROG Zephyrus G14 (2024) Review: AMD''s Mobile Gaming Champion',
  '<p>ASUS refreshes their popular gaming laptop with AMD''s latest hardware. The result is a powerful yet portable gaming machine.</p><h2>Design Updates</h2><p>Refined chassis with improved cooling and the signature AniMe Matrix display.</p><h2>Gaming Performance</h2><p>The combination of Ryzen 9 and RTX 4070 delivers exceptional gaming performance in a compact form factor.</p>',
  'GADGETS',
  'LAPTOPS',
  'Alex Chen',
  'https://fkthvcaehstlbkgztspt.supabase.co/storage/v1/object/public/blog-images/rog-g14-review.webp',
  'rog-zephyrus-g14-2024-review',
  false,
  true,
  true,
  'ROG Zephyrus G14 (2024) Review: AMD''s Mobile Gaming Champion | Technikaz',
  'Detailed review of the 2024 ROG Zephyrus G14, featuring AMD''s latest mobile processors and NVIDIA graphics.',
  'ROG Zephyrus G14, gaming laptop, AMD Ryzen, RTX 4070',
  NOW() - INTERVAL '4 days'
);