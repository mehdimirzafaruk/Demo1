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
    imageUrl: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=500&q=60",
    category: Category.KEBABS
  },
  {
    id: 2,
    name: "İskender",
    description: "Özel soslu döner, tereyağı ve yoğurt ile servis edilir.",
    price: 380,
    imageUrl: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=60",
    category: Category.KEBABS
  },
  {
    id: 3,
    name: "Lahmacun",
    description: "Taş fırında pişmiş, ince hamurlu ve bol malzemeli.",
    price: 90,
    imageUrl: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=60",
    category: Category.PIDE_LAHMACUN
  },
  {
    id: 7,
    name: "Kaşarlı Pide",
    description: "Odun ateşinde, bol kaşar peynirli.",
    price: 180,
    imageUrl: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=500&q=60",
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
    imageUrl: "https://images.unsplash.com/photo-1599599810769-bcde5a439ddb?auto=format&fit=crop&w=500&q=60",
    category: Category.DESSERTS
  },
  {
    id: 8,
    name: "Künefe",
    description: "Hatay usulü, sıcak şerbetli ve peynirli.",
    price: 160,
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=60",
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
    imageUrl: "https://images.unsplash.com/photo-1596710629170-7547b2c01579?auto=format&fit=crop&w=500&q=60",
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