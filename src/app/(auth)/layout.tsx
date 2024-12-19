'use client';

import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function AuthLayout({ children }: { children: ReactNode }) {
  const imageSources = ['/bg-img1.png', '/bg-img2.png', '/bg-img3.svg'];
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Function to cycle through the images
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % imageSources.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imageSources.length]);

  return (
    <div className="flex flex-1 h-[100dvh] overflow-auto">
      <div className="flex flex-1">{children}</div>
      <div className=" w-[43%] h-[100vh] bg-[#ECEBF8] relative justify-center flex max-[912px]:hidden">
        <Image
          src="/pattern.png"
          width={100}
          height={100}
          alt="login-image"
          className="h-fit w-full opacity-20 mt-10"
        />
        <Image
          src={imageSources[currentStep]}
          width={100}
          height={100}
          alt="login-image"
          className={` ${
            imageSources[currentStep] === '/bg-img3.svg'
              ? ' pb-[350px] max-w-[450px]'
              : ' '
          } w-fit   absolute h-full pt-10 shrink-0 flex`}
        />
        <div className="h-[44%] bg-[url('/curve.svg')] bg-cover absolute z-10 w-full bottom-0 flex items-center  pt-6">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-semibold text-[clamp(16px,5vw,30px)]">
              Introducing Duduzili
            </h1>
            <p className="text[clamp(12px,2vw,16px)] text-center w-2/3">
              The ultimate social media platform designed to connect people,
              inspire creativity, and foster meaningful interactions
            </p>
          </div>
          <div className="flex">
            <div className="w-1 border-none bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
