import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export function useAuthCheck() {
  const { toast } = useToast();
  const navigate = useNavigate();

  return {
    toast,
    navigate
  };
}