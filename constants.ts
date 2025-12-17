import { MenuItem, Category } from './types';

export const RESTAURANT_NAME = "Lezzet Durağı";
export const RESTAURANT_ADDRESS = "Gazi Bulvarı, No: 45, İzmir";
export const RESTAURANT_PHONE = "+90 232 123 45 67";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Adana Kebap",
    description: "Zırh ile çekilmiş kuzu eti, közlenmiş domates ve biber eşliğinde.",
    price: 320,
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=60",
    category: Category.KEBABS
  },
  {
    id: 2,
    name: "İskender",
    description: "Özel soslu döner, tereyağı ve yoğurt ile servis edilir.",
    price: 380,
    imageUrl: "https://images.unsplash.com/photo-1633336928646-64157cb64140?auto=format&fit=crop&w=500&q=60",
    category: Category.KEBABS
  },
  {
    id: 3,
    name: "Lahmacun",
    description: "Taş fırında pişmiş, ince hamurlu ve bol malzemeli.",
    price: 90,
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=60",
    category: Category.PIDE_LAHMACUN
  },
  {
    id: 7,
    name: "Kaşarlı Pide",
    description: "Odun ateşinde, bol kaşar peynirli.",
    price: 180,
    imageUrl: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&w=500&q=60",
    category: Category.PIDE_LAHMACUN
  },
  {
    id: 4,
    name: "Mercimek Çorbası",
    description: "Günlük taze yapılan süzme mercimek çorbası, kıtır ekmek ile.",
    price: 60,
    imageUrl: "https://images.unsplash.com/photo-1547592166-23acbe3b624b?auto=format&fit=crop&w=500&q=60",
    category: Category.SOUPS
  },
  {
    id: 5,
    name: "Mevsim Salata",
    description: "Taze mevsim yeşillikleri, zeytinyağı ve limon sosu ile.",
    price: 75,
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=60",
    category: Category.SALADS
  },
  {
    id: 6,
    name: "Fıstıklı Baklava",
    description: "Gaziantep fıstığı ile günlük hazırlanan çıtır baklava (3 dilim).",
    price: 150,
    imageUrl: "https://images.unsplash.com/photo-1617806501441-2a4a45c5316c?auto=format&fit=crop&w=500&q=60",
    category: Category.DESSERTS
  },
  {
    id: 8,
    name: "Künefe",
    description: "Hatay usulü, sıcak şerbetli ve peynirli.",
    price: 160,
    imageUrl: "https://images.unsplash.com/photo-1587334206596-f5c22530d977?auto=format&fit=crop&w=500&q=60",
    category: Category.DESSERTS
  },
  {
    id: 9,
    name: "Ayran",
    description: "Bol köpüklü, ev yapımı yayık ayranı.",
    price: 30,
    imageUrl: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=60",
    category: Category.DRINKS
  },
  {
    id: 10,
    name: "Çay",
    description: "Taze demlenmiş Rize çayı.",
    price: 15,
    imageUrl: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=500&q=60",
    category: Category.DRINKS
  },
  {
    id: 11,
    name: "Kola",
    description: "330ml kutu.",
    price: 45,
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=60",
    category: Category.DRINKS
  }
];