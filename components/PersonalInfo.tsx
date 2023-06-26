import React from 'react';
import { TfiWorld } from 'react-icons/tfi';
import { BsArrowDownRight } from 'react-icons/bs';

function PersonalInfo() {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 items-center justify-between w-full hidden md:flex">
      <div className="bg-neutral-900 flex items-center gap-8 lg:gap-12 text-white rounded-r-full px-4 lg:px-6 py-4">
        <p className="text-base lg:text-xl font-medium lg:ml-4">
          All the way
          <br /> from Nepal
        </p>
        <div>
          <div className="bg-neutral-400 rounded-full w-16 h-16 flex items-center justify-center">
            <TfiWorld className="text-4xl text-white animate-spin-slow" />
          </div>
        </div>
      </div>
      <div className="text-2xl md:text-3xl lg:text-5xl text-white px-12 space-y-2 -translate-y-4">
        <BsArrowDownRight className="-translate-y-8 text-3xl" />
        <h1>Full Stack</h1>
        <h1>Software Engineer</h1>
      </div>
    </div>
  );
}

export default PersonalInfo;
