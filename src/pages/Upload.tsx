
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UploadForm from '../components/UploadForm';

const previousUploads = [
  {
    id: '1',
    title: 'Calculus Basics',
    category: 'Mathematics',
    access: 'Public'
  },
  {
    id: '2',
    title: 'World War II Overview',
    category: 'History',
    access: 'Private'
  },
  {
    id: '3',
    title: 'Shakespeare\'s Sonnets',
    category: 'Literature',
    access: 'Public'
  }
];

const Upload = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar active="upload" />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <UploadForm />
            
            <div>
              <h2 className="text-xl font-semibold mb-6">Previously Uploaded Resources</h2>
              
              <div className="space-y-4">
                {previousUploads.map((resource) => (
                  <div 
                    key={resource.id}
                    className="bg-pink-50 rounded-lg p-4"
                  >
                    <h3 className="font-semibold text-lg">{resource.title}</h3>
                    <div className="flex justify-between text-sm mt-2">
                      <p>Category: {resource.category}</p>
                      <p>Access: {resource.access}</p>
                    </div>
                    
                    <div className="flex justify-end space-x-2 mt-4">
                      <button className="border border-gray-300 bg-white text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50">
                        EDIT
                      </button>
                      <button className="bg-eduvault-pink text-white px-3 py-1 rounded text-sm hover:bg-eduvault-darkpink">
                        DELETE
                      </button>
                    </div>
                  </div>
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

export default Upload;
