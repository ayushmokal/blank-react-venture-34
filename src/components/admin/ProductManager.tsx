import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ProductTable } from "./ProductTable";
import { ProductDetailsDialog } from "./ProductDetailsDialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExpertReviewForm } from "./expert-review/ExpertReviewForm";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface Product {
  id: string;
  name: string;
  image_url?: string;
}

interface ProductManagerProps {
  productType: 'mobile' | 'laptop';
}

export function ProductManager({ productType }: ProductManagerProps) {
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showExpertReview, setShowExpertReview] = useState(false);
  const [showDetailedReview, setShowDetailedReview] = useState(false);
  const [selectedProductForReview, setSelectedProductForReview] = useState<Product | null>(null);
  const [selectedProductForImages, setSelectedProductForImages] = useState<Product | null>(null);

  const { data: products = [], refetch } = useQuery({
    queryKey: ['products', productType],
    queryFn: async () => {
      const tableName = productType === 'laptop' ? 'laptops' : 'mobile_products';
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    },
  });

  const handleView = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddReview = (product: Product) => {
    setSelectedProductForReview(product);
    setShowExpertReview(true);
    setShowDetailedReview(false);
  };

  const handleUpdateImages = (product: Product) => {
    setSelectedProductForImages(product);
  };

  const handleAddDetailedReview = (product: Product) => {
    setSelectedProductForReview(product);
    setShowDetailedReview(true);
    setShowExpertReview(false);
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
      refetch();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  return (
    <div className="space-y-6">
      <ProductTable
        products={products}
        onView={handleView}
        onAddReview={handleAddReview}
        onAddDetailedReview={handleAddDetailedReview}
        onDelete={handleDelete}
        onUpdateImages={handleUpdateImages}
      />

      {selectedProduct && (
        <ProductDetailsDialog
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <Dialog 
        open={showExpertReview} 
        onOpenChange={(open) => {
          if (!open) {
            setShowExpertReview(false);
            setSelectedProductForReview(null);
          }
        }}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add Expert Review</DialogTitle>
          </DialogHeader>
          {selectedProductForReview && (
            <ExpertReviewForm
              productId={selectedProductForReview.id}
              onSuccess={() => {
                setShowExpertReview(false);
                setSelectedProductForReview(null);
                toast({
                  title: "Success",
                  description: "Expert review added successfully",
                });
              }}
            />
          )}
        </DialogContent>
      </Dialog>

      <Dialog 
        open={showDetailedReview} 
        onOpenChange={(open) => {
          if (!open) {
            setShowDetailedReview(false);
            setSelectedProductForReview(null);
          }
        }}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add Detailed Review</DialogTitle>
          </DialogHeader>
          {selectedProductForReview && (
            <div className="space-y-4">
              <div className="min-h-[500px] border rounded-md">
                <CKEditor
                  editor={ClassicEditor}
                  data=""
                  config={{
                    toolbar: {
                      items: [
                        'heading',
                        '|',
                        'bold',
                        'italic',
                        'link',
                        'bulletedList',
                        'numberedList',
                        '|',
                        'outdent',
                        'indent',
                        '|',
                        'imageUpload',
                        'blockQuote',
                        'insertTable',
                        'mediaEmbed',
                        'undo',
                        'redo'
                      ]
                    }
                  }}
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={() => setShowDetailedReview(false)}>
                  Save Detailed Review
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}