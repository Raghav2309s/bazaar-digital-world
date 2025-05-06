
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CartItem from "@/components/CartItem";
import { CartProvider, useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, X } from "lucide-react";

function CartSheet() {
  const { items, total, clearCart } = useCart();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="fixed bottom-8 right-8 z-40 h-14 w-14 rounded-full shadow-lg bg-amazon-yellow hover:bg-amazon-orange border-0 flex items-center justify-center">
          <ShoppingCart className="text-black" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-auto">
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle className="text-xl font-bold">Your Cart ({items.length})</SheetTitle>
          {items.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearCart}
              className="text-red-500 hover:text-red-700"
            >
              <X className="h-4 w-4 mr-1" /> Clear
            </Button>
          )}
        </SheetHeader>
        
        <div className="mt-6">
          {items.length > 0 ? (
            <>
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              
              <div className="mt-6 border-t pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Subtotal:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Shipping and taxes calculated at checkout</p>
                
                <Button className="w-full mt-4 bg-amazon-yellow hover:bg-amazon-orange text-black">
                  Proceed to Checkout
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium">Your cart is empty</h3>
              <p className="mt-2 text-gray-500">Start shopping to add items to your cart</p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Hero />
          <div className="container mx-auto px-4">
            <ProductGrid />
          </div>
        </main>
        <CartSheet />
        <footer className="bg-amazon-dark text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Bazaar. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;
