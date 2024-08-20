import React from 'react';

const Navbar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <img src="/logo2.png" alt="Logo" className="w-34" />
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
              Exámenes
            </button>
          </li>
          <li className="mb-2">
            <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">
              Mis Videos
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
