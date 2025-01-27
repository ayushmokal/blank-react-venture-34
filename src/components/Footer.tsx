import { Link } from "react-router-dom"; 
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() { 
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Logo and Newsletter */}
        <div className="flex flex-col items-center mb-12">
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
            <button className="absolute right-0 top-0 h-12 px-8 bg-[#00E0FF] text-black rounded-r-lg font-medium hover:bg-[#00c2dd] transition-colors">
              GO
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Links Column */}
          <div>
            <h3 className="text-[#00E0FF] font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/games" className="hover:text-[#00E0FF] transition-colors">Games</Link></li>
              <li><Link to="/tech" className="hover:text-[#00E0FF] transition-colors">Tech</Link></li>
              <li><Link to="/entertainment" className="hover:text-[#00E0FF] transition-colors">Entertainment</Link></li>
              <li><Link to="/mobile" className="hover:text-[#00E0FF] transition-colors">Mobile</Link></li>
              <li><Link to="/stocks" className="hover:text-[#00E0FF] transition-colors">Stocks</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-[#00E0FF] font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#00E0FF] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#00E0FF] transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-[#00E0FF] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#00E0FF] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Additional columns for larger screens */}
          <div className="hidden md:block">
            <h3 className="text-[#00E0FF] font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="hover:text-[#00E0FF] transition-colors">Blog</Link></li>
              <li><Link to="/news" className="hover:text-[#00E0FF] transition-colors">News</Link></li>
              <li><Link to="/guides" className="hover:text-[#00E0FF] transition-colors">Guides</Link></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-[#00E0FF] font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-[#00E0FF] transition-colors">Help Center</Link></li>
              <li><Link to="/faq" className="hover:text-[#00E0FF] transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-[#00E0FF] transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <Link to="#" className="hover:text-[#00E0FF] transition-colors">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link to="#" className="hover:text-[#00E0FF] transition-colors">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link to="#" className="hover:text-[#00E0FF] transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link to="#" className="hover:text-[#00E0FF] transition-colors">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          @2024-25 Technikaz All Rights Reserved
        </div>
      </div>
    </footer>
  );
}