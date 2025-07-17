import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';
import ProductFilters from './components/ProductFilters';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import CartModal from './components/CartModal';
import WishlistModal from './components/WishlistModal';
import AccountModal from './components/AccountModal';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';
import { useProducts } from './hooks/useProducts';
import { useCart } from './hooks/useCart';
import { useWishlist } from './hooks/useWishlist';
import { categories } from './data/products';
import { Product, User } from './types/product';

function App() {
  const { products, filters, setFilters, brands } = useProducts();
  const { cartItems, addToCart, removeFromCart, updateQuantity, getTotalItems } = useCart();
  const { wishlistItems, toggleWishlist } = useWishlist();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'products'>('home');
  const [user, setUser] = useState<User | null>(null);

  const handleCategorySelect = (categoryId: string) => {
    setFilters({ ...filters, category: categoryId, searchQuery: '' });
    setCurrentView('products');
  };

  const handleSearch = (query: string) => {
    setFilters({ ...filters, searchQuery: query });
    if (query && currentView === 'home') {
      setCurrentView('products');
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setFilters({ ...filters, category: '', searchQuery: '' });
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    // Clear cart after successful order
    cartItems.forEach(item => removeFromCart(item.id));
    alert('Order placed successfully! Thank you for your purchase.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartCount={getTotalItems()}
        wishlistCount={wishlistItems.length}
        onCartClick={() => setIsCartOpen(true)}
        onWishlistClick={() => setIsWishlistOpen(true)}
        onAccountClick={() => setIsAccountOpen(true)}
        onSearch={handleSearch}
        searchQuery={filters.searchQuery}
      />
      
      {currentView === 'home' ? (
        <>
          <HeroSection onStartShopping={() => setCurrentView('products')} />
          
          <CategoryGrid categories={categories} onCategorySelect={handleCategorySelect} />
        </>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <button
              onClick={handleBackToHome}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              ← Back to Home
            </button>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">
              {filters.searchQuery ? 
                `Search results for "${filters.searchQuery}"` :
                filters.category ? 
                  categories.find(c => c.id === filters.category)?.name || 'Products' : 
                  'All Products'
              }
            </h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <ProductFilters
                filters={filters}
                onFiltersChange={setFilters}
                brands={brands}
                isOpen={isFiltersOpen}
                onToggle={() => setIsFiltersOpen(!isFiltersOpen)}
              />
            </div>
            
            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-gray-600">
                  Showing {products.length} products
                </p>
              </div>
              
              <ProductGrid
                products={products}
                onProductClick={handleProductClick}
                onAddToCart={handleAddToCart}
                onToggleWishlist={toggleWishlist}
                wishlistItems={wishlistItems}
              />
            </div>
          </div>
        </div>
      )}
      
      <Footer />
      
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={toggleWishlist}
        isInWishlist={selectedProduct ? wishlistItems.some(item => item.id === selectedProduct.id) : false}
      />
      
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />
      
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveFromWishlist={(id) => toggleWishlist(wishlistItems.find(item => item.id === id)!)}
        onAddToCart={handleAddToCart}
      />
      
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        user={user}
        onUpdateUser={setUser}
      />
      
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderComplete={handleOrderComplete}
      />
    </div>
  );
}

export default App;
