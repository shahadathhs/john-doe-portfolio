import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-[#196AA0] items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-4">The requested resource <br /> is Not Found.</h1>
      
    </div>
  );
};

export default NotFound;