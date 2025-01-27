import { supabase } from "@/integrations/supabase/client";
import type { Product, ProductFormData } from "@/types/product";

export function useProductData() {
  const updateProduct = async (
    table: string,
    id: string,
    data: ProductFormData,
    productType: 'mobile' | 'laptop'
  ) => {
    const { data: result, error } = await supabase
      .from(table)
      .update(data)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return result as Product;
  };

  const insertProduct = async (
    table: string,
    data: ProductFormData,
    productType: 'mobile' | 'laptop'
  ) => {
    const { data: result, error } = await supabase
      .from(table)
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return result as Product;
  };

  return {
    updateProduct,
    insertProduct
  };
}