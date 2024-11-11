import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src="pathto亀川プロジェクトキャラクター.jpg"
              alt="亀川プロジェクトキャラクター"
              className="h-8 w-8"
            />
            <span className="ml-2 text-xl font-bold">亀プロ</span>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Kamegawa Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;