import React, { useState } from 'react';
import { Heart, Search, ShoppingCart, Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ValentinesJewelryStore = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: "Heart Locket Necklace",
      price: 89.99,
      description: "Sterling silver locket with custom engraving option",
      image: "/api/placeholder/300/300",
      tag: "Bestseller"
    },
    {
      id: 2,
      name: "Infinity Love Bracelet",
      price: 64.99,
      description: "14k gold-plated infinity design with crystals",
      image: "/api/placeholder/300/300",
      tag: "New"
    },
    {
      id: 3,
      name: "Promise Ring Set",
      price: 129.99,
      description: "Matching couple rings in rose gold finish",
      image: "/api/placeholder/300/300",
      tag: "Limited Edition"
    }
  ];

  const collections = [
    "Forever Love Collection",
    "Valentine's Specials",
    "Personalized Jewelry",
    "Couple's Collection"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Announcement Bar */}
      <div className="bg-red-600 text-white text-center py-2 text-sm">
        Free Shipping on Orders Over $75 | Valentine's Day Special: 15% Off All Hearts ❤️
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex items-center space-x-2">
                <Heart className="text-red-500" size={32} />
                <h1 className="text-2xl font-serif text-gray-900">Ever After Gifts</h1>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {collections.map((item) => (
                <a key={item} href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-6">
              <Search className="text-gray-500 hover:text-red-500 cursor-pointer" size={24} />
              <ShoppingCart className="text-gray-500 hover:text-red-500 cursor-pointer" size={24} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2">
              {collections.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-2 text-gray-600 hover:text-red-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative bg-pink-100 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Capture Your Love Story
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our handcrafted Valentine's collection, where each piece tells a unique story of love
          </p>
          <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors text-lg">
            Shop Valentine's Collection
          </button>
        </div>
      </div>

      {/* Rest of your component code... */}
      
    </div>
  );
};

export default ValentinesJewelryStore;