import { Product, Category } from '../types/product';

export const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', icon: 'Smartphone', count: 5 },
  { id: 'clothing', name: 'Clothing', icon: 'Shirt', count: 8 },
  { id: 'accessories', name: 'Accessories', icon: 'Watch', count: 8 },
];

export const products: Product[] = [
  // Electronics
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 82999,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Latest iPhone with advanced camera system and A17 Pro chip',
    rating: 4.8,
    reviews: 1250,
    inStock: true,
    brand: 'Apple',
    features: ['A17 Pro Chip', '48MP Camera', '5G Ready', 'Face ID']
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24',
    price: 74999,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Flagship Android phone with AI-powered features',
    rating: 4.6,
    reviews: 890,
    inStock: true,
    brand: 'Samsung',
    features: ['AI Camera', '120Hz Display', 'S Pen Compatible', '5G Ready']
  },
  {
    id: 3,
    name: 'MacBook Air M3',
    price: 108999,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Ultra-thin laptop with M3 chip and all-day battery life',
    rating: 4.9,
    reviews: 2100,
    inStock: true,
    brand: 'Apple',
    features: ['M3 Chip', '18-hour Battery', 'Retina Display', 'Touch ID']
  },
  {
    id: 4,
    name: 'Sony WH-1000XM5',
    price: 32999,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Premium noise-canceling wireless headphones',
    rating: 4.7,
    reviews: 1580,
    inStock: true,
    brand: 'Sony',
    features: ['Active Noise Canceling', '30-hour Battery', 'Quick Charge', 'Touch Controls']
  },
  {
    id: 5,
    name: 'iPad Pro 12.9"',
    price: 91999,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Professional tablet with M2 chip and Liquid Retina display',
    rating: 4.8,
    reviews: 950,
    inStock: false,
    brand: 'Apple',
    features: ['M2 Chip', 'Liquid Retina Display', 'Apple Pencil Support', 'Face ID']
  },

  // Clothing
  {
    id: 6,
    name: 'Premium Cotton T-Shirt',
    price: 2399,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Comfortable 100% organic cotton t-shirt in various colors',
    rating: 4.4,
    reviews: 320,
    inStock: true,
    brand: 'EcoWear',
    features: ['100% Organic Cotton', 'Pre-shrunk', 'Machine Washable', 'Various Colors']
  },
  {
    id: 7,
    name: 'Denim Jacket',
    price: 7299,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Classic denim jacket with modern fit and vintage wash',
    rating: 4.5,
    reviews: 180,
    inStock: true,
    brand: 'UrbanStyle',
    features: ['Classic Fit', 'Vintage Wash', 'Button Closure', 'Multiple Pockets']
  },
  {
    id: 8,
    name: 'Running Shoes',
    price: 10599,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Lightweight running shoes with advanced cushioning',
    rating: 4.6,
    reviews: 750,
    inStock: true,
    brand: 'SportMax',
    features: ['Lightweight Design', 'Advanced Cushioning', 'Breathable Mesh', 'Non-slip Sole']
  },
  {
    id: 9,
    name: 'Wool Sweater',
    price: 6499,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Cozy merino wool sweater perfect for cold weather',
    rating: 4.7,
    reviews: 290,
    inStock: true,
    brand: 'WarmWear',
    features: ['100% Merino Wool', 'Machine Washable', 'Soft Touch', 'Various Sizes']
  },

  // Accessories
  {
    id: 10,
    name: 'Leather Wallet',
    price: 4899,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Handcrafted genuine leather wallet with RFID protection',
    rating: 4.5,
    reviews: 420,
    inStock: true,
    brand: 'LeatherCraft',
    features: ['Genuine Leather', 'RFID Protection', 'Multiple Card Slots', 'Coin Pocket']
  },
  {
    id: 11,
    name: 'Smart Watch',
    price: 24999,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Feature-rich smartwatch with health monitoring',
    rating: 4.3,
    reviews: 680,
    inStock: true,
    brand: 'TechTime',
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', '7-day Battery']
  },
  {
    id: 12,
    name: 'Sunglasses',
    price: 12299,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Polarized sunglasses with UV400 protection',
    rating: 4.4,
    reviews: 230,
    inStock: true,
    brand: 'SunShield',
    features: ['Polarized Lenses', 'UV400 Protection', 'Lightweight Frame', 'Case Included']
  },
  {
    id: 13,
    name: 'Backpack',
    price: 6499,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Durable travel backpack with laptop compartment',
    rating: 4.6,
    reviews: 510,
    inStock: false,
    brand: 'TravelGear',
    features: ['Laptop Compartment', 'Water Resistant', 'Multiple Pockets', 'Ergonomic Design']
  }
];