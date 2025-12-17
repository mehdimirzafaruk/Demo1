import React, { useState } from 'react';
import { Page } from './types';
import { HomePage } from './components/HomePage';
import { MenuPage } from './components/MenuPage';
import { FeedbackPage } from './components/FeedbackPage';
import { RESTAURANT_NAME, RESTAURANT_ADDRESS, RESTAURANT_PHONE } from './constants';
import { ChefHat, Phone, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderContent = () => {
    switch (currentPage) {
      case Page.MENU:
        return <MenuPage onBack={() => setCurrentPage(Page.HOME)} />;
      case Page.FEEDBACK:
        return <FeedbackPage onBack={() => setCurrentPage(Page.HOME)} />;
      case Page.HOME:
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5] font-sans text-[#333]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-[70px] flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setCurrentPage(Page.HOME)}
          >
            <div className="bg-[#FF6347] p-2 rounded-full text-white">
              <ChefHat className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#333]">{RESTAURANT_NAME}</span>
          </div>
          
          {/* Simple header nav/contact mostly for aesthetics on desktop */}
          <div className="hidden sm:flex items-center gap-4 text-sm text-gray-500">
             <span className="flex items-center gap-1"><Phone className="h-4 w-4"/> {RESTAURANT_PHONE}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div className="text-center md:text-left">
              <h4 className="font-bold text-[#333] mb-2">{RESTAURANT_NAME}</h4>
              <p className="text-sm text-gray-500 max-w-xs">
                Geleneksel lezzetleri modern sunumla buluşturan, damak tadınıza layık sofralar.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4 text-[#FF6347]" />
                <span>{RESTAURANT_ADDRESS}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4 text-[#FF6347]" />
                <span>{RESTAURANT_PHONE}</span>
              </div>
            </div>

          </div>
          <div className="border-t border-gray-100 mt-6 pt-4 text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} {RESTAURANT_NAME}. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;