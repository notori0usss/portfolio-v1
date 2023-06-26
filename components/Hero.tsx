import React from 'react';
import PersonalInfo from './PersonalInfo';
import MovingName from './MovingName';
import Navbar from './Navbar';
import MobileInfo from './MobileInfo';
function Hero() {
  return (
    <div className="bg-[#999D9E] w-full max-w-[2000px] h-screen container mx-auto relative overflow-hidden bg-[url('/img/background.jpg')] bg-cover lg:bg-contain bg-no-repeat bg-top">
      <Navbar />
      {/* <div className="h-full w-full flex items-center justify-center relative">
        <Image
          src="/img/background.jpg"
          fill
          alt="background"
          className="object-cover"
        />
      </div> */}

      <PersonalInfo />
      <MovingName />
      <MobileInfo />
    </div>
  );
}

export default Hero;
