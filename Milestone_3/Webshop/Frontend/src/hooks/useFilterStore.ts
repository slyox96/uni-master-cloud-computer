import { create } from 'zustand';
import { Category } from '../types/Product';

// Interface für den Filterzustand
interface FilterState {
  filterOptions: {
    selectedCategory: Category;
    minPrice: number;
    maxPrice: number;
  };
  setFilterOptions: (filterOptions: { selectedCategory: Category; minPrice: number; maxPrice: number }) => void; 
}

export const useFilterStore = create<FilterState>((set) => ({
  filterOptions: {
    selectedCategory: { id: -1, name: 'All' },
    minPrice: 0,
    maxPrice: 1000,
  },
  setFilterOptions: (filterOptions) => set({ filterOptions }),
}));
