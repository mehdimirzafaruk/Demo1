export enum Page {
  HOME = 'HOME',
  MENU = 'MENU',
  FEEDBACK = 'FEEDBACK'
}

export enum Category {
  ALL = 'Tümü',
  KEBABS = 'Kebaplar',
  PIDE_LAHMACUN = 'Pide & Lahmacun',
  SOUPS = 'Çorbalar',
  SALADS = 'Salatalar',
  DESSERTS = 'Tatlılar',
  DRINKS = 'İçecekler'
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: Category;
}

export interface FeedbackForm {
  name: string;
  message: string;
  captchaAnswer: string;
}