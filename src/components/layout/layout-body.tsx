"use client";
import React, { useState } from "react";
import {
  House,
  PanelRightOpen,
  MessageSquareText,
  CircleDollarSign,
  BadgePercent,
  MoveUpRight,
  LogOut,
  Search,
  Users,
  Globe,
  Hash,
  LayoutGrid,
  Flag,
  Bell,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { BiUserCheck } from "react-icons/bi";
import Image from "next/image";
import clsx from "clsx";

import { CgSupport } from "react-icons/cg";
import { RiStore2Line } from "react-icons/ri";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { Input } from "../ui/input";
import Header from "./header";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [show, setShow] = useState({ action: "", icon: "" });
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const sideBar = [
    { name: "home", link: "/dashboard", icon: <House size={24} /> },

    {
      name: "User",
      link: "/user",
      icon: <Users size={24} />,
    },

    {
      name: "Community",
      link: "/community",
      icon: <Globe size={24} />,
    },
    {
      name: "Interests",
      link: "/interest",
      icon: <Hash size={24} />,
    },
    {
      name: "Feeds",
      link: "/feeds",
      icon: <LayoutGrid size={24} />,
    },

    {
      name: "Reporting list",
      link: "/reporting-list",
      icon: <Flag size={24} />,
    },

    {
      name: "Notification",
      link: "/notification",
      icon: <Bell size={24} />,
    },
  ];

  const location = [
    {
      name: "Access Management",
      link: "/management",
      icon: <BiUserCheck size={24} />,
    },
    {
      name: "Admin",
      link: "/admin",
      icon: <HiOutlinePresentationChartLine size={24} />,
    },
    { name: "Support", link: "/support", icon: <CgSupport size={24} /> },
    { name: "Settings", link: "/settings", icon: <Settings size={24} /> },
  ];

  const pathName = usePathname();
  const formattedPathname = pathName.startsWith("/")
    ? pathName.slice(1)
    : pathName;

  return (
    <section className="flex items-start w-full">
      <div
        className={clsx(
          toggle
            ? "w-[272px] h-screen relative bg-[#4534B8]"
            : "w-[88px] h-screen relative bg-[#4534B8]"
        )}
      >
        <div className="h-[72px] px-4 w-full flex items-center justify-between">
          {toggle && (
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image src="/logo.png" alt="Logo" width={272} height={40} />
              </Link>
            </div>
          )}
          <PanelRightOpen
            onClick={handleToggle}
            size={18}
            className="text-white cursor-pointer"
          />
        </div>

        {/* <div className="relative mx-6 rounded-[8px] bg-[#6A5DC6] mb-6">
          <Input
            className="!rounded-[]8px !h-12 placeholder:text-white pl-10 border border-[#6A5DC6]"
            placeholder="Search"
          />
          <div className="absolute top-1/2 left-3 transform  -translate-y-1/2 w-[20px] h-[20px]">
            <Search size={20} color="#FFF" />
          </div>
        </div> */}

        <div
          className="flex flex-col overflow-y-auto transact-scroll"
          style={{ height: "calc(100vh - 72px)" }}
        >
          {/* Menu */}
          <div className="flex flex-col gap-2 mx-3">
            {toggle && (
              <div className="relative mx-6 rounded-[8px] bg-[#6A5DC6] mb-2">
                <Input
                  className="!rounded-[]8px !h-12 placeholder:text-white text-white pl-10 border border-[#6A5DC6]"
                  placeholder="Search"
                />
                <div className="absolute top-1/2 left-3 transform  -translate-y-1/2 w-[20px] h-[20px]">
                  <Search size={20} color="#FFF" />
                </div>
              </div>
            )}

            {sideBar.map(({ name, link, icon }) => (
              <Link
                href={link}
                key={name}
                className={clsx(
                  pathName.startsWith(link)
                    ? "text-[#ECEBF8]  bg-[#6A5DC6] text-sm font-sora font-normal px-3 rounded-[6px]"
                    : "text-sm font-sora font-normal text-[#ECEBF8] hover:text-[#ECEBF8] bg-none px-3   hover:bg-[#6A5DC6] hover:rounded-[6px] transition-all duration-150 ease-in"
                )}
              >
                <div className="flex items-center">
                  <div className="flex items-center gap-2 py-[10px] px-[13pxl] rounded-[6px] w-full">
                    <span>{icon}</span>
                    {toggle && <span>{name}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex-1"></div>

          <div>
            <div className="flex flex-col gap-1 mx-3">
              {location.map(({ name, link, icon }) => (
                <Link
                  href={link}
                  key={name}
                  className={clsx(
                    pathName.startsWith(link)
                      ? "text-[#ECEBF8]  bg-[#6A5DC6] text-sm font-sora font-normal px-3 rounded-[6px]"
                      : "text-sm font-sora font-normal text-[#ECEBF8] hover:text-[#ECEBF8] bg-none px-3   hover:bg-[#6A5DC6] hover:rounded-[6px] transition-all duration-150 ease-in"
                  )}
                >
                  <div className="flex items-center">
                    <div className="flex items-center gap-2 py-[10px] px-[12pxl] rounded-[8px] w-full">
                      <span>{icon}</span>
                      {toggle && <span>{name}</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {toggle && (
              <div className=" border-t border-[#6A5DC6] mt-8 mb-6 mx-6 pb-6 ">
                <div className="flex items-center justify-between pt-6">
                  <div className="flex items-center gap-1">
                    <Image src="/user.png" width={30} height={30} alt="user" />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold text-xs font-sora text-[#ECEBF8]">
                        Duduzilian
                      </h3>
                      <p className="font-normal text-xs font-sora text-[#C7C2EA]">
                        admin@duduzili.com
                      </p>
                    </div>
                  </div>
                  <LogOut color="#FFF" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-screen flex-1 overflow-auto">
        <Header component={formattedPathname} />
        <div className="p-6 bg-[#F5F6FA]">{children}</div>
      </div>
    </section>
  );
};
