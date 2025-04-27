
import React from 'react';
import { Link } from 'react-router-dom';

interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  id, 
  title, 
  description, 
  imageUrl 
}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        
        <div className="mt-4 flex space-x-2">
          <Link 
            to={`/resource/${id}`} 
            className="bg-eduvault-pink text-white px-4 py-1 rounded text-sm hover:bg-eduvault-darkpink"
          >
            VIEW
          </Link>
          <Link 
            to={`/resource/${id}/edit`} 
            className="bg-eduvault-pink text-white px-4 py-1 rounded text-sm hover:bg-eduvault-darkpink"
          >
            EDIT
          </Link>
          <button 
            className="bg-eduvault-pink text-white px-4 py-1 rounded text-sm hover:bg-eduvault-darkpink"
            onClick={() => console.log(`Delete resource ${id}`)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
