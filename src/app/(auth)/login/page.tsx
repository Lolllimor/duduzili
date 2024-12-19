'use client';
import { PasswordInput } from '@/components/password-input';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React, { useState } from 'react';

const paage = () => {
  const [currentPassword, setCurrentPassword] = useState('');
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
            <span className="text-sm">Don’t have an account?</span>
            <a href="/" className="text-sm text-[#4534B8] ">
              Sign up
            </a>
          </div>
        </div>
        <div className=" flex flex-col mx-auto flex-1  mt-[30%] z-10 gap-10 pb-[30px]">
          <div className="flex flex-col items-center gap-2">
            <p className="text-[32px] text-[#2A2A2A] font-semibold">
              Sign in to
              <span className="text-[#4534B8]"> Duduzili</span>
            </p>
            <p className="text-[#494850] text-base">
              Welcome back! Please enter your details.
            </p>
          </div>
          <div className="flex flex-col gap-8 w-[400px]">
            <div className="flex items-center justify-between">
              <Button className="w-[194px] h-12 bg-white border border-[#D9D9DB] rounded-lg flex gap-[13px]">
                <Image src="/google.png" alt="google" width={20} height={20} />
                <p className="text-base text-[#313131]">Google</p>
              </Button>
              <Button className="w-[194px] h-12 bg-white border border-[#D9D9DB] rounded-lg flex gap-[13px]">
                <Image src="/apple.png" alt="apple" width={20} height={20} />
                <p className="text-base text-[#313131]">Apple</p>
              </Button>
            </div>
            <div className="flex items-center w-full gap-[17px]">
              <hr className="w-full" />
              <p className="text-[#494850] text-xs text-nowrap">
                Or continue with
              </p>
              <hr className="w-full" />
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className=" flex flex-col w-full  gap-1.5">
                <label
                  htmlFor="username"
                  className="text-xs text-[#494850] font-semibold"
                >
                  Username/Email Address
                </label>
                <Input
                  placeholder="Username/Email Address"
                  className="h-12 border-[#D9D9DB] rounded-lg placeholder:text-[#8F8E93] font-normal"
                />
              </div>
              <div className="flex flex-col w-full  gap-1.5">
                <label
                  htmlFor="password"
                  className="text-xs text-[#494850] font-semibold"
                >
                  Password
                </label>
                <PasswordInput
                  id="current_password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
              <div className=" flex items-center justify-between my-4">
                <div className="gap-2 flex items-center">
                  <span className="text-[#494850] text-sm">Remember me</span>
                </div>
                <a
                  href="/reset-password"
                  className="text-sm text-[#4534B8] font-semibold"
                >
                  Forgot password?
                </a>
              </div>
              <Button className="bg-[#4534B8] border-none rounded-lg h-11 ">
                Login in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default paage;
