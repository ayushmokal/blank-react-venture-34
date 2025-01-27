DO $$ 
BEGIN
  -- First batch: Mobile Reviews
  INSERT INTO blogs (
    title, content, category, subcategory, author, image_url, slug,
    featured, featured_in_category, popular, meta_title, meta_description,
    meta_keywords, created_at
  ) VALUES (
    'OnePlus 12 Review: The Ultimate Value Flagship',
    '<p>OnePlus returns to form with their latest flagship killer. The OnePlus 12 brings significant improvements in camera capabilities, charging speeds, and overall performance.</p><h2>Design and Build</h2><p>Premium build quality with Gorilla Glass Victus 2 protection. The curved display might be polarizing for some users.</p><h2>Performance</h2><p>Snapdragon 8 Gen 3 delivers exceptional performance for gaming and multitasking. The new cooling system keeps thermals in check even under heavy loads.</p>',
    'GADGETS', 'MOBILE', 'James Wilson',
    'https://fkthvcaehstlbkgztspt.supabase.co/storage/v1/object/public/blog-images/oneplus12-review.webp',
    'oneplus-12-review-ultimate-value-flagship',
    true, true, true,
    'OnePlus 12 Review: The Ultimate Value Flagship | Technikaz',
    'Comprehensive review of the OnePlus 12, examining its performance, camera capabilities, and value proposition in the flagship smartphone market.',
    'OnePlus 12, smartphone review, Snapdragon 8 Gen 3, flagship killer',
    NOW() - INTERVAL '2 days'
  );

  -- Second batch: Camera Comparison
  INSERT INTO blogs (
    title, content, category, subcategory, author, image_url, slug,
    featured, featured_in_category, popular, meta_title, meta_description,
    meta_keywords, created_at
  ) VALUES (
    'Xiaomi 14 Pro vs iPhone 15 Pro Max: Camera Showdown',
    '<p>A detailed comparison of two photography powerhouses. We pit the Xiaomi 14 Pro''s Leica-tuned camera system against Apple''s latest flagship.</p><h2>Main Camera Performance</h2><p>Both phones excel in different scenarios, with the iPhone showing better consistency while the Xiaomi offers more versatility.</p><h2>Night Photography</h2><p>Surprising results in low-light conditions where the Xiaomi 14 Pro shows significant improvements.</p>',
    'GADGETS', 'MOBILE', 'Sarah Miller',
    'https://fkthvcaehstlbkgztspt.supabase.co/storage/v1/object/public/blog-images/xiaomi14-vs-iphone15.webp',
    'xiaomi-14-pro-vs-iphone-15-pro-max-camera-comparison',
    false, true, true,
    'Xiaomi 14 Pro vs iPhone 15 Pro Max: Ultimate Camera Comparison | Technikaz',
    'In-depth camera comparison between the Xiaomi 14 Pro and iPhone 15 Pro Max, testing various shooting scenarios and features.',
    'Xiaomi 14 Pro, iPhone 15 Pro Max, camera comparison, mobile photography',
    NOW() - INTERVAL '3 days'
  );

  -- Third batch: MacBook Review
  INSERT INTO blogs (
    title, content, category, subcategory, author, image_url, slug,
    featured, featured_in_category, popular, meta_title, meta_description,
    meta_keywords, created_at
  ) VALUES (
    'MacBook Pro M3 Max Long-Term Review: 3 Months Later',
    '<p>After three months of intensive use, here''s our updated review of Apple''s most powerful laptop. From professional workflows to gaming performance, we cover it all.</p><h2>Performance Stability</h2><p>The M3 Max maintains its impressive performance even under sustained loads. No thermal throttling observed in our extended testing.</p><h2>Battery Life</h2><p>Still leading the industry in power efficiency while delivering desktop-class performance.</p>',
    'GADGETS', 'LAPTOPS', 'Thomas Lee',
    'https://fkthvcaehstlbkgztspt.supabase.co/storage/v1/object/public/blog-images/macbook-m3-review.webp',
    'macbook-pro-m3-max-long-term-review',
    true, true, true,
    'MacBook Pro M3 Max Long-Term Review: 3 Months Later | Technikaz',
    'Comprehensive long-term review of the MacBook Pro M3 Max after three months of real-world usage.',
    'MacBook Pro, M3 Max, Apple Silicon, laptop review',
    NOW() - INTERVAL '1 day'
  );

  -- Fourth batch: ROG Review
  INSERT INTO blogs (
    title, content, category, subcategory, author, image_url, slug,
    featured, featured_in_category, popular, meta_title, meta_description,
    meta_keywords, created_at
  ) VALUES (
    'ROG Zephyrus G14 (2024) Review: AMD''s Mobile Gaming Champion',
    '<p>ASUS refreshes their popular gaming laptop with AMD''s latest hardware. The result is a powerful yet portable gaming machine.</p><h2>Design Updates</h2><p>Refined chassis with improved cooling and the signature AniMe Matrix display.</p><h2>Gaming Performance</h2><p>The combination of Ryzen 9 and RTX 4070 delivers exceptional gaming performance in a compact form factor.</p>',
    'GADGETS', 'LAPTOPS', 'Alex Chen',
    'https://fkthvcaehstlbkgztspt.supabase.co/storage/v1/object/public/blog-images/rog-g14-review.webp',
    'rog-zephyrus-g14-2024-review',
    false, true, true,
    'ROG Zephyrus G14 (2024) Review: AMD''s Mobile Gaming Champion | Technikaz',
    'Detailed review of the 2024 ROG Zephyrus G14, featuring AMD''s latest mobile processors and NVIDIA graphics.',
    'ROG Zephyrus G14, gaming laptop, AMD Ryzen, RTX 4070',
    NOW() - INTERVAL '4 days'
  );

  -- Fifth batch: Flagship Comparison
  INSERT INTO blogs (
    title, content, category, subcategory, author, image_url, slug,
    featured, featured_in_category, popular, meta_title, meta_description,
    meta_keywords, created_at
  ) VALUES (
    'Best Flagship Phones 2024: iPhone vs Samsung vs Google',
    '<p>A comprehensive comparison of 2024''s top flagship smartphones. We compare the iPhone 15 Pro Max, Samsung S24 Ultra, and Google Pixel 8 Pro across various categories.</p><h2>Camera Systems</h2><p>Each phone brings unique strengths to mobile photography.</p><h2>Performance</h2><p>Detailed benchmarks and real-world performance comparisons.</p>',
    'GADGETS', 'MOBILE', 'Michael Park',
    'https://fkthvcaehstlbkgztspt.supabase.co/storage/v1/object/public/blog-images/flagship-comparison-2024.webp',
    'best-flagship-phones-2024-comparison',
    true, false, true,
    'Best Flagship Phones 2024: Ultimate Comparison | Technikaz',
    'Detailed comparison of 2024''s top flagship smartphones from Apple, Samsung, and Google.',
    'iPhone 15 Pro Max, Samsung S24 Ultra, Pixel 8 Pro, flagship comparison',
    NOW() - INTERVAL '5 days'
  );

  -- Sixth batch: Gaming Laptops Guide
  INSERT INTO blogs (
    title, content, category, subcategory, author, image_url, slug,
    featured, featured_in_category, popular, meta_title, meta_description,
    meta_keywords, created_at
  ) VALUES (
    'Best Gaming Laptops Under ₹1,50,000 (2024)',
    '<p>Finding the perfect balance of performance and value in gaming laptops. Our comprehensive guide to the best gaming laptops under ₹1,50,000.</p><h2>Top Picks</h2><p>Detailed reviews of each recommended laptop with pros and cons.</p><h2>Performance Comparisons</h2><p>Gaming benchmarks and thermal performance analysis.</p>',
    'GADGETS', 'LAPTOPS', 'Rahul Kumar',
    'https://fkthvcaehstlbkgztspt.supabase.co/storage/v1/object/public/blog-images/gaming-laptops-guide.webp',
    'best-gaming-laptops-under-150000-2024',
    false, true, true,
    'Best Gaming Laptops Under ₹1,50,000 (2024) | Technikaz',
    'Comprehensive guide to the best gaming laptops available under ₹1,50,000 in 2024.',
    'gaming laptops, budget gaming, laptop guide, RTX 4060',
    NOW() - INTERVAL '6 days'
  );

EXCEPTION WHEN others THEN
  RAISE NOTICE 'Error occurred: %', SQLERRM;
  RAISE;
END $$;