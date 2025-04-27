
import React from 'react';
import Sidebar from '../components/Sidebar';
import { Search, Upload } from 'lucide-react';

const Profile = () => {
  return (
    <div className="flex min-h-screen bg-eduvault-lightgray">
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
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <img
                  src="https://randomuser.me/api/portraits/men/41.jpg"
                  alt="Profile"
                  className="w-16 h-16 rounded-md"
                />
                <div>
                  <h1 className="text-2xl font-bold">EduVault User</h1>
                  <p className="text-gray-500">@eduvault_user</p>
                  <div className="flex space-x-4 mt-1">
                    <span className="text-gray-700">4 Courses</span>
                    <span className="text-gray-700">12 Resources</span>
                  </div>
                </div>
              </div>

              <button className="border border-gray-300 bg-white px-4 py-2 rounded text-gray-700 hover:bg-gray-50">
                MANAGE RESOURCES
              </button>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Resource Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-eduvault-pink text-white p-4 rounded">
                  <div className="text-2xl font-bold">16</div>
                  <div className="text-sm">Recent</div>
                </div>
                <div className="bg-pink-200 text-gray-800 p-4 rounded">
                  <div className="text-2xl font-bold">Physics</div>
                  <div className="text-sm">Resource</div>
                </div>
                <div className="bg-eduvault-pink text-white p-4 rounded">
                  <div className="text-2xl font-bold">37</div>
                  <div className="text-sm">Downloads</div>
                </div>
                <div className="bg-eduvault-pink text-white p-4 rounded">
                  <div className="text-2xl font-bold">9</div>
                  <div className="text-sm">Collaboratio</div>
                </div>
                <div className="bg-eduvault-pink text-white p-4 rounded">
                  <div className="text-2xl font-bold">6</div>
                  <div className="text-sm">Resource</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">User Progress</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-eduvault-pink text-white p-4 rounded flex items-center space-x-3">
                  <div className="text-2xl">📚</div>
                  <div>
                    <div className="font-bold">Physics Genius</div>
                    <div className="text-sm">Perfect scores</div>
                  </div>
                </div>
                <div className="bg-eduvault-pink text-white p-4 rounded flex items-center space-x-3">
                  <div className="text-2xl">✏️</div>
                  <div>
                    <div className="font-bold">Math Magician</div>
                    <div className="text-sm">Solved 500+</div>
                  </div>
                </div>
                <div className="bg-eduvault-pink text-white p-4 rounded flex items-center space-x-3">
                  <div className="text-2xl">💡</div>
                  <div>
                    <div className="font-bold">Science</div>
                    <div className="text-sm">Completed all</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Collaboration feed</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-eduvault-pink text-white p-4 rounded flex items-center space-x-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Sophia"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-bold">Sophia C.</div>
                    <div className="text-sm">Shared study guide</div>
                  </div>
                </div>
                <div className="bg-eduvault-pink text-white p-4 rounded flex items-center space-x-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/44.jpg"
                    alt="David"
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-bold">David G.</div>
                    <div className="text-sm">Uploaded research</div>
                  </div>
                </div>
                <button className="border border-gray-300 bg-white p-4 rounded text-gray-700 hover:bg-gray-50 flex items-center justify-center">
                  CONNECT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
