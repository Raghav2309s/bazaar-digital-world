
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Menu, Search, User } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50">
      {/* Upper navbar */}
      <div className="bg-amazon-dark text-white px-4 py-2">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-amazon-orange text-2xl font-bold">
              bazaar
            </div>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 mx-6 relative">
            <Input 
              type="text" 
              placeholder="Search products" 
              className="w-full rounded-l-md rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              className="rounded-l-none rounded-r-md bg-amazon-yellow hover:bg-amazon-orange"
            >
              <Search className="h-4 w-4 text-amazon-dark" />
            </Button>
          </div>

          {/* Right links */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="hidden md:flex flex-col text-sm">
              <span className="text-xs text-gray-300">Hello, Sign in</span>
              <span className="font-bold">Account & Lists</span>
            </Link>

            <Link to="/" className="hidden md:flex flex-col text-sm">
              <span className="text-xs text-gray-300">Returns</span>
              <span className="font-bold">& Orders</span>
            </Link>

            <Link to="/" className="flex items-center">
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-amazon-orange text-amazon-dark text-xs flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              </div>
              <span className="hidden md:inline ml-1 font-bold">Cart</span>
            </Link>

            <Button
              variant="ghost"
              className="md:hidden p-0 text-white hover:bg-transparent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Lower navbar */}
      <div className="bg-amazon-light text-white px-4 py-1">
        <div className="container mx-auto flex items-center">
          <div className="flex items-center space-x-4 text-sm overflow-x-auto no-scrollbar">
            <Link to="/" className="whitespace-nowrap hover:text-amazon-yellow">
              <Menu className="h-4 w-4 inline mr-1" /> All
            </Link>
            <Link to="/" className="whitespace-nowrap hover:text-amazon-yellow">Today's Deals</Link>
            <Link to="/" className="whitespace-nowrap hover:text-amazon-yellow">Customer Service</Link>
            <Link to="/" className="whitespace-nowrap hover:text-amazon-yellow">Registry</Link>
            <Link to="/" className="whitespace-nowrap hover:text-amazon-yellow">Gift Cards</Link>
            <Link to="/" className="whitespace-nowrap hover:text-amazon-yellow">Sell</Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity", 
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={cn(
            "fixed inset-y-0 left-0 w-64 bg-white transform transition-transform",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 bg-amazon-dark text-white flex items-center">
            <User className="w-6 h-6 mr-2" />
            <span className="font-bold">Hello, Sign In</span>
          </div>
          
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Shop By Department</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="block py-1" onClick={() => setIsMenuOpen(false)}>Electronics</Link></li>
              <li><Link to="/" className="block py-1" onClick={() => setIsMenuOpen(false)}>Computers</Link></li>
              <li><Link to="/" className="block py-1" onClick={() => setIsMenuOpen(false)}>Smart Home</Link></li>
              <li><Link to="/" className="block py-1" onClick={() => setIsMenuOpen(false)}>Arts & Crafts</Link></li>
            </ul>
            
            <div className="border-t border-gray-200 my-4"></div>
            
            <h3 className="font-bold text-lg mb-2">Help & Settings</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="block py-1" onClick={() => setIsMenuOpen(false)}>Your Account</Link></li>
              <li><Link to="/" className="block py-1" onClick={() => setIsMenuOpen(false)}>Customer Service</Link></li>
              <li><Link to="/" className="block py-1" onClick={() => setIsMenuOpen(false)}>Sign Out</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile search - shown below navbar on mobile */}
      <div className="md:hidden bg-amazon-dark text-white px-4 pb-2">
        <div className="flex relative">
          <Input 
            type="text" 
            placeholder="Search products" 
            className="w-full rounded-l-md rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            className="rounded-l-none rounded-r-md bg-amazon-yellow hover:bg-amazon-orange"
          >
            <Search className="h-4 w-4 text-amazon-dark" />
          </Button>
        </div>
      </div>
    </header>
  );
}
