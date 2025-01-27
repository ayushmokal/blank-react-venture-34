import { Json } from './json';

export interface BaseProductData {
  id?: string;
  name: string;
  brand: string;
  price: number;
  image_url?: string;
  display_specs: string;
  processor: string;
  ram: string;
  storage: string;
  battery: string;
  os?: string;
  color?: string;
  created_at?: string;
  updated_at?: string;
  gallery_images?: string[];
  model_name?: string;
  multimedia_specs?: Json;
  design_specs?: Json;
  performance_specs?: Json;
  display_details?: Json;
}

export interface LaptopProduct extends BaseProductData {
  graphics?: string;
  ports?: string;
  connectivity_specs?: Json;
}

export interface MobileProduct extends BaseProductData {
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
  sensors?: string[];
  available_colors?: string[];
  bands_2g?: string[];
  bands_3g?: string[];
  bands_4g?: string[];
  bands_5g?: string[];
  camera_details?: Json;
  sensor_specs?: Json;
  network_specs?: Json;
  general_specs?: Json;
}

export type Product = MobileProduct | LaptopProduct;
export type ProductFormData = Omit<Product, 'id' | 'created_at' | 'updated_at'>;

// Type guard for product types
export const isMobileProduct = (product: Product): product is MobileProduct => {
  return 'camera' in product;
};

export const isLaptopProduct = (product: Product): product is LaptopProduct => {
  return 'graphics' in product;
};