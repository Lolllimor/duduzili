"use client";

import SwiperComp from "@/lib/swiper-comp";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";


function AuthLayout({ children }: { children: ReactNode }) {
  const imageSources = ["/bg-img1.png", "/bg-img2.png", "/bg-img3.svg"];


  return (
    <div className="flex h-full">
      <div className="flex flex-1 overflow-auto">{children}</div>
      <div className=" w-[43%]  bg-[#ECEBF8] relative justify-center md:flex hidden overflow-clip">

        <SwiperComp imageSources={imageSources} height="100px"  />
 
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
