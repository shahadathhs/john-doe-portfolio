import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex w-52 md:w-80 flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="skeleton h-16 md:h-24 w-16 md:w-24 shrink-0 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20 md:w-28"></div>
            <div className="skeleton h-4 w-20 md:w-36 hidden md:block"></div>
            <div className="skeleton h-4 w-28 md:w-44"></div>
          </div>
        </div>
        <div className="skeleton h-32 md:h-48 w-full"></div>
      </div>
    </div>
  );
};

export default Loading;