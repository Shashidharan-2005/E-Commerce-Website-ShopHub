import React from 'react';
import { Filter, X } from 'lucide-react';
import { FilterOptions } from '../types/product';

interface ProductFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  brands: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFiltersChange,
  brands,
  isOpen,
  onToggle,
}) => {
  const handlePriceChange = (field: 'minPrice' | 'maxPrice', value: string) => {
    onFiltersChange({
      ...filters,
      [field]: value === '' ? 0 : parseInt(value),
    });
  };

  const resetFilters = () => {
    onFiltersChange({
      category: '',
      minPrice: 0,
      maxPrice: 0,
      brand: '',
      inStock: false,
    });
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={onToggle}
          className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50"
        >
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Filter Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block bg-white rounded-lg shadow-md p-6`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={resetFilters}
              className="text-sm text-indigo-600 hover:text-indigo-800"
            >
              Reset
            </button>
            <button onClick={onToggle} className="lg:hidden">
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Price Range */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Price Range</h4>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Min Price</label>
                <input
                  type="number"
                  value={filters.minPrice || ''}
                  onChange={(e) => handlePriceChange('minPrice', e.target.value)}
                  placeholder="₹0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Max Price</label>
                <input
                  type="number"
                  value={filters.maxPrice || ''}
                  onChange={(e) => handlePriceChange('maxPrice', e.target.value)}
                  placeholder="₹99,999+"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Brand Filter */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Brand</h4>
            <select
              value={filters.brand}
              onChange={(e) => onFiltersChange({ ...filters, brand: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">All Brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(e) => onFiltersChange({ ...filters, inStock: e.target.checked })}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-900">In Stock Only</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFilters;