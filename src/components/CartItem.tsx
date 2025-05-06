
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { CartItem as CartItemType } from "@/lib/types";
import { Trash2, Minus, Plus } from "lucide-react";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  
  const handleQuantityDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };
  
  const handleQuantityIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="flex py-4 border-b">
      {/* Product image */}
      <div className="w-20 h-20 flex-shrink-0">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Product details */}
      <div className="ml-4 flex-grow">
        <h3 className="text-sm font-medium">{item.title}</h3>
        <p className="text-xs text-gray-500">
          {item.brand}
        </p>
        
        <div className="flex items-center mt-2">
          <span className="font-medium">${item.price.toFixed(2)}</span>
          {item.discountPercentage && (
            <span className="text-xs bg-red-500 text-white px-1 rounded-sm ml-2">
              -{Math.round(item.discountPercentage)}%
            </span>
          )}
        </div>
        
        {/* Quantity controls */}
        <div className="flex items-center mt-2">
          <div className="flex items-center border rounded">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handleQuantityDecrease}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center">{item.quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handleQuantityIncrease}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="ml-4 text-xs text-red-500 hover:text-red-700"
            onClick={() => removeItem(item.id)}
          >
            <Trash2 className="h-3 w-3 mr-1" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}
