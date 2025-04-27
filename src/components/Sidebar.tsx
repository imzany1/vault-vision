
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, ListFilter, Users, Calendar, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 fixed h-full">
      <div className="w-full flex flex-col items-center space-y-6">
        <Link to="/dashboard" className="p-2 rounded-lg bg-eduvault-pink text-white hover:bg-eduvault-darkpink">
          <LayoutGrid className="w-5 h-5" />
        </Link>
        
        <Link to="/resources" className="p-2 rounded-lg text-gray-600 hover:bg-gray-100">
          <ListFilter className="w-5 h-5" />
        </Link>
        
        <Link to="/collaborate" className="p-2 rounded-lg text-gray-600 hover:bg-gray-100">
          <Users className="w-5 h-5" />
        </Link>
        
        <Link to="/schedule" className="p-2 rounded-lg text-gray-600 hover:bg-gray-100">
          <Calendar className="w-5 h-5" />
        </Link>
      </div>
      
      <div className="mt-auto w-full flex flex-col items-center space-y-4 mb-4">
        <Link to="/settings" className="p-2 rounded-lg text-gray-600 hover:bg-gray-100">
          <Settings className="w-5 h-5" />
        </Link>
        
        <Link to="/logout" className="p-2 rounded-lg text-gray-600 hover:bg-gray-100">
          <LogOut className="w-5 h-5" />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
