import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, RefreshCcw } from 'lucide-react';
import { Button } from './Button';

interface FeedbackPageProps {
  onBack: () => void;
}

export const FeedbackPage: React.FC<FeedbackPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    captcha: ''
  });
  
  // Captcha state
  const [captchaChallenge, setCaptchaChallenge] = useState({ num1: 0, num2: 0 });
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Generate simple math captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaChallenge({ num1, num2 });
    setFormData(prev => ({ ...prev, captcha: '' }));
    setError('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sum = captchaChallenge.num1 + captchaChallenge.num2;
    
    if (parseInt(formData.captcha) !== sum) {
      setError('Güvenlik sorusu yanlış, lütfen tekrar deneyiniz.');
      return;
    }

    if (!formData.name.trim() || !formData.message.trim()) {
      setError('Lütfen tüm alanları doldurunuz.');
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      setError('');
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center animate-fadeIn">
        <div className="bg-[#4CAF50] text-white rounded-full p-4 mb-6 shadow-lg">
          <CheckCircle className="h-16 w-16" />
        </div>
        <h2 className="text-2xl font-bold text-[#333] mb-2">Teşekkürler!</h2>
        <p className="text-gray-600 mb-8">Mesajınız bize başarıyla ulaştı.</p>
        <Button onClick={onBack} style={{ width: '200px', height: '60px' }}>
          Ana Sayfaya Dön
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4 animate-fadeIn">
      <div className="flex items-center mb-6">
        <button 
          onClick={onBack}
          className="p-2 rounded-full hover:bg-gray-200 text-[#333] transition-colors"
          aria-label="Geri Dön"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold text-[#333] ml-4">Dilek ve Şikayet</h2>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-[10px] shadow-sm">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Adınız Soyadınız</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-[#FF6347] focus:border-transparent outline-none transition-all"
            placeholder="Adınız..."
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-[#FF6347] focus:border-transparent outline-none transition-all resize-none"
            placeholder="Görüşlerinizi bizimle paylaşın..."
          />
        </div>

        {/* Custom Math Captcha */}
        <div className="mb-6 p-4 bg-gray-50 rounded-[10px] border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="captcha" className="text-sm font-medium text-gray-700">
              Güvenlik Sorusu: <span className="font-bold text-lg ml-1">{captchaChallenge.num1} + {captchaChallenge.num2} = ?</span>
            </label>
            <button 
              type="button" 
              onClick={generateCaptcha}
              className="text-gray-500 hover:text-[#FF6347] transition-colors"
              title="Soruyu Yenile"
            >
              <RefreshCcw className="h-4 w-4" />
            </button>
          </div>
          <input
            type="number"
            id="captcha"
            name="captcha"
            value={formData.captcha}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-[#FF6347] focus:border-transparent outline-none"
            placeholder="Sonucu yazınız"
          />
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-[10px]">
            {error}
          </div>
        )}

        <Button type="submit" fullWidth className="h-[60px]">
          GÖNDER
        </Button>
      </form>
    </div>
  );
};