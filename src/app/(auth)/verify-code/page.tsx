'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import Image from 'next/image';

const page = () => {
  const email = 'geodes******@gmail.com';
  return (
    <div className="flex w-full bg-[#fafafa] pl-[20px] pr-[32px] relative h-full justify-center overflow-y-auto ">
      <Image
        src="/otp.png"
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
              OTP Verification
            </p>
            <p className="text-[#494850] text-base w-[335px] text-center">
              Enter the 6-digit OTP to {email}
            </p>
          </div>
          <div className="flex flex-col gap-8 w-[400px]">
            <div className="flex flex-col gap-4 w-full">
              <InputOTP maxLength={6}>
                <InputOTPSlot
                  index={0}
                  className="border border-[#D9D9DB] rounded-md"
                />
                <InputOTPSlot
                  index={1}
                  className="border border-[#D9D9DB] rounded-md"
                />
                <InputOTPSlot
                  index={2}
                  className="border border-[#D9D9DB] rounded-md"
                />
                <InputOTPSlot
                  index={3}
                  className="border border-[#D9D9DB] rounded-md"
                />
                <InputOTPSlot
                  index={4}
                  className="border border-[#D9D9DB] rounded-md"
                />
                <InputOTPSlot
                  index={5}
                  className="border border-[#D9D9DB] rounded-md"
                />
              </InputOTP>

              <Button className="bg-[#4534B8] border-none rounded-lg h-11 my-2">
                Verify OTP
              </Button>
              <div className="flex items-center gap-1 ">
                <span className="text-sm">Yet to receive the email?</span>
                <a href="/" className="text-sm text-[#4534B8] font-semibold">
                  Resend OTP
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
