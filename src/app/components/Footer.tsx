import React from 'react';
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Core Courses */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Core Courses</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Programming Fundamentals</li>
              <li>Web2 Using NextJS</li>
              <li>Earn as You Learn</li>
            </ul>
          </div>

          {/* Advanced Courses */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Advanced Courses</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Web 3 and Metaverse</li>
              <li>Cloud-Native Computing</li>
              <li>Artificial Intelligence (AI) and Deep Learning</li>
              <li>Ambient Computing and IoT</li>
              <li>Genomics and Bioinformatics</li>
              <li>Network Programmability and Automation</li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Social Links</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="hover:scale-110 transition duration-300">
                <FaFacebookF className="text-blue-600" />
              </a>
              <a href="#" className="hover:scale-110 transition duration-300">
                <FaYoutube className="text-red-600" />
              </a>
              <a href="#" className="hover:scale-110 transition duration-300">
                <FaTwitter className="text-blue-400" />
              </a>
              <a href="#" className="hover:scale-110 transition duration-300">
                <FaInstagram className="text-pink-600" />
              </a>
              <a href="#" className="hover:scale-110 transition duration-300">
                <FaTiktok className="text-black" />
              </a>
            </div>
            <p className="mt-4 flex items-center text-gray-600">
              <FaEnvelope className="mr-2 text-blue-600" />
              <a href="mailto:education@governorsindh.com" className="hover:underline">
                education@governorsindh.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
