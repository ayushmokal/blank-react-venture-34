import { Battery, Camera, CircuitBoard, Cpu, Laptop, Smartphone } from "lucide-react";

interface ProductKeySpecsProps {
  type?: 'mobile' | 'laptop';
  screenSize?: string;
  camera?: string;
  processor: string;
  battery: string;
  graphics?: string;
}

export function ProductKeySpecs({ 
  type = 'mobile',
  screenSize,
  camera,
  processor,
  battery,
  graphics
}: ProductKeySpecsProps) {
  return (
    <div className="grid grid-cols-4 gap-8 py-8 border-y">
      <div className="flex flex-col items-center text-center">
        {type === 'mobile' ? 
          <Smartphone className="h-10 w-10 mb-4 text-primary stroke-1" /> :
          <Laptop className="h-10 w-10 mb-4 text-primary stroke-1" />
        }
        <span className="text-sm font-medium">{screenSize || "6.73 inches"}</span>
      </div>
      
      {type === 'mobile' ? (
        <div className="flex flex-col items-center text-center">
          <Camera className="h-10 w-10 mb-4 text-primary stroke-1" />
          <span className="text-sm font-medium line-clamp-2">{camera || "50MP + 50MP + 50MP"}</span>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center">
          <CircuitBoard className="h-10 w-10 mb-4 text-primary stroke-1" />
          <span className="text-sm font-medium line-clamp-2">{graphics || "N/A"}</span>
        </div>
      )}
      
      <div className="flex flex-col items-center text-center">
        <Cpu className="h-10 w-10 mb-4 text-primary stroke-1" />
        <span className="text-sm font-medium line-clamp-2">{processor}</span>
      </div>
      
      <div className="flex flex-col items-center text-center">
        <Battery className="h-10 w-10 mb-4 text-primary stroke-1" />
        <span className="text-sm font-medium line-clamp-2">{battery}</span>
      </div>
    </div>
  );
}