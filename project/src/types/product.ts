export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  brand: string;
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface FilterOptions {
  category: string;
  minPrice: number;
  maxPrice: number;
  brand: string;
  inStock: boolean;
  searchQuery: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export interface CheckoutData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  paymentMethod: 'card' | 'upi';
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}