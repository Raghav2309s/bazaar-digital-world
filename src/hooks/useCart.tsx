
import { useState, useEffect, createContext, useContext } from "react";
import { CartItem, Product } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();
  
  // Calculate total number of items
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  
  // Calculate total price
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Add item to cart
  const addItem = (product: Product) => {
    setItems((prevItems) => {
      // Check if item already exists in cart
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        // Increase quantity of existing item
        return prevItems.map((item) => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Add new item
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart`,
    });
  };

  // Remove item from cart
  const removeItem = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart",
    });
  };

  // Update quantity of item
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
