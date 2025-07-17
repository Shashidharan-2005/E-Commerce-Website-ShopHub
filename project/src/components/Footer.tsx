import React from 'react';
import { ShoppingBag, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <ShoppingBag className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">ShopHub</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted online shopping destination for electronics, fashion, and accessories. 
              We're committed to providing quality products at competitive prices.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-indigo-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-indigo-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-indigo-400 cursor-pointer transition-colors" />
            </div>
          </div>

          

         

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-400 mr-3" />
                <span className="text-gray-300">support@shophub.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-400 mr-3" />
                <span className="text-gray-300">+91 6366708878</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-indigo-400 mr-3 mt-1" />
                <span className="text-gray-300">
                  No 225 ShopHub Stores 
                   Yelahanka,
                  Bengaluru - 560089
                  
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              At ShopHub, we believe shopping should be simple, enjoyable, and accessible to everyone. 
              Our mission is to connect customers with high-quality products from trusted brands while 
              providing exceptional customer service and competitive prices. We're committed to creating 
              a seamless online shopping experience that exceeds expectations.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ShopHub. All rights reserved. | Designed with ❤️ for great shopping experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;