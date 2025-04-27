
import React from 'react';
import { Search, Upload } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const upcomingDeadlines = [
    {
      id: '1',
      date: '1',
      title: 'Group Study Session',
      time: '10:00-12:00',
      details: 'Weekly study group'
    },
    {
      id: '2',
      date: '2',
      title: 'Programming Workshop',
      time: '10:30-11:30',
      details: '4 out of 6 sessions, Dr.'
    },
    {
      id: '5',
      date: '5',
      title: 'Coding Challenge',
      time: '14:00-15:00',
      details: 'Compulsory participation'
    },
    {
      id: '8',
      date: '8',
      title: 'Research Symposium',
      time: '13:30-15:00',
      details: '5 out of 8 sessions, Prof.'
    },
    {
      id: '9',
      date: '9',
      title: 'Academic discussion',
      time: '15:00-16:30',
      details: 'Weekly group meeting'
    }
  ];

  const resources = [
    {
      id: '1',
      user: 'John',
      title: 'Research paper submission',
      status: 'Submission'
    },
    {
      id: '2',
      user: 'Jane',
      title: 'Final exam preparation',
      status: 'Due tomorrow'
    },
    {
      id: '3',
      user: 'Alex',
      title: 'Group project brainstorming',
      status: 'Submission due'
    }
  ];

  // Mock data for months
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  return (
    <div className="flex min-h-screen bg-eduvault-lightgray">
      <Sidebar />
      
      <div className="ml-16 w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-full max-w-xl">
              <input 
                type="text" 
                placeholder="Search academic resources, categories, and accounts" 
                className="eduvault-input w-full pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="eduvault-btn flex items-center">
                <Upload className="w-4 h-4 mr-2" />
                UPLOAD
              </button>
              <img 
                src="https://randomuser.me/api/portraits/men/41.jpg" 
                alt="User Profile" 
                className="w-10 h-10 rounded-full"
              />
              <span className="hidden md:inline">Welcome to</span>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-bold">Welcome back, student</h1>
            <p className="text-gray-600">
              Explore your academic journey and track progress in learning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h2 className="text-xl font-semibold mb-4">My resources</h2>
                
                <p className="text-gray-500 mb-2">3 new</p>
                
                <div className="space-y-4">
                  {resources.map(resource => (
                    <div key={resource.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={`https://randomuser.me/api/portraits/men/${parseInt(resource.id) + 40}.jpg`} 
                          alt={resource.user}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className="font-medium">{resource.user}</p>
                          <p className="text-gray-600 text-sm">{resource.title}</p>
                        </div>
                      </div>
                      <span className="text-gray-500 text-sm">{resource.status}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors">
                  VIEW ALL UPLOADS
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Total study hours</h2>
                
                <div className="h-[200px] flex items-end justify-between">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="w-3 bg-gray-300" 
                      style={{ height: `${Math.floor(Math.random() * 150) + 20}px` }}
                    ></div>
                  ))}
                </div>
                
                <div className="flex justify-between mt-2">
                  {months.map(month => (
                    <span key={month} className="text-xs text-gray-500">{month}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <div className="flex justify-between mb-4">
                  <h2 className="text-xl font-semibold">January 2023</h2>
                </div>
                
                <div className="grid grid-cols-7 gap-1 mb-6 text-center">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-xs text-gray-500">{day}</div>
                  ))}
                  
                  {Array.from({ length: 31 }, (_, i) => i + 1).map(date => (
                    <div 
                      key={date} 
                      className={`p-1 rounded-full ${date === 5 ? 'bg-eduvault-pink text-white' : ''}`}
                    >
                      <span className="text-xs">{date}</span>
                    </div>
                  ))}
                </div>
                
                <h2 className="text-xl font-semibold mb-4">Upcoming deadlines</h2>
                
                <div className="space-y-4">
                  {upcomingDeadlines.map(deadline => (
                    <div key={deadline.id} className="flex">
                      <div className="mr-4 text-center">
                        <span className="block font-bold text-xl">{deadline.date}</span>
                      </div>
                      <div>
                        <h3 className="font-medium">{deadline.title}</h3>
                        <p className="text-sm text-gray-500">{deadline.details}</p>
                        <p className="text-xs text-gray-400">{deadline.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors">
                  VIEW FULL SCHEDULE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
