import React, { useState } from 'react';
import { SectionHeading, Button } from '../components/UI';
import { Search, Filter, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = ['All', 'Feed Supplements', 'Liver Tonics', 'Calcium', 'Wound Care', 'Antibiotics'];

const PRODUCTS = [
  { id: 1, name: 'Zoic Liv-Plus', category: 'Liver Tonics', desc: 'Powerful herbal liver restorative for poultry and livestock.', img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Cal-Z-Bone', category: 'Calcium', desc: 'Calcium and Phosphorous supplement with Vitamin D3.', img: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Vet-Herbo Heal', category: 'Wound Care', desc: 'Fast-acting herbal spray for multi-animal wounds.', img: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Growth-Pro', category: 'Feed Supplements', desc: 'Essential amino acids and multi-mineral feed additive.', img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400' },
  { id: 5, name: 'Mast-Clear', category: 'Antibiotics', desc: 'Natural mammary gland health and mastitis care.', img: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=400' },
  { id: 6, name: 'Digesto-Max', category: 'Feed Supplements', desc: 'Appetizer and stomachic powder for better digestion.', img: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=400' },
];

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 bg-cream/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <SectionHeading 
            subtitle="Our Catalog" 
            title="Herbal Veterinary Solutions"
          />
          <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-forest/40 group-focus-within:text-sage transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="pl-12 pr-6 py-3 bg-white rounded-full border border-sage/10 focus:outline-none focus:ring-2 focus:ring-sage/20 w-full md:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-12 pb-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat 
                  ? 'bg-sage text-cream shadow-md shadow-sage/20' 
                  : 'bg-white text-forest/60 hover:bg-sage/5 hover:text-forest'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all group border border-sage/5"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-wider font-bold text-sage rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="px-2 pb-2">
                  <h3 className="text-xl font-bold text-forest mb-2 group-hover:text-sage transition-colors">{product.name}</h3>
                  <p className="text-forest/60 text-sm mb-6 line-clamp-2">{product.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-sage/5">
                    <Button variant="outline" size="sm" className="w-full group/btn">
                      Request Quote <ShoppingBag size={14} className="transition-transform group-hover/btn:scale-110" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex w-20 h-20 rounded-full bg-sage/5 items-center justify-center text-sage/40 mb-6">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-forest mb-2">No products found</h3>
            <p className="text-forest/60">Try searching for something else or change the category.</p>
          </div>
        )}
      </div>
    </div>
  );
};
