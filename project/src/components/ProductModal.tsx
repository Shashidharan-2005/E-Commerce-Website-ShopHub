import React from 'react';
import { X, Star, ShoppingCart, Heart, Check } from 'lucide-react';
import { Product } from '../types/product';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isInWishlist: boolean;
}

const ProductModal: React.FC<ProductModalProps> = ({ 
  product, 
  isOpen, 
  onClose, 
  onAddToCart, 
  onToggleWishlist, 
  isInWishlist 
}) => {
  if (!isOpen || !product) return null;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose} />
        
        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full font-medium">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
              
              {/* Product Details */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <span className="text-sm text-indigo-600 font-medium uppercase tracking-wide">
                    {product.brand}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mt-1">{product.name}</h2>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Price and Actions */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        product.inStock 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      onClick={() => onAddToCart(product)}
                      disabled={!product.inStock}
                      className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                        product.inStock
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span>Add to Cart</span>
                    </button>
                    
                    <button 
                      onClick={() => onToggleWishlist(product)}
                      className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Heart className={`h-5 w-5 ${isInWishlist ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;