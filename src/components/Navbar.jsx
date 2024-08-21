import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4 shadow-lg px-10">
      <div className="flex justify-between items-center">
        <Link to="/dashboard">
          <img src="/logo2.png" alt="Logo" className="w-34" />
        </Link>
      </div>

      <div className="mt-6">
        <ul>
          <li className="mb-4">
            <div className="flex items-center">
              <span className="font-bold text-gray-700">General</span>
            </div>
          </li>
          <li className="mb-2">
            <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">
              <Link to="/examenes">
                Exámenes
              </Link>
            </button>
          </li>
          <li className="mb-2">
            <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">
              <Link to="/videos/me">
                Mis Videos
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
