import { Json } from '@/integrations/supabase/types';

export interface BaseProductData {
  id?: string;
  name: string;
  brand: string;
  price: number;
  display_specs: string;
  processor: string;
  ram: string;
  storage: string;
  battery: string;
  os?: string;
  color?: string;
  image_url?: string;
  gallery_images?: string[];
  design_specs?: Json;
  display_details?: Json;
  performance_specs?: Json;
  multimedia_specs?: Json;
}

export interface MobileProductData extends BaseProductData {
  camera: string;
  chipset?: string;
  charging_specs?: string;
  resolution?: string;
  screen_size?: string;
  announced?: string;
  status?: string;
  cpu_details?: string;
  gpu_details?: string;
  card_slot?: boolean;
  memory_type?: string;
  display_type?: string;
  display_protection?: string;
  dimensions?: string;
  weight?: string;
  build_material?: string;
  sim_type?: string;
  protection_rating?: string;
  wlan?: string;
  bluetooth?: string;
  nfc?: boolean;
  gps?: string;
  usb_type?: string;
  radio?: boolean;
  infrared?: boolean;
  network_technology?: string;
  network_speed?: string;
  loudspeaker_type?: string;
  audio_jack?: boolean;
  sensors?: string[];
  available_colors?: string[];
  camera_details?: Json;
  sensor_specs?: Json;
  network_specs?: Json;
  general_specs?: Json;
}

export interface LaptopProductData extends BaseProductData {
  graphics?: string;
  ports?: string;
  connectivity_specs?: Json;
}

export type Product = MobileProductData | LaptopProductData;
export type ProductFormData = Omit<Product, 'id'> & { id?: string };

// Type guards
export const isMobileProduct = (product: Product): product is MobileProductData => {
  return 'camera' in product;
};

export const isLaptopProduct = (product: Product): product is LaptopProductData => {
  return 'graphics' in product;
};

// Re-export for components that need these types
export type { MobileProductData as MobileProduct };
export type { LaptopProductData as LaptopProduct };