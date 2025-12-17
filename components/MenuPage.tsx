import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../constants';
import { Category } from '../types';
import { ArrowLeft } from 'lucide-react';

interface MenuPageProps {
  onBack: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);

  // Get list of categories that actually have items, plus 'ALL'
  const categories = useMemo(() => {
    const activeCategories = new Set(MENU_ITEMS.map(item => item.category));
    // Filter the Category enum to preserve order but only show used ones + ALL
    const orderedCategories = Object.values(Category).filter(cat => 
      cat === Category.ALL || activeCategories.has(cat)
    );
    return orderedCategories;
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === Category.ALL) {
      return MENU_ITEMS;
    }
    return MENU_ITEMS.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 animate-fadeIn">
      <div className="flex items-center mb-6">
        <button 
          onClick={onBack}
          className="p-2 rounded-full hover:bg-gray-200 text-[#333] transition-colors"
          aria-label="Geri Dön"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold text-[#333] ml-4">Restoran Menüsü</h2>
      </div>

      {/* Category Filter */}
      <div className="flex overflow-x-auto pb-4 mb-4 gap-3 no-scrollbar -mx-4 px-4 scroll-smooth">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedCategory === category
                ? 'bg-[#FF6347] text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-[10px] p-4 shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start"
          >
            <img 
              src={item.imageUrl} 
              alt={item.name} 
              className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] object-cover rounded-lg flex-shrink-0 bg-gray-100"
              loading="lazy"
            />
            <div className="flex flex-col justify-between h-full w-full py-1">
              <div>
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-[#333] mb-1">{item.name}</h3>
                </div>
                <p className="text-xs text-gray-500 mb-1 font-medium">{item.category !== Category.ALL ? "" : item.category}</p>
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">{item.description}</p>
              </div>
              <div className="text-[#FF6347] font-bold text-lg text-right mt-auto">
                {item.price} ₺
              </div>
            </div>
          </div>
        ))}
        {filteredItems.length === 0 && (
          <div className="col-span-full text-center py-10 text-gray-500">
            Bu kategoride henüz ürün bulunmamaktadır.
          </div>
        )}
      </div>
    </div>
  );
};