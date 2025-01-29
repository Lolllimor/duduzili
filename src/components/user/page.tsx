"use client";
import { users } from "@/lib/dummy-data";
import { DataTable } from "@/lib/table-data";
import { ArrowDown, ArrowUp, ChevronDown, Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { paymentHistoryColumns, paymentHistoryData } from "./user-table";
import { useCustomTable } from "@/lib/custom-data";
import { paymentAtom } from "@/lib/query-store";

export const Users = () => {
  const { table } = useCustomTable({
    tableData: paymentHistoryData,
    columns: paymentHistoryColumns,
  });
  return (
    <section className="flex flex-col gap-[56px] p-8">
      {/* User cards */}
      <div className=" bg-[#FFF]">
        <div className="">
          <div className="flex items-center gap-8 justify-between">
            {users?.map((list, idx) => (
              <div
                key={idx}
                className={`flex flex-col bg-[#FFFFFF]  border border-[#EAECF0]  gap-6 shadow-userShadow rounded-[8px] p-6 w-full`}
              >
                <p
                  className={` text-[#494850] font-semibold text-base font-sora `}
                >
                  {list.active}
                </p>

                <div className="flex flex-col gap-4">
                  <p
                    className={` 
                       "text-[#494850] font-semibold font-sora text-2xl `}
                  >
                    {list.number}
                  </p>
                  <div className="flex items-center gap-2">
                    <div
                      className={`font-semibold flex items-center font-sora text-base ${
                        idx === 1 ? "text-[#B42318]" : "text-[#0DBF66]"
                      }`}
                    >
                      {idx === 0 || idx === 2 ? (
                        <div>
                          <ArrowUp size={12} />
                        </div>
                      ) : (
                        idx === 1 && (
                          <div>
                            <ArrowDown size={12} />
                          </div>
                        )
                      )}
                      {list.cap}
                    </div>
                    <p
                      className={` 
                    text-[#667085] font-medium font-inter text-sm `}
                    >
                      {list.month}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User table */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="relative mx-6 rounded-[8px] mb-2">
            <Input
              className="!rounded-[8px] w-[300px] !h-12 placeholder:text-white text-[#667085] pl-10 border border-[#EAECF0]"
              placeholder="Search"
            />
            <div className="absolute top-1/2 left-3 transform  -translate-y-1/2 w-[20px] h-[20px]">
              <Search size={20} color="#667085" />
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                All Genders <ChevronDown />
              </Button>
              {/* <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <DataTable table={table} totalCount={0} queryAtom={paymentAtom} />
      </div>
    </section>
  );
};
