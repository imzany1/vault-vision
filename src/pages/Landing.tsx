import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const Landing = () => {
  const [college, setCollege] = useState("")
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar active="home" />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to EduVault</h1>
                <p className="text-lg text-gray-600 mb-8">
                  Discover a secure way to upload, access, and manage your academic resources. 
                  EduVault offers categorized solutions for streamlined resource management.
                </p>
                <div className="space-x-4">
                  <Button asChild>
                    <Link to="/auth">Get Started</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/learn-more">Learn More</Link>
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <img 
                  src="public\undraw_feeling-proud_tdos.svg" 
                  alt="EduVault Secure Storage" 
                  className="w-full max-w-md mx-auto" 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Get Started Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Started</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Sign up or log in using your college email to access all features.
            </p>
            
            <div className="max-w-md mx-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input 
                type="email" 
                placeholder="College Email" 
                className="eduvault-input flex-1"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
              <button className="eduvault-btn whitespace-nowrap">
                VERIFY
              </button>
            </div>
          </div>
        </section>
        
        {/* Additional Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-2">
                  EduVault Inc.<br />
                  123 Academic Lane<br />
                  Education City, EC 12345
                </p>
                <p className="text-gray-600">
                  Email: <a href="mailto:support@eduvault.com" className="text-eduvault-pink hover:underline">support@eduvault.com</a>
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <p className="text-gray-600 mb-4">
                  Stay connected through our social channels.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-eduvault-pink">
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-eduvault-pink">
                    <span>Twitter</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-eduvault-pink">
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/resource-center" className="text-gray-600 hover:text-eduvault-pink">
                      Resource Center
                    </Link>
                  </li>
                  <li>
                    <Link to="/faqs" className="text-gray-600 hover:text-eduvault-pink">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link to="/support" className="text-gray-600 hover:text-eduvault-pink">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Landing;
