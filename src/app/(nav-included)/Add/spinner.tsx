import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-300 bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"
      >Loading </div>
    </div>
  );
}

export default LoadingSpinner;
