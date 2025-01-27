import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { mobileProductSchema, laptopProductSchema } from "@/schemas/productSchemas";
import { useImageUpload } from "./useImageUpload";
import { useAuthCheck } from "@/hooks/useAuthCheck";
import { useProductData } from "@/hooks/useProductData";
import { supabase } from "@/integrations/supabase/client";
import type { ProductFormData, Product } from "@/types/product";

interface UseProductFormProps {
  initialData?: Product;
  onSuccess?: (productId: string) => void;
  productType?: 'mobile' | 'laptop';
}

const getDefaultValues = (productType: 'mobile' | 'laptop'): ProductFormData => {
  const baseValues = {
    name: "",
    brand: "",
    price: 0,
    display_specs: "",
    processor: "",
    ram: "",
    storage: "",
    battery: "",
  };

  if (productType === 'mobile') {
    return {
      ...baseValues,
      camera: "",
    };
  }

  return {
    ...baseValues,
    graphics: "",
  };
};

export function useProductForm({ initialData, onSuccess, productType = 'mobile' }: UseProductFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast, navigate } = useAuthCheck();
  const { updateProduct, insertProduct } = useProductData();
  const { 
    mainImageFile, 
    galleryImageFiles, 
    handleMainImageChange, 
    handleGalleryImagesChange, 
    handleRemoveGalleryImage,
    uploadImage 
  } = useImageUpload();

  const form = useForm<ProductFormData>({
    resolver: zodResolver(productType === 'mobile' ? mobileProductSchema : laptopProductSchema),
    defaultValues: initialData || getDefaultValues(productType),
  });

  const handleSubmit = async (data: ProductFormData) => {
    try {
      setIsLoading(true);
      const table = productType === 'mobile' ? 'mobile_products' : 'laptops';
      let result;

      if (initialData?.id) {
        result = await updateProduct(table, initialData.id, data);
        toast({
          title: "Success",
          description: `${productType === 'mobile' ? 'Mobile phone' : 'Laptop'} updated successfully`,
        });
      } else {
        result = await insertProduct(table, data);
        toast({
          title: "Success",
          description: `${productType === 'mobile' ? 'Mobile phone' : 'Laptop'} added successfully`,
        });
      }

      form.reset(getDefaultValues(productType));
      onSuccess?.(result.id);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to save product",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    productType,
    handleMainImageChange,
    handleGalleryImagesChange,
    handleRemoveGalleryImage: (index: number) => handleRemoveGalleryImage(index, form),
    onSubmit: handleSubmit,
  };
}
