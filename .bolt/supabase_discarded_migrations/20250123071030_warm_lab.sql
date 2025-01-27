-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  subcategory text,
  author text NOT NULL,
  image_url text,
  slug text NOT NULL UNIQUE,
  featured boolean DEFAULT false,
  featured_in_category boolean DEFAULT false,
  popular boolean DEFAULT false,
  popular_in_tech boolean DEFAULT false,
  popular_in_games boolean DEFAULT false,
  popular_in_entertainment boolean DEFAULT false,
  popular_in_stocks boolean DEFAULT false,
  popular_in_gadgets boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  view_count integer DEFAULT 0,
  share_count integer DEFAULT 0,
  average_rating numeric DEFAULT 0,
  meta_title text,
  meta_description text,
  meta_keywords text
);

-- Create mobile_products table
CREATE TABLE IF NOT EXISTS mobile_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  brand text,
  model_name text,
  price numeric NOT NULL,
  display_specs text NOT NULL,
  processor text NOT NULL,
  ram text,
  storage text,
  battery text NOT NULL,
  camera text NOT NULL,
  chipset text,
  charging_specs text,
  resolution text,
  screen_size text,
  color text,
  os text,
  image_url text,
  gallery_images text[],
  camera_details jsonb,
  sensor_specs jsonb,
  network_specs jsonb,
  general_specs jsonb,
  design_specs jsonb,
  display_details jsonb,
  performance_specs jsonb,
  multimedia_specs jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE mobile_products ENABLE ROW LEVEL SECURITY;

-- Create policies for blogs
CREATE POLICY "Allow public read access for blogs"
  ON blogs FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to create blogs"
  ON blogs FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update blogs"
  ON blogs FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete blogs"
  ON blogs FOR DELETE
  TO authenticated
  USING (true);

-- Create policies for mobile_products
CREATE POLICY "Allow public read access for mobile_products"
  ON mobile_products FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to create mobile_products"
  ON mobile_products FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update mobile_products"
  ON mobile_products FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete mobile_products"
  ON mobile_products FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_blogs_category ON blogs(category);
CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON blogs(created_at);
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_featured ON blogs(featured);
CREATE INDEX IF NOT EXISTS idx_blogs_popular ON blogs(popular);

CREATE INDEX IF NOT EXISTS idx_mobile_products_brand ON mobile_products(brand);
CREATE INDEX IF NOT EXISTS idx_mobile_products_price ON mobile_products(price);
CREATE INDEX IF NOT EXISTS idx_mobile_products_created_at ON mobile_products(created_at);