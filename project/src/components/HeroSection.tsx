import React from 'react';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';

interface HeroSectionProps {
  onStartShopping: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartShopping }) => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-indigo-100">Trusted by 10,000+ customers</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Discover Amazing
              <span className="block text-yellow-300">Products</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 leading-relaxed">
              Shop the latest electronics, fashion, and accessories with fast shipping and unbeatable prices
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={onStartShopping}
                className="flex items-center justify-center space-x-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors group"
              >
                <span>Start Shopping</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Free Shipping</div>
                  <div className="text-sm text-indigo-100">On orders over ₹1000</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Secure Payment</div>
                  <div className="text-sm text-indigo-100">100% protected</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Top Quality</div>
                  <div className="text-sm text-indigo-100">Premium products</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div 
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-20 transition-all cursor-pointer"
                  onClick={() => onStartShopping()}
                >
                  <img
                    src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Electronics"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold">Latest Electronics</h3>
                  <p className="text-sm text-indigo-100">From ₹8,299</p>
                </div>
                <div 
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-20 transition-all cursor-pointer"
                  onClick={() => onStartShopping()}
                >
                  <img
                    src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Fashion"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold">Fashion Trends</h3>
                  <p className="text-sm text-indigo-100">From ₹2,399</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div 
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-20 transition-all cursor-pointer"
                  onClick={() => onStartShopping()}
                >
                  <img
                    src="https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Accessories"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold">Accessories</h3>
                  <p className="text-sm text-indigo-100">From ₹2,099</p>
                </div>
                <div 
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-20 transition-all cursor-pointer"
                  onClick={() => onStartShopping()}
                >
                  <img
                    src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Sports"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold">Sports & Fitness</h3>
                  <p className="text-sm text-indigo-100">From ₹2,899</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold animate-bounce">
              50% OFF
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
              New Arrivals
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;