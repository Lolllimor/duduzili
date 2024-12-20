'use client';
import { PasswordInput } from '@/components/password-input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React, { useState } from 'react';

const paage = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  return (
    <div className="flex w-full bg-[#fafafa] pl-[20px] pr-[32px] relative h-full justify-center overflow-y-auto ">
      <Image
        src="/new-password.png"
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
            <a href="/" className="text-sm text-[#4534B8] cursor-pointer">
              Sign up
            </a>
          </div>
        </div>
        <div className=" flex flex-col mx-auto flex-1  mt-[30%] z-10 gap-10 pb-[30px]">
          <div className="flex flex-col items-center gap-2">
            <p className="text-[32px] text-[#2A2A2A] font-semibold">
              Set new password
            </p>
            <p className="text-[#494850] text-base w-[335px] text-center">
              Your new password must be different from previously used
              passwords.
            </p>
          </div>
          <div className="flex flex-col gap-8 w-[400px]">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col w-full  gap-1.5">
                <label
                  htmlFor="password"
                  className="text-xs text-[#494850] font-semibold"
                >
                  Password
                </label>
                <PasswordInput
                  placeholder="Input password"
                  id="current_password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
              <div className="flex flex-col w-full  gap-1.5">
                <label
                  htmlFor="password"
                  className="text-xs text-[#494850] font-semibold"
                >
                  Confirm Password
                </label>
                <PasswordInput
                  placeholder="Input password"
                  id="current_password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
              <div className=" flex flex-col gap-3 ">
                <div className="flex gap-2 items-center">
                  <Checkbox className="!rounded-full" />
                  <p className="text-[#494850] text-xs">
                    Must be at least 8 characters
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <Checkbox className="!rounded-full" />
                  <p className="text-[#494850] text-xs">
                    Must contain one special character
                  </p>
                </div>
              </div>
              <Button className="bg-[#4534B8] border-none rounded-xl h-11 ">
                Reset Password
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default paage;
