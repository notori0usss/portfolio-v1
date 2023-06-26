import React from 'react';
import { BiChevronDown } from 'react-icons/bi';

function Bio() {
  return (
    <div className="py-32 grid grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto container items-start gap-24">
      <div className="col-span-2 space-y-8">
        <p className="text-4xl text-gray-800 font-medium leading-[3.3rem]">
          Experienced full-stack web developer proficient in Django & Next JS.
          Redefining digital possibilities for brands
        </p>
        <p className="">
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </p>
      </div>

      <div>
        <div className="space-y-4 font-semibold p-2 ">
          <h2 className="text-xl font-semibold">Services</h2>
          <div className="flex gap-2 items-center hover:text-[#455CE9] cursor-pointer">
            <BiChevronDown />
            UI/UX Design
          </div>
          <div className="flex gap-2 items-center">
            <BiChevronDown />
            Frontend Development
          </div>
          <div className="flex gap-2 items-center">
            <BiChevronDown />
            Backend Development
          </div>
        </div>
      </div>
      <div className="bg-gray"></div>
    </div>
  );
}

export default Bio;
