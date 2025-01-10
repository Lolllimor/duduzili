'use client';
import { useFetchInterestQuery } from '@/redux/features/interestsApi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { AddInterestModal } from './modal/add-interest';
import Image from 'next/image';
import { Skeleton } from '../ui/skeleton';
import { DeleteInterest } from './modal/delete-interest';

export const InterestCard = () => {
  const { data, isLoading } = useFetchInterestQuery();

  return isLoading
    ? Array(15)
        .fill(0)
        .map((item, idx) => (
          <Skeleton
            key={idx}
            className="border border-[#F5F5F5] rounded-xl w-[346px] h-[300px] flex flex-col gap-1 shadow-interest-drop"
          />
        ))
    : data?.data.results.map(
        (
          item: { name: string; pf_id: string; tags_name: String[] },
          idx: any
        ) => (
          <div
            key={idx}
            className="border border-[#F5F5F5] rounded-xl w-[346px] h-[300px] flex justify-center items-center bg-white hover:bg-white  flex-col gap-1 shadow-interest-drop"
          >
            <div className="py-[18px] flex justify-between w-full items-center px-6">
              <span className="text-sm text-[#2A2A2A] font-semibold">
                {item.name}
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <HiOutlineDotsVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="py-2 w-[137px]">
                  <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    <AddInterestModal id={item} />
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="text-[#ED5556] focus:text-[#ED5556] flex gap-2 items-center text-xs"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <DeleteInterest id={item.pf_id} />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex gap-0.5 flex-wrap w-full h-full px-6">
              {item.tags_name.map((tag, idx) => (
                <p key={idx} className="text-[#494850] text-xs">
                  #{tag}
                </p>
              ))}
            </div>
            <div className="py-[18px] flex justify-end w-full  px-6">
              <span className="text-sm text-[#4534B8] font-semibold">
                #{item.pf_id}
              </span>
            </div>
          </div>
        )
      );
};
