'use client'

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;        
  reset: () => void;  
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-[#196AA0]">
      <h2 className='p-10 text-4xl font-bold '>Something went wrong!</h2>
      <button className="btn btn-outline text-[#196AA0] text-xl"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}