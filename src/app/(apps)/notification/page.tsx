import GeneralLayout from "@/components/layout/generalLayout";
import React from "react";
import Image from "next/image";
import { SearchForm } from "@/components/search-comp";
const page = () => {
  const notification = [
    {
      image: "/user.png",
      name: "Janet Jones @joesmithofduduzili",
      time: "Just now",
      reason: " sent a verification request",
    },
    {
      image: "/user.png",
      name: "Janet Jones @joesmithofduduzili",
      time: "Just now",
      reason: " sent a verification request",
    },
    {
      image: "/user.png",
      name: "Janet Jones @joesmithofduduzili",
      time: "Just now",
      reason: " sent a verification request",
    },
    {
      image: "/user.png",
      name: "Janet Jones @joesmithofduduzili",
      time: "Just now",
      reason: " sent a verification request",
    },
    {
      image: "/user.png",
      name: "Janet Jones @joesmithofduduzili",
      time: "Just now",
      reason: " sent a verification request",
    },
  ];
  return (
    <GeneralLayout
      pageTitle="Notification"
      moreOptions={
        <SearchForm placeholder="Search notification" onSearch={""} />
      }
    >
      <section className="p-6 divide-y divide-[#F0F0F1]">
        {notification.map((item) => (
          <div className="">
            <div className="flex items-center gap-4 p-6">
              <Image src={item.image} width={40} height={40} alt="" />
              <div className="flex flex-col gap-1">
                <div className="flex gap-1 items-center">
                  <span className="font-semibold font-sora text-sm text-[#367EE8]">
                    {`${item.name} `}
                  </span>
                  <span className="font-semibold font-sora text-sm text-[#5E606A]">
                    {item.reason}
                  </span>
                </div>
                <p className="text-xs text-[#8F8E93]">{item.time}</p>
              </div>
            </div>

            {/* <div className="border-t border-[#F0F0F1] w-[100%]" /> */}
          </div>
          // </div>
        ))}
      </section>
    </GeneralLayout>
  );
};

export default page;
