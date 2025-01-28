"use client";
import React, { useState } from "react";
import {
  Bell,
  Hash,
  Flag,
  Users,
  House,
  Globe,
  LogOut,
  Search,
  Settings,
  LayoutGrid,
  PanelRightOpen,
} from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { BiUserCheck } from "react-icons/bi";

import { Input } from "../ui/input";
import { CgSupport } from "react-icons/cg";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { cookieStorage } from "@ibnlanre/portal";

export const Sidebar = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  const { push } = useRouter();
  const [show, setShow] = useState({ action: "", icon: "" });
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const sideBar = [
    { name: "Dashboard", link: "/dashboard", icon: <House size={24} /> },

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
      link: "/interests",
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
      name: "Admin log",
      link: "/admin",
      icon: <HiOutlinePresentationChartLine size={24} />,
    },
    { name: "Support", link: "/support", icon: <CgSupport size={24} /> },
    { name: "Settings", link: "/settings", icon: <Settings size={24} /> },
  ];

  const pathName = usePathname();

  const unparsedUser = cookieStorage.getItem("user-detail");
  const user = unparsedUser && JSON.parse(unparsedUser);
  return (
    <div
      className={clsx(
        toggle
          ? "w-[272px] h-screen relative bg-[#4534B8] flex-shrink-0"
          : "w-[88px] h-screen relative bg-[#4534B8] flex-shrink-0"
      )}
    >
      <div className="h-[72px] pr-4 w-full flex items-center justify-between">
        {toggle && (
          <div className="flex items-center space-x-2 ">
            <Link href="/">
              <Image src="/logo-dash.svg" alt="Logo" width={272} height={40} />
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
            <div className="relative rounded-[8px] bg-[#6A5DC6] mb-2">
              <Input
                className="!rounded-[8px] !h-[44px] placeholder:text-white text-white pl-10 border border-[#6A5DC6]"
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
                  ? "text-[#ECEBF8] text-nowrap  bg-[#6A5DC6] text-sm font-sora font-normal px-3 rounded-[6px]"
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
                    ? "text-[#ECEBF8] text-nowrap  bg-[#6A5DC6] text-sm font-sora font-normal px-3 rounded-[6px]"
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
                  <Image
                    src={
                      user && user.userDetail.image
                        ? user.userDetail.image
                        : "/user.png"
                    }
                    width={30}
                    height={30}
                    alt="user"
                  />

                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-xs font-sora text-[#ECEBF8]">
                      Duduzilian
                    </h3>
                    <p className="font-normal text-xs font-sora text-[#C7C2EA]">
                      {user?.userDetail.email}
                    </p>
                  </div>
                </div>
                <LogOut
                  color="#FFF"
                  className="cursor-pointer"
                  onClick={() => {
                    cookieStorage.clear();
                    localStorage.removeItem("dudzili-auth");
                    push("/");
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
