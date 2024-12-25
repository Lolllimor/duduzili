'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React, { useState } from 'react';

const page = () => {
  return (
    <div className="flex w-full bg-[#fafafa] pl-[20px] pr-[32px] relative h-full justify-center overflow-y-auto ">
      <Image
        src="/form-bg.svg"
        alt="bg"
        width={768}
        height={768}
        className="absolute top-[40px] w-full"
      />
      <div className="py-[47px] flex flex-col pl-[32px] pr-[20px] w-full">
        <div className="flex justify-between items-center">
          <Image src="/logo.svg" alt="logo" width={180} height={40} />
          <div className="flex items-center gap-1 ">
            <span className="text-sm">Already have an account? </span>
            <a href="/login" className="text-sm text-[#4534B8] cursor-pointer">
              Sign in
            </a>
          </div>
        </div>
        <div className=" flex flex-col mx-auto flex-1  mt-[30%] z-10 gap-10 pb-[30px]">
          <div className="flex flex-col items-center gap-2">
            <p className="text-[32px] text-[#2A2A2A] font-semibold">
              Recover Account
            </p>
            <p className="text-[#494850] text-base w-[335px] text-center">
              Enter your email address. We will send you a 6-digit verification
              code.
            </p>
          </div>
          <div className="flex flex-col gap-8 w-[400px]">
            <div className="flex flex-col gap-4 w-full">
              <div className=" flex flex-col w-full  gap-1.5">
                <label
                  htmlFor="username"
                  className="text-xs text-[#494850] font-semibold"
                >
                  Email Address
                </label>
                <Input
                  placeholder="Input email address"
                  className="h-12 border-[#D9D9DB] rounded-lg placeholder:text-[#8F8E93] font-normal"
                />
              </div>

              <Button className="bg-[#4534B8] border-none rounded-lg h-11 my-2">
                Generate OTP
              </Button>
              <div className="flex items-center gap-1 ">
                <span className="text-sm">Can’t access your email?</span>
                <a href="/" className="text-sm text-[#4534B8] font-semibold">
                  Use phone number
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
