'use client';

import { ReactNode, useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import Image from 'next/image';
import { SearchIcon } from 'lucide-react';
import { useFetchCommunityMembersQuery } from '@/redux/features/communityApi';
import { Skeleton } from '../ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { getInitials } from './profile-drawer';
import { SearchForm } from '../search-comp';

interface Member {
  member_profile_picture: string;
  member_full_name: string;
  member_username: string;
}

interface AdminData {
  data: Member[];
}

export const ViewMember = ({
  trigger,
  id,
}: {
  trigger: ReactNode;
  id: string;
}) => {
  const [debounced, setDebounced] = useState<string>();
  const { data: members, isLoading: membersLoading } =
    useFetchCommunityMembersQuery({ id: id, search: debounced });
  const [searchTerm, setSearchTerm] = useState('');
  
   const handleSearch = (searchTerm: any) => {
     setDebounced(searchTerm);
   };
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogDescription></DialogDescription>
      <DialogContent className="max-w-[470px] rounded-2xl h-4/5 border-none p-0 flex flex-col">
        <DialogTitle className="h-fit border-b border-[#F3F3F3]">
          <div className="flex justify-between w-full py-6 px-[34px]">
            <div className="flex items-center gap-2">
              <span className="text-[18px] font-sora font-bold">
                Community Members
              </span>
              <div className="px-2 h-[29px] font-semibold text-base font-switzer text-[#4534B8] flex items-center justify-center bg-[#ECEBF8] rounded-lg">
                {members?.data.count}
              </div>
            </div>
            <DialogClose aria-label="Close">
              <Image
                src="/close.svg"
                height={36}
                width={36}
                alt="close-btn"
                className="cursor-pointer"
              />
            </DialogClose>
          </div>
        </DialogTitle>
        <div className="px-[34px] flex flex-col gap-4 w-full">
          {/* Search Input */}
     
             <SearchForm placeholder="Search Members" onSearch={handleSearch} classname='w-full' />

          {/* Members List */}
          <div className="flex flex-col gap-4">
            {membersLoading ? (
              <div className="flex flex-col gap-4">
                {[...Array(2)].map((_, idx) => (
                  <div className="flex gap-3" key={idx}>
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div className="flex gap-1.5 flex-col">
                      <Skeleton className="h-3 w-20" />
                      <Skeleton className="h-3 w-12" />
                    </div>
                  </div>
                ))}
              </div>
            ) :(members.data.count ?(
              members?.data.results.map((item: Member, idx: number) => (
                <div className="flex gap-3 items-center" key={idx}>
                  <Avatar className="w-10 h-10 rounded-full">
                    <AvatarImage src={item.member_profile_picture} />
                    <AvatarFallback>
                      {getInitials(item.member_full_name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col font-sora justify-between">
                    <span className="text-sm text-[#2A2A2A]">
                      {item.member_full_name}
                    </span>
                    <span className="text-[#8F8E93] text-xs font-sora">
                      @{item.member_username}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-sm text-[#667085]">
                No members found
              </p>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
