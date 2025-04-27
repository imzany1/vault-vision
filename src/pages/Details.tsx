
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import RecentUploads from '../components/RecentUploads';
import ResourceDetails from '../components/ResourceDetails';
import { Search, Upload, Cloud, Filter } from 'lucide-react';

const recentResources = [
  {
    id: "1",
    title: "Academic materials",
    status: "New resource uploaded",
    statusDetail: "Just now",
    thumbnail: "https://via.placeholder.com/80/7951A8/FFFFFF?text=AM"
  },
  {
    id: "2",
    title: "Academic materials",
    status: "Resource reviewed and approved",
    statusDetail: "2 hours ago",
    thumbnail: "https://via.placeholder.com/80/7951A8/FFFFFF?text=AM"
  },
  {
    id: "3",
    title: "Resource brainstorming",
    status: "Resource reviewed and approved",
    statusDetail: "Yesterday",
    thumbnail: "https://via.placeholder.com/80/758AA8/FFFFFF?text=RB"
  },
  {
    id: "4",
    title: "Resource illustration and",
    status: "Resource put on hold for review",
    statusDetail: "2 days ago",
    thumbnail: "https://via.placeholder.com/80/A87551/FFFFFF?text=RI"
  },
  {
    id: "5",
    title: "Resource compilation",
    status: "Resource reviewed and approved",
    statusDetail: "3 days ago",
    thumbnail: "https://via.placeholder.com/80/51A875/FFFFFF?text=RC"
  }
];

const Details = () => {
  const [showDetails, setShowDetails] = useState(true);
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-16 w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-full max-w-xl">
              <input 
                type="text" 
                placeholder="Search for resources" 
                className="eduvault-input w-full pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="eduvault-btn flex items-center">
                <Upload className="w-4 h-4 mr-2" />
                UPLOAD
              </button>
              <button className="p-2 bg-white border border-gray-200 rounded-md shadow-sm">
                <Cloud className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 bg-eduvault-pink text-white rounded-md shadow-sm">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RecentUploads resources={recentResources} />
            
            {showDetails && (
              <ResourceDetails
                title="Academic materials"
                onClose={() => setShowDetails(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
