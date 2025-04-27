import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is EduVault?",
      answer: "EduVault is a platform designed to help you manage and share educational resources efficiently."
    },
    {
      question: "How do I upload resources?",
      answer: "You can upload resources by navigating to the 'Upload Resources' page from the navigation bar."
    },
    {
      question: "Can I manage my uploaded resources?",
      answer: "Yes, you can manage your uploaded resources by visiting the 'Manage Resources' page."
    },
    {
      question: "Who can access my resources?",
      answer: "You can control who accesses your resources by setting permissions during the upload process."
    },
    {
      question: "How do I contact support?",
      answer: "You can contact support by emailing us at support@eduvault.com."
    }
  ];

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar active="resources" />
      <main className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h1>
        <div className="space-y-4 max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white shadow-sm"
            >
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full text-left px-4 py-3 text-xl font-semibold text-eduvault-pink focus:outline-none"
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-gray-700 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Faq;