// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">PracticePro</h3>
          <p className="text-gray-400">
            A full-stack playground for learning Python, React, and Vite.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-300">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
            <li><a href="#" className="hover:text-blue-400">FastAPI Docs</a></li>
            <li><a href="#" className="hover:text-blue-400">GitHub Repo</a></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-300">Connect</h4>
          <p className="text-gray-400">Follow for more dev updates.</p>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
             {/* Icons would go here */}
             <span className="cursor-pointer hover:text-blue-400">Twitter</span>
             <span className="cursor-pointer hover:text-blue-400">LinkedIn</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PracticePro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;