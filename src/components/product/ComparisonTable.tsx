import { X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { MobileProduct, LaptopProduct } from "@/types/product";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ComparisonTableProps {
  selectedProducts: (MobileProduct | LaptopProduct)[];
  currentProduct: MobileProduct | LaptopProduct;
  type: 'mobile' | 'laptop';
  onRemove: (productId: string) => void;
}

export function ComparisonTable({ selectedProducts, currentProduct, type, onRemove }: ComparisonTableProps) {
  const specCategories = {
    basic: {
      title: "Basic Information",
      specs: [
        { title: "Price", key: "price", format: (value: number) => `₹${value.toLocaleString()}` },
        { title: "Brand", key: "brand" },
        { title: "Model", key: "model_name" },
        { title: "OS", key: "os" },
      ]
    },
    display: {
      title: "Display",
      specs: [
        { title: "Display", key: "display_specs" },
        { title: "Type", key: "display_type" },
        { title: "Size", key: "display_size" },
        { title: "Resolution", key: "display_resolution" },
        { title: "Protection", key: "display_protection" },
      ]
    },
    performance: {
      title: "Performance",
      specs: [
        { title: "Processor", key: "processor" },
        { title: "CPU Details", key: "cpu_details" },
        { title: "GPU Details", key: "gpu_details" },
        { title: "RAM", key: "ram" },
        { title: "Storage", key: "storage" },
        { title: "Memory Type", key: "memory_type" },
        { title: "Card Slot", key: "card_slot", format: (value: boolean) => value ? "Yes" : "No" },
      ]
    },
    ...(type === 'mobile' ? {
      camera: {
        title: "Camera",
        specs: [
          { title: "Main Camera", key: "camera" },
          { title: "Front Camera", key: "selfie_camera_specs" },
        ]
      },
      communications: {
        title: "Communications",
        specs: [
          { title: "WLAN", key: "wlan" },
          { title: "Bluetooth", key: "bluetooth" },
          { title: "NFC", key: "nfc", format: (value: boolean) => value ? "Yes" : "No" },
          { title: "GPS", key: "gps" },
          { title: "USB Type", key: "usb_type" },
          { title: "Radio", key: "radio", format: (value: boolean) => value ? "Yes" : "No" },
          { title: "Infrared", key: "infrared", format: (value: boolean) => value ? "Yes" : "No" },
        ]
      },
      network: {
        title: "Network",
        specs: [
          { title: "Technology", key: "network_technology" },
          { title: "Speed", key: "network_speed" },
          { title: "2G Bands", key: "bands_2g" },
          { title: "3G Bands", key: "bands_3g" },
          { title: "4G Bands", key: "bands_4g" },
          { title: "5G Bands", key: "bands_5g" },
        ]
      },
      sound: {
        title: "Sound",
        specs: [
          { title: "Loudspeaker", key: "loudspeaker_type" },
          { title: "3.5mm Jack", key: "audio_jack", format: (value: boolean) => value ? "Yes" : "No" },
        ]
      },
      features: {
        title: "Features",
        specs: [
          { title: "Sensors", key: "sensors" },
          { title: "Available Colors", key: "available_colors" },
        ]
      }
    } : {
      extras: {
        title: "Additional Features",
        specs: [
          { title: "Graphics", key: "graphics" },
          { title: "Ports", key: "ports" },
        ]
      }
    }),
    battery: {
      title: "Battery & Charging",
      specs: [
        { title: "Battery", key: "battery" },
        { title: "Battery Type", key: "battery_type" },
        { title: "Charging", key: "charging_specs" },
      ]
    },
    design: {
      title: "Design & Build",
      specs: [
        { title: "Dimensions", key: "dimensions" },
        { title: "Weight", key: "weight" },
        { title: "Build", key: "build_material" },
        { title: "Color", key: "color" },
        ...(type === 'mobile' ? [
          { title: "SIM", key: "sim_type" },
          { title: "Protection", key: "protection_rating" },
        ] : [])
      ]
    },
  };

  const formatValue = (spec: any, value: any) => {
    if (value === null || value === undefined) return 'N/A';
    if (spec.format) return spec.format(value);
    if (Array.isArray(value)) return value.join(', ');
    return value.toString();
  };

  // Desktop View
  const DesktopView = () => (
    <ScrollArea className="w-full">
      <div className="min-w-[640px]">
        {/* Product Headers */}
        <div className="grid grid-cols-4 gap-4 p-6 border-b">
          <div className="font-semibold text-left text-lg">Specifications</div>
          {selectedProducts.map((product, index) => (
            <div key={`product-header-${product.id}`} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 relative mb-3">
                  <img
                    src={product.image_url || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                  {index > 0 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute -top-2 -right-2 h-6 w-6"
                      onClick={() => onRemove(product.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <h3 className="text-sm font-medium text-center line-clamp-2">{product.name}</h3>
                <p className="text-primary font-bold mt-1">₹{product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Specifications Content */}
        <div className="p-6">
          {Object.entries(specCategories).map(([categoryKey, category]) => {
            if (!category) return null;
            return (
              <div key={`category-${categoryKey}`} className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-left text-gray-900">{category.title}</h3>
                <div className="space-y-3">
                  {category.specs.map((spec) => (
                    <div key={`${categoryKey}-${spec.key}`} className="grid grid-cols-4 gap-4 py-2">
                      <div className="font-medium text-gray-700 text-left">
                        {spec.title}
                      </div>
                      {selectedProducts.map((product) => (
                        <div 
                          key={`${categoryKey}-${spec.key}-${product.id}`} 
                          className="text-gray-600 break-words"
                        >
                          {formatValue(spec, product[spec.key as keyof typeof product])}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <Separator className="my-6" />
              </div>
            );
          })}
        </div>
      </div>
    </ScrollArea>
  );

  // Mobile View
  const MobileView = () => (
    <Accordion type="single" collapsible className="w-full">
      {Object.entries(specCategories).map(([categoryKey, category]) => {
        if (!category) return null;
        return (
          <AccordionItem key={categoryKey} value={categoryKey}>
            <AccordionTrigger className="text-lg font-semibold px-4">
              {category.title}
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <div className="space-y-6">
                {category.specs.map((spec) => (
                  <div key={`${categoryKey}-${spec.key}`} className="border rounded-lg p-4">
                    <h4 className="font-medium mb-3">{spec.title}</h4>
                    <div className="space-y-3">
                      {selectedProducts.map((product) => (
                        <div 
                          key={`${categoryKey}-${spec.key}-${product.id}`} 
                          className="flex items-center justify-between gap-4 text-sm"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <img 
                              src={product.image_url || "/placeholder.svg"}
                              alt={product.name}
                              className="w-8 h-8 object-contain"
                            />
                            <span className="font-medium truncate">{product.name}</span>
                          </div>
                          <span className="text-gray-600">
                            {formatValue(spec, product[spec.key as keyof typeof product])}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );

  return (
    <>
      {/* Desktop View - Hidden on Mobile */}
      <div className="hidden md:block">
        <DesktopView />
      </div>

      {/* Mobile View - Hidden on Desktop */}
      <div className="md:hidden">
        <MobileView />
      </div>
    </>
  );
}