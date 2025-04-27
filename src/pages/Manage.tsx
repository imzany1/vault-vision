
import React, { useState, useEffect } from 'react';
import { Search, Upload, Filter } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { resources } from '../store/resources';
import { Resource, Task } from '../types';
import { useToast } from '@/hooks/use-toast';

// Define tasks data
const tasks: Task[] = [
  {
    id: '1',
    title: 'Review Calculus Material',
    description: 'Review the calculus materials for the upcoming exam',
    dueDate: new Date('2025-05-01'),
    priority: 'high',
    status: 'in-progress',
    categoryId: '1'
  },
  {
    id: '2',
    title: 'Prepare History Presentation',
    description: 'Prepare slides for the World War II presentation',
    dueDate: new Date('2025-04-29'),
    priority: 'high',
    status: 'pending',
    categoryId: '2'
  },
  {
    id: '3',
    title: 'Literature Essay Draft',
    description: 'Complete first draft of Shakespeare essay',
    dueDate: new Date('2025-05-05'),
    priority: 'medium',
    status: 'pending',
    categoryId: '3'
  },
  {
    id: '4',
    title: 'Physics Lab Report',
    description: 'Compile data and write quantum physics lab report',
    dueDate: new Date('2025-04-30'),
    priority: 'medium',
    status: 'in-progress',
    categoryId: '4'
  },
  {
    id: '5',
    title: 'Database Design Project',
    description: 'Complete entity relationship diagram for database project',
    dueDate: new Date('2025-05-03'),
    priority: 'low',
    status: 'pending',
    categoryId: '5'
  }
];

const Manage = () => {
  const [filterBy, setFilterBy] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResources, setFilteredResources] = useState<Resource[]>(resources);
  const { toast } = useToast();

  useEffect(() => {
    filterResources();
  }, [filterBy, searchQuery]);

  const filterResources = () => {
    let filtered = [...resources];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(resource => 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (filterBy) {
      filtered = filtered.filter(resource => {
        switch(filterBy) {
          case 'course':
            return resource.courseName;
          case 'category':
            return resource.category;
          case 'uploader':
            return resource.uploader;
          case 'semester':
            return true; // In a real app, you'd filter by semester if available
          default:
            return true;
        }
      });
    }

    setFilteredResources(filtered);
  };

  const handleUpload = () => {
    toast({
      title: "Upload initiated",
      description: "Redirecting to upload page...",
    });
  };

  const handleAdvancedFilters = () => {
    toast({
      title: "Advanced Filters",
      description: "This feature will be available soon!",
    });
  };

  return (
    <div className="flex min-h-screen bg-eduvault-lightgray">
      <Sidebar />
      
      <div className="ml-16 w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-full max-w-xl">
              <input 
                type="text" 
                placeholder="Search resources" 
                className="eduvault-input w-full pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                className="eduvault-btn flex items-center"
                onClick={handleUpload}
              >
                <Upload className="w-4 h-4 mr-2" />
                UPLOAD
              </button>
              <button className="border border-eduvault-pink text-eduvault-pink px-4 py-2 rounded">
                FLTE
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-semibold mb-6">Filter by subject</h2>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {['course', 'semester', 'category', 'uploader'].map((filter) => (
                <button 
                  key={filter}
                  className={`border rounded px-4 py-1 ${
                    filterBy === filter 
                      ? 'border-eduvault-pink text-eduvault-pink' 
                      : 'border-gray-300'
                  }`}
                  onClick={() => setFilterBy(filterBy === filter ? '' : filter)}
                >
                  {filter.toUpperCase()}
                </button>
              ))}
            </div>
            
            <h2 className="text-xl font-semibold mb-4">Resources list ({filteredResources.length})</h2>
            
            <div className="space-y-4">
              {filteredResources.map(resource => (
                <div key={resource.id} className="flex items-center">
                  <div className="mr-2 text-eduvault-pink">✓</div>
                  <div className="flex-1">
                    <p className="font-medium">{resource.title}</p>
                    <p className="text-sm text-gray-500">{resource.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button 
                      className={`px-3 py-1 text-white rounded ${
                        resource.importance === 'high' 
                          ? 'bg-eduvault-pink' 
                          : resource.importance === 'medium'
                          ? 'bg-yellow-500'
                          : 'bg-gray-400'
                      }`}
                    >
                      {resource.importance?.toUpperCase()} PRIORITY
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="mt-4 border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-50"
              onClick={handleAdvancedFilters}
            >
              ADVANCED FILTERS
            </button>
          </div>
          
          <h2 className="text-xl font-semibold mb-4">Tasks for this week</h2>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Task</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Submission</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Learning stage</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Task priority</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Collaboration</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Task assignee</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {tasks.map(task => (
                  <tr key={task.id}>
                    <td className="py-3 px-4">
                      <span className="text-eduvault-pink mr-2">✓</span>
                      {task.title}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500">{task.dueDate.toLocaleDateString()}</td>
                    <td className="py-3 px-4">
                      <button className="border border-gray-300 rounded px-2 py-1 text-xs">
                        START
                      </button>
                    </td>
                    <td className="py-3 px-4">
                      <span 
                        className={`px-2 py-1 text-white rounded text-xs ${
                          task.priority === 'high' ? 'bg-eduvault-pink' : 'bg-yellow-500'
                        }`}
                      >
                        {task.priority === 'high' ? 'HIGH PRIORITY' : 'MODERATE'}
                      </span>
                    </td>
                    <td className="py-3 px-4">{task.categoryId}</td>
                    <td className="py-3 px-4">
                      <img 
                        src={`https://randomuser.me/api/portraits/men/${parseInt(task.id) + 40}.jpg`}
                        alt="Assignee" 
                        className="w-8 h-8 rounded"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
