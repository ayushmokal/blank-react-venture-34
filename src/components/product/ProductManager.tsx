import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ProductTable } from "./ProductTable";
import { ProductDetailsDialog } from "./ProductDetailsDialog";
import { ExpertReviewDialog } from "./ExpertReviewDialog";
import { ProductImageDialog } from "./ProductImageDialog";
import type { Product } from "@/types/product";
import { supabase } from "@/integrations/supabase/client";

interface ProductManagerProps {
  productType: 'mobile' | 'laptop';
}

export function ProductManager({ productType }: ProductManagerProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showExpertReview, setShowExpertReview] = useState(false);
  const [selectedProductForReview, setSelectedProductForReview] = useState<Product | null>(null);
  const [selectedProductForImages, setSelectedProductForImages] = useState<Product | null>(null);
  const { toast } = useToast();

  const handleView = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddReview = (product: Product) => {
    setSelectedProductForReview(product);
    setShowExpertReview(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const tableName = productType === 'laptop' ? 'laptops' : 'mobile_products';
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Product deleted successfully",
      });
      
      // Refresh products list
      fetchProducts();
    } catch (error: any) {
      console.error('Error deleting product:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to delete product",
      });
    }
  };

  const handleUpdateImages = (product: Product) => {
    setSelectedProductForImages(product);
  };

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const tableName = productType === 'laptop' ? 'laptops' : 'mobile_products';
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error: any) {
      console.error('Error fetching products:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to fetch products",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ProductTable
        products={products}
        onView={handleView}
        onAddReview={handleAddReview}
        onDelete={handleDelete}
        onUpdateImages={handleUpdateImages}
      />

      {selectedProduct && (
        <ProductDetailsDialog
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)} 
        />
      )}

      {selectedProductForReview && showExpertReview && (
        <ExpertReviewDialog
          product={selectedProductForReview}
          onClose={() => {
            setShowExpertReview(false);
            setSelectedProductForReview(null);
          }}
        />
      )}

      {selectedProductForImages && (
        <ProductImageDialog
          product={selectedProductForImages}
          onClose={() => setSelectedProductForImages(null)}
          onSuccess={() => {
            setSelectedProductForImages(null);
            fetchProducts();
          }}
          productType={productType}
        />
      )}
    </div>
  );
}