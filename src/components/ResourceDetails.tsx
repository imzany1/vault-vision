
import React from 'react';
import { User, Clock, FileText, AlertTriangle, File, Link as LinkIcon, X } from 'lucide-react';

interface ResourceDetailsProps {
  title: string;
  onClose: () => void;
}

const ResourceDetails: React.FC<ResourceDetailsProps> = ({ title, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">Uploader</span>
            <span className="px-3 py-1 border border-gray-300 rounded text-sm font-medium ml-auto">
              MYSELF
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">Due date</span>
            <span className="px-3 py-1 border border-gray-300 rounded text-sm font-medium ml-auto">
              TODAY
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">Courses</span>
            <span className="px-3 py-1 border border-gray-300 rounded text-sm font-medium ml-auto">
              CLASS NOTES
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">Importance</span>
            <span className="px-3 py-1 bg-eduvault-pink text-white rounded text-sm font-medium ml-auto">
              HIGH
            </span>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6">
          <h3 className="font-semibold mb-4">Attached files</h3>
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
            <div className="flex items-center space-x-2">
              <File className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600">No attachments available</span>
            </div>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium">
              ATTACH FILE
            </button>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="font-semibold mb-4">Resource links</h3>
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
            <div className="flex items-center space-x-2">
              <LinkIcon className="w-5 h-5 text-eduvault-pink" />
              <span className="text-gray-600">No links provided</span>
            </div>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium">
              ADD LINK
            </button>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end space-x-4">
          <button className="eduvault-btn-outline">
            MOVE TO ARCHIVE
          </button>
          <button className="eduvault-btn">
            DELETE RESOURCE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetails;
