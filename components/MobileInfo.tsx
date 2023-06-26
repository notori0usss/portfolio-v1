import React from 'react';
import { BsArrowDownRight } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';

function MobileInfo() {
  return (
    <div className="md:hidden flex justify-between items-center px-4 absolute bottom-4 w-full">
      <div className="text-2xl md:text-3xl lg:text-5xl text-white space-y-2">
        <BsArrowDownRight className=" text-3xl" />
        <h1>Full Stack</h1>
        <h1>Software Engineer</h1>
      </div>
      <div>
        <TfiWorld className="text-4xl text-white animate-spin-slow" />
      </div>
    </div>
  );
}

export default MobileInfo;
