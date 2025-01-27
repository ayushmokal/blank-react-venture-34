export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      admin_logs: {
        Row: {
          id: string
          user_email: string
          action_type: 'create' | 'update' | 'delete'
          entity_type: 'blog' | 'product'
          entity_id: string
          entity_name: string
          details: string
          created_at: string
        }
        Insert: {
          id?: string
          user_email: string
          action_type: 'create' | 'update' | 'delete'
          entity_type: 'blog' | 'product'
          entity_id: string
          entity_name: string
          details: string
          created_at?: string
        }
        Update: {
          id?: string
          user_email?: string
          action_type?: 'create' | 'update' | 'delete'
          entity_type?: 'blog' | 'product'
          entity_id?: string
          entity_name?: string
          details?: string
          created_at?: string
        }
      }
      blogs: {
        Row: {
          id: string
          title: string
          content: string
          category: string
          subcategory: string | null
          author: string
          image_url: string | null
          slug: string
          featured: boolean
          featured_in_category: boolean
          popular: boolean
          popular_in_tech: boolean
          popular_in_games: boolean
          popular_in_entertainment: boolean
          popular_in_stocks: boolean
          popular_in_gadgets: boolean
          created_at: string
          updated_at: string
          view_count: number
          share_count: number
          average_rating: number
          meta_title: string | null
          meta_description: string | null
          meta_keywords: string | null
        }
        Insert: {
          id?: string
          title: string
          content: string
          category: string
          subcategory?: string | null
          author: string
          image_url?: string | null
          slug: string
          featured?: boolean
          featured_in_category?: boolean
          popular?: boolean
          popular_in_tech?: boolean
          popular_in_games?: boolean
          popular_in_entertainment?: boolean
          popular_in_stocks?: boolean
          popular_in_gadgets?: boolean
          created_at?: string
          updated_at?: string
          view_count?: number
          share_count?: number
          average_rating?: number
          meta_title?: string | null
          meta_description?: string | null
          meta_keywords?: string | null
        }
        Update: {
          id?: string
          title?: string
          content?: string
          category?: string
          subcategory?: string | null
          author?: string
          image_url?: string | null
          slug?: string
          featured?: boolean
          featured_in_category?: boolean
          popular?: boolean
          popular_in_tech?: boolean
          popular_in_games?: boolean
          popular_in_entertainment?: boolean
          popular_in_stocks?: boolean
          popular_in_gadgets?: boolean
          created_at?: string
          updated_at?: string
          view_count?: number
          share_count?: number
          average_rating?: number
          meta_title?: string | null
          meta_description?: string | null
          meta_keywords?: string | null
        }
        Relationships: []
      }
      comments: {
        Row: {
          id: string
          blog_id: string
          user_name: string
          content: string
          parent_id: string | null
          created_at: string
          updated_at: string
          upvotes: number
        }
        Insert: {
          id?: string
          blog_id: string
          user_name: string
          content: string
          parent_id?: string | null
          created_at?: string
          updated_at?: string
          upvotes?: number
        }
        Update: {
          id?: string
          blog_id?: string
          user_name?: string
          content?: string
          parent_id?: string | null
          created_at?: string
          updated_at?: string
          upvotes?: number
        }
        Relationships: [
          {
            foreignKeyName: "comments_blog_id_fkey"
            columns: ["blog_id"]
            referencedRelation: "blogs"
            referencedColumns: ["id"]
          }
        ]
      }
      mobile_products: {
        Row: {
          id: string
          name: string
          brand: string
          price: number
          display_specs: string
          processor: string
          ram: string
          storage: string
          battery: string
          camera: string
          chipset: string | null
          charging_specs: string | null
          resolution: string | null
          screen_size: string | null
          color: string | null
          os: string | null
          image_url: string | null
          gallery_images: string[] | null
          created_at: string
          updated_at: string
          model_name: string | null
          multimedia_specs: Json | null
          design_specs: Json | null
          performance_specs: Json | null
          display_details: Json | null
          camera_details: Json | null
          sensor_specs: Json | null
          network_specs: Json | null
          general_specs: Json | null
        }
        Insert: {
          id?: string
          name: string
          brand: string
          price: number
          display_specs: string
          processor: string
          ram: string
          storage: string
          battery: string
          camera: string
          chipset?: string | null
          charging_specs?: string | null
          resolution?: string | null
          screen_size?: string | null
          color?: string | null
          os?: string | null
          image_url?: string | null
          gallery_images?: string[] | null
          created_at?: string
          updated_at?: string
          model_name?: string | null
          multimedia_specs?: Json | null
          design_specs?: Json | null
          performance_specs?: Json | null
          display_details?: Json | null
          camera_details?: Json | null
          sensor_specs?: Json | null
          network_specs?: Json | null
          general_specs?: Json | null
        }
        Update: {
          id?: string
          name?: string
          brand?: string
          price?: number
          display_specs?: string
          processor?: string
          ram?: string
          storage?: string
          battery?: string
          camera?: string
          chipset?: string | null
          charging_specs?: string | null
          resolution?: string | null
          screen_size?: string | null
          color?: string | null
          os?: string | null
          image_url?: string | null
          gallery_images?: string[] | null
          created_at?: string
          updated_at?: string
          model_name?: string | null
          multimedia_specs?: Json | null
          design_specs?: Json | null
          performance_specs?: Json | null
          display_details?: Json | null
          camera_details?: Json | null
          sensor_specs?: Json | null
          network_specs?: Json | null
          general_specs?: Json | null
        }
        Relationships: []
      }
      brands: {
        Row: {
          id: string
          name: string
          logo_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          logo_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          logo_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      expert_reviews: {
        Row: {
          id: string
          product_id: string
          rating: number
          author: string
          summary: string
          detailed_review: string | null
          pros: string[]
          cons: string[]
          verdict: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          product_id: string
          rating: number
          author: string
          summary: string
          detailed_review?: string | null
          pros: string[]
          cons: string[]
          verdict: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          rating?: number
          author?: string
          summary?: string
          detailed_review?: string | null
          pros?: string[]
          cons?: string[]
          verdict?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      laptops: {
        Row: {
          id: string
          name: string
          brand: string
          price: number
          display_specs: string
          processor: string
          ram: string
          storage: string
          battery: string
          graphics: string | null
          ports: string | null
          color: string | null
          os: string | null
          image_url: string | null
          gallery_images: string[] | null
          created_at: string
          updated_at: string
          model_name: string | null
          multimedia_specs: Json | null
          design_specs: Json | null
          performance_specs: Json | null
          display_details: Json | null
          connectivity_specs: Json | null
        }
        Insert: {
          id?: string
          name: string
          brand: string
          price: number
          display_specs: string
          processor: string
          ram: string
          storage: string
          battery: string
          graphics?: string | null
          ports?: string | null
          color?: string | null
          os?: string | null
          image_url?: string | null
          gallery_images?: string[] | null
          created_at?: string
          updated_at?: string
          model_name?: string | null
          multimedia_specs?: Json | null
          design_specs?: Json | null
          performance_specs?: Json | null
          display_details?: Json | null
          connectivity_specs?: Json | null
        }
        Update: {
          id?: string
          name?: string
          brand?: string
          price?: number
          display_specs?: string
          processor?: string
          ram?: string
          storage?: string
          battery?: string
          graphics?: string | null
          ports?: string | null
          color?: string | null
          os?: string | null
          image_url?: string | null
          gallery_images?: string[] | null
          created_at?: string
          updated_at?: string
          model_name?: string | null
          multimedia_specs?: Json | null
          design_specs?: Json | null
          performance_specs?: Json | null
          display_details?: Json | null
          connectivity_specs?: Json | null
        }
        Relationships: []
      }
      product_ratings: {
        Row: {
          id: string
          product_id: string
          user_id: string
          rating: number
          created_at: string
        }
        Insert: {
          id?: string
          product_id: string
          user_id: string
          rating: number
          created_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          user_id?: string
          rating?: number
          created_at?: string
        }
        Relationships: []
      }
      product_reviews: {
        Row: {
          id: string
          product_id: string
          user_name: string
          content: string
          rating: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          product_id: string
          user_name: string
          content: string
          rating: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          user_name?: string
          content?: string
          rating?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      ratings: {
        Row: {
          id: string
          blog_id: string
          user_id: string
          rating: number
          created_at: string
        }
        Insert: {
          id?: string
          blog_id: string
          user_id: string
          rating: number
          created_at?: string
        }
        Update: {
          id?: string
          blog_id?: string
          user_id?: string
          rating?: number
          created_at?: string
        }
        Relationships: []
      }
      secrets: {
        Row: {
          id: string
          name: string
          value: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          value: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          value?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_view_count: {
        Args: { blog_id: string }
        Returns: void
      }
      increment_share_count: {
        Args: { blog_id: string }
        Returns: void
      }
      calculate_product_rating: {
        Args: { product_id: string }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}