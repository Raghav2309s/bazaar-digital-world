
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Product, Category } from "@/lib/types";
import { Button } from "@/components/ui/button";

// Sample categories data
const categories: Category[] = [
  { id: 1, name: "Smartphones", image: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" },
  { id: 2, name: "Laptops", image: "https://cdn.dummyjson.com/product-images/6/thumbnail.png" },
  { id: 3, name: "Fragrances", image: "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg" },
  { id: 4, name: "Skincare", image: "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg" },
  { id: 5, name: "Groceries", image: "https://cdn.dummyjson.com/product-images/21/thumbnail.png" },
  { id: 6, name: "Home Decoration", image: "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg" }
];

// Sample products data
const sampleProducts: Product[] = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "Smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: ["https://cdn.dummyjson.com/product-images/1/1.jpg", "https://cdn.dummyjson.com/product-images/1/2.jpg"]
  },
  {
    id: 2,
    title: "iPhone X",
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "Smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    images: ["https://cdn.dummyjson.com/product-images/2/1.jpg", "https://cdn.dummyjson.com/product-images/2/2.jpg"]
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description: "Samsung's new variant which goes beyond Galaxy",
    price: 1249,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "Smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    images: ["https://cdn.dummyjson.com/product-images/3/1.jpg"]
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "Smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
    images: ["https://cdn.dummyjson.com/product-images/4/1.jpg", "https://cdn.dummyjson.com/product-images/4/2.jpg"]
  },
  {
    id: 5,
    title: "Huawei P30",
    description: "Huawei's re-badged P30 Pro New Edition was officially unveiled yesterday in Germany",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "Smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
    images: ["https://cdn.dummyjson.com/product-images/5/1.jpg", "https://cdn.dummyjson.com/product-images/5/2.jpg"]
  },
  {
    id: 6,
    title: "MacBook Pro",
    description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    brand: "Apple",
    category: "Laptops",
    thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
    images: ["https://cdn.dummyjson.com/product-images/6/1.png", "https://cdn.dummyjson.com/product-images/6/2.jpg"]
  },
  {
    id: 7,
    title: "Samsung Galaxy Book",
    description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    discountPercentage: 4.15,
    rating: 4.25,
    stock: 50,
    brand: "Samsung",
    category: "Laptops",
    thumbnail: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
    images: ["https://cdn.dummyjson.com/product-images/7/1.jpg", "https://cdn.dummyjson.com/product-images/7/2.jpg"]
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    discountPercentage: 10.23,
    rating: 4.43,
    stock: 68,
    brand: "Microsoft Surface",
    category: "Laptops",
    thumbnail: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
    images: ["https://cdn.dummyjson.com/product-images/8/1.jpg", "https://cdn.dummyjson.com/product-images/8/2.jpg"]
  },
];

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call with a delay
    const timer = setTimeout(() => {
      setProducts(sampleProducts);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="py-8">
      {/* Categories section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(
                selectedCategory === category.name ? null : category.name
              )}
            >
              <div 
                className={`border rounded-lg p-4 flex flex-col items-center text-center transition ${
                  selectedCategory === category.name 
                    ? 'border-amazon-orange bg-orange-50' 
                    : 'hover:shadow-md'
                }`}
              >
                <div className="h-16 w-16 mb-2 flex items-center justify-center">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Products grid */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            {selectedCategory ? `${selectedCategory}` : "Featured Products"}
          </h2>
          {selectedCategory && (
            <Button 
              variant="ghost" 
              onClick={() => setSelectedCategory(null)}
              className="text-blue-600 hover:text-blue-800"
            >
              View All Products
            </Button>
          )}
        </div>
        
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="border rounded-md p-4">
                <div className="h-40 bg-gray-200 animate-pulse mb-4"></div>
                <div className="h-4 bg-gray-200 animate-pulse mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-200 animate-pulse w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-8">
                <p>No products found in this category</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
