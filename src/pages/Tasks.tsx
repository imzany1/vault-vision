
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Search, Plus, Mail, Clock, Bell, Tag, User, X } from 'lucide-react';

const Tasks = () => {
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  
  return (
    <div className="flex min-h-screen bg-eduvault-lightgray">
      <Sidebar />
      
      <div className="ml-16 w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold mr-2">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative w-64">
                <input 
                  type="text" 
                  placeholder="Search for tasks" 
                  className="eduvault-input w-full pl-10"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <button 
                className="eduvault-btn flex items-center"
                onClick={() => setShowNewTaskModal(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                NEW TASK
              </button>
              <button className="p-2 bg-white border border-gray-200 rounded-md shadow-sm">
                <Mail className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="font-semibold mb-4">Task list</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="text-left py-3 px-4">Task name</th>
                      <th className="text-left py-3 px-4">Task priority</th>
                      <th className="text-left py-3 px-4">Team member</th>
                      <th className="text-left py-3 px-4">Assignee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 flex items-center">
                        <span className="text-eduvault-pink mr-2">✓</span> 
                        First task
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-3 py-1 bg-eduvault-pink text-white rounded text-xs">
                          URGENT
                        </span>
                      </td>
                      <td className="py-3 px-4">Marketing</td>
                      <td className="py-3 px-4">
                        <img 
                          src="https://randomuser.me/api/portraits/men/41.jpg" 
                          alt="Assignee" 
                          className="w-8 h-8 rounded"
                        />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 flex items-center">
                        <span className="text-eduvault-pink mr-2">✓</span> 
                        Second task
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-3 py-1 bg-yellow-500 text-white rounded text-xs">
                          MODERATE
                        </span>
                      </td>
                      <td className="py-3 px-4">Resource</td>
                      <td className="py-3 px-4">
                        <img 
                          src="https://randomuser.me/api/portraits/women/41.jpg" 
                          alt="Assignee" 
                          className="w-8 h-8 rounded"
                        />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 flex items-center">
                        <span className="text-eduvault-pink mr-2">✓</span> 
                        Third task
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-3 py-1 bg-eduvault-pink text-white rounded text-xs">
                          URGENT
                        </span>
                      </td>
                      <td className="py-3 px-4">Collaborative</td>
                      <td className="py-3 px-4">
                        <img 
                          src="https://randomuser.me/api/portraits/men/42.jpg" 
                          alt="Assignee" 
                          className="w-8 h-8 rounded"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showNewTaskModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-semibold">Add New Task</h2>
              <button 
                onClick={() => setShowNewTaskModal(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <input 
                  type="text"
                  placeholder="Enter task name"
                  className="eduvault-input w-full"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600">Date</span>
                <div className="flex space-x-2 ml-auto">
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium">
                    TODAY
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium">
                    TOMORROW
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600">Reminders</span>
                <div className="flex space-x-2 ml-auto">
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium">
                    IN AN HOUR
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600">Importance</span>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium ml-auto">
                  SET PRIORITY
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <Tag className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600">Categories</span>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium ml-auto">
                  NO CATEGORY
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600">Assign task</span>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium ml-auto">
                  ASSIGN TO
                </button>
              </div>
              
              <div>
                <h3 className="text-gray-600 mb-2">Task details</h3>
                <textarea 
                  className="eduvault-input w-full min-h-[120px]" 
                  placeholder="Task details"
                ></textarea>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between">
              <button 
                className="eduvault-btn-outline"
                onClick={() => setShowNewTaskModal(false)}
              >
                CANCEL
              </button>
              <button className="eduvault-btn">
                SAVE TASK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
  function AlertTriangle({ className }: { className?: string }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    );
  }
};

export default Tasks;
