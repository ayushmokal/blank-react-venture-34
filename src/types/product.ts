export interface BaseProduct {
  id: string;
  name: string;
  brand: string;
  price: number;
  image_url: string | null;
  display_specs: string;
  processor: string;
  ram: string;
  storage: string;
  battery: string;
  os: string | null;
  color: string | null;
  created_at: string;
  updated_at: string;
  gallery_images: string[] | null;
  model_name: string | null;
  multimedia_specs?: Json;
  design_specs?: Json;
  performance_specs?: Json;
  display_details?: Json;
}

export interface LaptopProduct extends BaseProduct {
  graphics: string | null;
  ports: string | null;
  connectivity_specs?: Json;
}

export interface MobileProduct extends BaseProduct {
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

export type Product = LaptopProduct | MobileProduct;