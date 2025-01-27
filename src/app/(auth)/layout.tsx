"use client";

import SwiperComp from "@/lib/swiper-comp";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";


function AuthLayout({ children }: { children: ReactNode }) {
  const imageSources = ["/bg-img1.png", "/bg-img2.png", "/bg-img3.svg"];


  return (
    <div className="flex h-full">
      <div className="flex flex-1 overflow-auto">{children}</div>
      <div className=" w-[43%]  bg-[#ECEBF8] relative justify-center md:flex hidden   overflow-auto h-full">

        <SwiperComp imageSources={imageSources}   />
 
       
      </div>
    </div>
  );
}

export default AuthLayout;
