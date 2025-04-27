
import React, { useState } from 'react';

const categories = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Literature",
  "History",
  "Computer Science",
  "Economics"
];

const UploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Mathematics',
    accessPermission: 'public'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(`Updated ${name}:`, value);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, accessPermission: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);
    // Here you would typically call an API endpoint to upload the resource
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Upload New Resource</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Resource Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="eduvault-input"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="eduvault-input min-h-[120px]"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="eduvault-input appearance-none"
            required
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Access Permissions</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="accessPermission"
                value="public"
                checked={formData.accessPermission === 'public'}
                onChange={handleRadioChange}
                className="mr-2"
              />
              Public
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="accessPermission"
                value="private"
                checked={formData.accessPermission === 'private'}
                onChange={handleRadioChange}
                className="mr-2"
              />
              Private
            </label>
          </div>
        </div>
        
        <button type="submit" className="eduvault-btn">
          UPLOAD
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
