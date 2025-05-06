
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative">
      {/* Hero image */}
      <div className="w-full h-[300px] md:h-[400px] bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" 
          }}
        ></div>
        
        <div className="container relative z-10 px-4 md:px-8 text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Bazaar</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Shop millions of products with fast delivery and unbeatable prices
          </p>
          <Button className="bg-amazon-yellow hover:bg-amazon-orange text-black font-bold px-8 py-6 text-lg">
            Shop Now
          </Button>
        </div>
      </div>
      
      {/* Gradient overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
