/*
  # Drop all tables and functions

  1. Tables to Drop
    - blogs
    - brands
    - comments
    - expert_reviews
    - laptops
    - mobile_products
    - product_ratings
    - product_reviews
    - ratings
    - secrets

  2. Functions to Drop
    - calculate_product_rating
    - increment_share_count
    - increment_view_count
    - validate_blog_categories
*/

-- Drop triggers first
DROP TRIGGER IF EXISTS validate_blog_categories_trigger ON blogs;

-- Drop functions
DROP FUNCTION IF EXISTS calculate_product_rating;
DROP FUNCTION IF EXISTS increment_share_count;
DROP FUNCTION IF EXISTS increment_view_count;
DROP FUNCTION IF EXISTS validate_blog_categories;

-- Drop tables
DROP TABLE IF EXISTS blogs CASCADE;
DROP TABLE IF EXISTS brands CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS expert_reviews CASCADE;
DROP TABLE IF EXISTS laptops CASCADE;
DROP TABLE IF EXISTS mobile_products CASCADE;
DROP TABLE IF EXISTS product_ratings CASCADE;
DROP TABLE IF EXISTS product_reviews CASCADE;
DROP TABLE IF EXISTS ratings CASCADE;
DROP TABLE IF EXISTS secrets CASCADE;