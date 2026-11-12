export interface MenuItem {
  id: string;
  name: string;
  category: 'minuman' | 'snack' | 'makanan' | string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  badge?: string;
  isBestseller?: boolean;
  isPopular?: boolean;
}

export interface ItemModifier {
  temperature: 'Dingin' | 'Panas' | string;
  sugar: 'Normal' | 'Kurang Manis' | 'Tanpa Gula' | string;
  ice: 'Es Normal' | 'Sedikit Es' | 'Tanpa Es' | string;
  toppings: string[];
}

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  quantity: number;
  modifier?: ItemModifier;
  notes?: string;
  unitPrice: number;
}

export interface ActiveOrder {
  orderId: string;
  tableNumber: string;
  customerName: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  paymentMethod: 'qris' | 'cash';
  isPaid: boolean;
  status: string;
  createdAt: string;
  kitchenNotes?: string;
  transferProofImage?: string;
}