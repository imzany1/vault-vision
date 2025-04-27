
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import ResourceCard from '../components/ResourceCard';

const categories = ["All", "Documents", "Images", "Videos"];

const resourcesData = [
  {
    id: "1",
    title: "Resource Title",
    description: "Brief description of the resource content for quick overview.",
    imageUrl: "https://via.placeholder.com/400x300/FFD700/000000?text=Resource+1"
  },
  {
    id: "2",
    title: "Resource Title",
    description: "Brief description of the resource content for quick overview.",
    imageUrl: "https://via.placeholder.com/400x300/87CEEB/000000?text=Resource+2"
  },
  {
    id: "3",
    title: "Resource Title",
    description: "Brief description of the resource content for quick overview.",
    imageUrl: "https://via.placeholder.com/400x300/90EE90/000000?text=Resource+3"
  }
];

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar active="resources" />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-start">
            {/* Sidebar */}
            <div className="w-full md:w-64 mb-8 md:mb-0 md:mr-8">
              <SearchBar placeholder="Search Resources" className="mb-6" />
              
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`w-full py-2 px-4 text-left border rounded transition-colors ${
                      activeCategory === category 
                        ? 'border-eduvault-pink text-eduvault-pink' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Main content */}
            <div className="flex-1">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resourcesData.map(resource => (
                  <ResourceCard
                    key={resource.id}
                    id={resource.id}
                    title={resource.title}
                    description={resource.description}
                    imageUrl={resource.imageUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
