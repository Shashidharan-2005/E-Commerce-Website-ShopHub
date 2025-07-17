import { useState, useMemo } from 'react';
import { Product, FilterOptions } from '../types/product';
import { products as initialProducts } from '../data/products';

export const useProducts = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: '',
    minPrice: 0,
    maxPrice: 0,
    brand: '',
    inStock: false,
    searchQuery: '',
  });

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      // Search query filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesDescription = product.description.toLowerCase().includes(query);
        
        if (!matchesName && !matchesBrand && !matchesCategory && !matchesDescription) {
          return false;
        }
      }

      // Category filter
      if (filters.category && product.category !== filters.category) {
        return false;
      }

      // Price range filter
      if (filters.minPrice > 0 && product.price < filters.minPrice) {
        return false;
      }
      if (filters.maxPrice > 0 && product.price > filters.maxPrice) {
        return false;
      }

      // Brand filter
      if (filters.brand && product.brand !== filters.brand) {
        return false;
      }

      // Stock filter
      if (filters.inStock && !product.inStock) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const brands = useMemo(() => {
    const uniqueBrands = Array.from(new Set(initialProducts.map(p => p.brand)));
    return uniqueBrands.sort();
  }, []);

  return {
    products: filteredProducts,
    filters,
    setFilters,
    brands,
    allProducts: initialProducts,
  };
};