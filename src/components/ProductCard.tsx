
import { Product } from "@/lib/types";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { title, price, rating, thumbnail, discountPercentage } = product;
  
  // Calculate display price and discount
  const hasDiscount = discountPercentage && discountPercentage > 0;
  const originalPrice = hasDiscount ? (price / (1 - discountPercentage / 100)).toFixed(2) : null;
  
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <div className="relative pt-[100%]">
        <img
          src={thumbnail}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain p-4"
        />
      </div>
      
      <CardContent className="p-4 flex-grow">
        <h3 className="font-semibold text-sm md:text-base line-clamp-2 mb-2">{title}</h3>
        
        <div className="flex items-center mb-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-4 h-4 ${
                star <= Math.round(rating)
                  ? "fill-amazon-orange text-amazon-orange"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-xs ml-1 text-blue-600">{rating}</span>
        </div>
        
        <div className="mt-2">
          <div className="flex items-end gap-1">
            <span className="text-lg font-bold">${price.toFixed(2)}</span>
            {hasDiscount && (
              <>
                <span className="text-xs bg-red-500 text-white px-1 rounded-sm">
                  -{Math.round(discountPercentage!)}%
                </span>
                <span className="text-xs text-gray-500 line-through ml-1">
                  ${originalPrice}
                </span>
              </>
            )}
          </div>
          {product.stock < 10 && product.stock > 0 && (
            <p className="text-xs text-orange-600 mt-1">Only {product.stock} left in stock</p>
          )}
          {product.stock === 0 && (
            <p className="text-xs text-red-600 mt-1">Out of stock</p>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-amazon-yellow hover:bg-amazon-orange text-black"
          onClick={() => addItem(product)}
          disabled={product.stock === 0}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
