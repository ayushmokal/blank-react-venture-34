-- Add first GADGETS blog post with simplified structure
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
  'OnePlus 12 Review: The Ultimate Value Flagship',
  '<p>OnePlus returns to form with their latest flagship killer. The OnePlus 12 brings significant improvements in camera capabilities, charging speeds, and overall performance.</p><h2>Design and Build</h2><p>Premium build quality with Gorilla Glass Victus 2 protection. The curved display might be polarizing for some users.</p><h2>Performance</h2><p>Snapdragon 8 Gen 3 delivers exceptional performance for gaming and multitasking. The new cooling system keeps thermals in check even under heavy loads.</p>',
  'TECH',
  'News',
  'James Wilson',
  'https://fkthvcaehstlbkgztspt.supabase.co/storage/v1/object/public/blog-images/oneplus12-review.webp',
  'oneplus-12-review-ultimate-value-flagship',
  true,
  true,
  true,
  'OnePlus 12 Review: The Ultimate Value Flagship | Technikaz',
  'Comprehensive review of the OnePlus 12, examining its performance, camera capabilities, and value proposition in the flagship smartphone market.',
  'OnePlus 12, smartphone review, Snapdragon 8 Gen 3, flagship killer',
  (NOW() - INTERVAL '2 days')::timestamptz
);