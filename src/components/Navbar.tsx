
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Upload, Library, Settings } from 'lucide-react';

interface NavbarProps {
  active?: 'home' | 'upload' | 'resources' | 'manage';
}

const Navbar: React.FC<NavbarProps> = ({ active }) => {
  return (
    <header className="w-full bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          
          <Link to="/" className="text-lg flex justify-center items-center gap-1 font-bold"><Building className="h-5 w-5" />EduVault</Link>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`${active === 'home' ? 'text-eduvault-pink' : 'text-gray-700'} hover:text-eduvault-pink`}
          >
            Home
          </Link>
          <Link 
            to="/upload" 
            className={`${active === 'upload' ? 'text-eduvault-pink' : 'text-gray-700'} hover:text-eduvault-pink`}
          >
            Upload Resources
          </Link>
          <Link 
            to="/resources" 
            className={`${active === 'resources' ? 'text-eduvault-pink' : 'text-gray-700'} hover:text-eduvault-pink`}
          >
            Resources
          </Link>
          <Link 
            to="/manage" 
            className={`${active === 'manage' ? 'text-eduvault-pink' : 'text-gray-700'} hover:text-eduvault-pink`}
          >
            Manage Resources
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
