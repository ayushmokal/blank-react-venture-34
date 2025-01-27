/*
  # Add blog category validation trigger
  
  1. New Features
    - Creates a function to validate blog categories and subcategories
    - Adds a trigger to enforce category/subcategory relationships
    - Ensures GADGETS blogs are properly categorized
    
  2. Security
    - Function is owned by postgres to ensure it can't be modified by regular users
*/

-- Create the validation function
CREATE OR REPLACE FUNCTION validate_blog_categories()
RETURNS TRIGGER AS $$
BEGIN
  -- Validate GADGETS category
  IF NEW.category = 'GADGETS' THEN
    -- Ensure subcategory is either MOBILE or LAPTOPS
    IF NEW.subcategory NOT IN ('MOBILE', 'LAPTOPS') THEN
      RAISE EXCEPTION 'Invalid subcategory for GADGETS. Must be either MOBILE or LAPTOPS';
    END IF;
  END IF;

  -- Validate TECH category
  IF NEW.category = 'TECH' THEN
    IF NEW.subcategory NOT IN ('Tech Deals', 'News') THEN
      RAISE EXCEPTION 'Invalid subcategory for TECH. Must be either Tech Deals or News';
    END IF;
  END IF;

  -- Validate GAMES category
  IF NEW.category = 'GAMES' THEN
    IF NEW.subcategory NOT IN ('PS5', 'Xbox', 'Nintendo', 'PC') THEN
      RAISE EXCEPTION 'Invalid subcategory for GAMES. Must be PS5, Xbox, Nintendo, or PC';
    END IF;
  END IF;

  -- Validate ENTERTAINMENT category
  IF NEW.category = 'ENTERTAINMENT' THEN
    IF NEW.subcategory NOT IN ('Movies', 'Series', 'Comics') THEN
      RAISE EXCEPTION 'Invalid subcategory for ENTERTAINMENT. Must be Movies, Series, or Comics';
    END IF;
  END IF;

  -- Validate STOCKS category
  IF NEW.category = 'STOCKS' THEN
    IF NEW.subcategory NOT IN ('Market News', 'Analysis', 'IPO', 'Crypto') THEN
      RAISE EXCEPTION 'Invalid subcategory for STOCKS. Must be Market News, Analysis, IPO, or Crypto';
    END IF;
  END IF;

  -- Validate that category is one of the allowed values
  IF NEW.category NOT IN ('GADGETS', 'TECH', 'GAMES', 'ENTERTAINMENT', 'STOCKS') THEN
    RAISE EXCEPTION 'Invalid category. Must be GADGETS, TECH, GAMES, ENTERTAINMENT, or STOCKS';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop the trigger if it exists
DROP TRIGGER IF EXISTS validate_blog_categories_trigger ON blogs;

-- Create the trigger
CREATE TRIGGER validate_blog_categories_trigger
  BEFORE INSERT OR UPDATE ON blogs
  FOR EACH ROW
  EXECUTE FUNCTION validate_blog_categories();

-- Grant necessary permissions
ALTER FUNCTION validate_blog_categories() OWNER TO postgres;