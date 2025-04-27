
import React, { useState } from 'react';
import { ListFilter, Check } from 'lucide-react';
import ResourceDetails from './ResourceDetails';
import Navbar from './Navbar';

interface Resource {
  id: string;
  title: string;
  status: string;
  statusDetail: string;
  thumbnail: string;
}

interface RecentUploadsProps {
  resources: Resource[];
}

const RecentUploads: React.FC<RecentUploadsProps> = ({ resources }) => {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Recent uploads</h2>
        <button>
          <ListFilter className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      <div className="divide-y">
        {resources.map(resource => (
          <div 
            key={resource.id}
            className="py-4 flex items-center justify-between cursor-pointer"
            onClick={() => setSelectedResource(resource.id)}
          >
            <div className="flex items-start space-x-3">
              <div className="mt-1">
                <Check className="w-5 h-5 text-eduvault-pink" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{resource.title}</h3>
                <p className="text-sm text-gray-600">{resource.status}</p>
              </div>
            </div>
            <img 
              src={resource.thumbnail} 
              alt={resource.title}
              className="w-12 h-12 object-cover rounded"
            />
          </div>
        ))}
      </div>
      
      {selectedResource && (
        <ResourceDetails
          title={resources.find(r => r.id === selectedResource)?.title || ''}
          onClose={() => setSelectedResource(null)}
        />
      )}
    </div>
  );
};

export default RecentUploads;
