import { Avatar, Badge, Divider } from "@mui/material";
import {
  Cake,
  Calendar,
  CircleUser,
  Copy,
  Eye,
  Heart,
  House,
  Mail,
  PhoneCall,
} from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function ProfileSidebar() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className='p-5 sticky w-[30%] h-screen border rounded-[12px] border-[#F0F0F1] font-sora text-xs overflow-auto top-0 hide-scroll'>
      <h1 className='font-semibold text-base w-full mb-2'>About</h1>
      <Divider />
      <h1 className='text-sm font-semibold mt-3'>Full Name</h1>
      <p>Babatunde Adekunle</p>
      <h1 className='text-sm font-semibold mt-3'>Username</h1>
      <p>@{id}</p>
      <h1 className='text-sm font-semibold mt-3'>Bio</h1>
      <p>
        Looking for an experienced people to help me find people in US to test
        my app. Looking for an experienced people to help me find people in US
        to test my app
      </p>

      <Divider className='my-3' />

      <h1 className='font-semibold text-base w-full mb-2'>Basic Info</h1>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-1'>
          <House size={20} color='#808080' strokeWidth={1.5} />
          <p>Lives in Lagos, Nigeria</p>
        </div>
        <div className='flex items-center gap-1'>
          <CircleUser size={20} color='#808080' strokeWidth={1.5} />
          <p>Male</p>
        </div>
        <div className='flex items-center gap-1'>
          <House size={20} color='#808080' strokeWidth={1.5} />
          <p>Lives in Lagos, Nigeria</p>
        </div>
        <div className='flex items-center gap-1'>
          <Heart size={20} color='#808080' strokeWidth={1.5} />
          <p>Single</p>
        </div>
        <div className='flex items-center gap-1'>
          <Cake size={20} color='#808080' strokeWidth={1.5} />
          <p>Born on April 14</p>
        </div>
        <div className='flex items-center gap-1'>
          <Eye size={20} color='#808080' strokeWidth={1.5} />
          <p>Visible to followers only</p>
        </div>
        <div className='flex items-center gap-1'>
          <Calendar size={20} color='#808080' strokeWidth={1.5} />
          <p>Joined on January 8, 2023</p>
        </div>
      </div>

      <Divider className='my-3' />

      <h1 className='font-semibold text-base w-full mb-2'>Contact Info</h1>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-1'>
          <Mail size={20} color='#808080' strokeWidth={1.5} />
          <p>daviesayodele22@gmail.com</p>
          <Copy
            size={16}
            color='#2724ff'
            strokeWidth={1.5}
            onClick={() => {
              navigator.clipboard.writeText("daviesayodele22@gmail.com");
              toast.success("Email copied");
            }}
          />
        </div>
        <div className='flex items-center gap-1'>
          <PhoneCall size={20} color='#808080' strokeWidth={1.5} />
          <p>+234 806 061 8329</p>
          <Copy
            size={16}
            color='#2724ff'
            strokeWidth={1.5}
            onClick={() => {
              navigator.clipboard.writeText("+234 806 061 8329");
              toast.success("Phone number copied");
            }}
          />
        </div>

        <Divider className='my-3' />

        <h1 className='font-semibold text-base w-full mb-2'>
          Following{" "}
          <span className='px-3 py-1 bg-blue-500 text-white rounded-3xl text-xs'>
            6k
          </span>
        </h1>

        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return (
            <section key={item} className='flex items-center gap-2 mb-2'>
              <Avatar
                src='/newuser.png'
                alt='Babatunde'
                sx={{ width: 30, height: 30 }}
              />
              <div>
                <h3 className='text-sm text-[#2A2A2A]'>Babatunde Adekunle</h3>
                <p>@{id}</p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
