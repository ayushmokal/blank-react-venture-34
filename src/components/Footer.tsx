import { Link } from "react-router-dom"; 
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() { 
  return (
    <footer className="bg-black text-white">
      {/* Top Bar */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center py-8">
          <Link to="/" className="mb-8">
            <img 
              src="https://i.ibb.co/BCHWQmq/Black-bg-2-1-e1722342966946-300x55.png" 
              alt="Technikaz" 
              className="h-8 w-auto"
            />
          </Link>
          
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Sign-Up For Newsletters"
              className="w-full h-12 px-4 rounded-lg bg-white text-black placeholder:text-gray-500"
            />
            <button className="absolute right-0 top-0 h-12 px-8 bg-[#00897B] text-white rounded-r-lg font-medium">
              GO
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Links Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-[#00E0FF] font-medium mb-4 text-lg">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/games" className="hover:text-[#00E0FF]">Games</Link></li>
              <li><Link to="/tech" className="hover:text-[#00E0FF]">Tech</Link></li>
              <li><Link to="/entertainment" className="hover:text-[#00E0FF]">Entertainment</Link></li>
              <li><Link to="/mobile" className="hover:text-[#00E0FF]">Mobile</Link></li>
              <li><Link to="/stocks" className="hover:text-[#00E0FF]">Stocks</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-[#00E0FF] font-medium mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#00E0FF]">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#00E0FF]">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-[#00E0FF]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#00E0FF]">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-start gap-4 mb-8">
          <Link to="#" className="hover:text-[#00E0FF]">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link to="#" className="hover:text-[#00E0FF]">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link to="#" className="hover:text-[#00E0FF]">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link to="#" className="hover:text-[#00E0FF]">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
          @2024-25 Technikaz All Rights Reserved
        </div>
      </div>
    </footer>
  );
}