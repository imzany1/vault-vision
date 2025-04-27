
import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Search for resources", 
  className = ""
}) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="eduvault-input pr-10"
      />
      <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
    </div>
  );
};

export default SearchBar;
