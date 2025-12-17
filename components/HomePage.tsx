import React, { useState } from 'react';
import { Button } from './Button';
import { Page } from '../types';
import { UtensilsCrossed, MessageSquareText, Bell, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [waiterCalled, setWaiterCalled] = useState(false);

  const handleCallWaiter = () => {
    setWaiterCalled(true);
    // Simulate a timeout to reset or just leave it as "called" for a bit
    setTimeout(() => {
      setWaiterCalled(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 p-4 animate-fadeIn relative">
      
      {/* Toast Notification for Waiter */}
      {waiterCalled && (
        <div className="absolute top-0 left-0 right-0 z-50 animate-slideDown">
          <div className="mx-auto w-max bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-medium">Garson yönlendirildi!</span>
          </div>
        </div>
      )}

      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-[#333] mb-2">Hoşgeldiniz</h1>
        <p className="text-gray-600">Lütfen yapmak istediğiniz işlemi seçiniz</p>
      </div>

      <div className="flex flex-col w-full max-w-sm gap-4 justify-center items-center">
        <Button 
          onClick={() => onNavigate(Page.MENU)}
          style={{ width: '100%', height: '70px' }}
        >
          <UtensilsCrossed className="mr-3 h-6 w-6" />
          MENÜ
        </Button>

        <Button 
          onClick={handleCallWaiter}
          style={{ width: '100%', height: '70px' }}
          className={`${waiterCalled ? 'bg-green-500 hover:bg-green-600' : 'bg-[#FF6347]'}`}
          disabled={waiterCalled}
        >
          <Bell className="mr-3 h-6 w-6" />
          {waiterCalled ? 'YÖNLENDİRİLİYOR...' : 'GARSON ÇAĞIR'}
        </Button>

        <Button 
          onClick={() => onNavigate(Page.FEEDBACK)}
          variant="secondary"
          style={{ width: '100%', height: '70px' }}
        >
          <MessageSquareText className="mr-3 h-6 w-6" />
          DİLEK / ŞİKAYET
        </Button>
      </div>
    </div>
  );
};