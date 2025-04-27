
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-eduvault-pink mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! Resource not found.</p>
          <p className="text-gray-500 mb-8">
            The academic resource you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="eduvault-btn py-3 px-8">
            RETURN TO DASHBOARD
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
