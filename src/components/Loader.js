// components/Loader.js

import React from 'react';
import { ClipLoader } from 'react-spinners'; // If using react-spinners

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClipLoader color="#ff0000" size={50} /> {/* Customize as needed */}
    </div>
  );
};

export default Loader;
