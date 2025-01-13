'use client';
import { CommunityDetailHeader } from '@/components/community/community-detail-header';
import { CommunityPost } from '@/components/community/community-post';
import { getInitials } from '@/components/community/profile-drawer';
import GeneralLayout from '@/components/layout/generalLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { normalizeUrlParams } from '@/lib/normalize-url';
import {
  useFetchCommunityAdminQuery,
  useFetchCommunityDashboardQuery,
  useFetchCommunityMembersQuery,
} from '@/redux/features/communityApi';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

interface Member {
  member_profile_picture: string;
  member_full_name: string;
  member_username: string;
}

interface AdminData {
  data: Member[];
}

function Page({ params }: { params: Promise<{ name: string; id: string }> }) {
  const { name, id } = React.use(params);
  const router = useRouter();

  const { data, isLoading } = useFetchCommunityAdminQuery(id);
  const { data: members, isLoading: membersLoading } =
    useFetchCommunityMembersQuery(id);

  useEffect(() => {
    if (!id) {
      router.replace('/management');
    }
  }, [id, router]);

  return (
    <GeneralLayout
      pageTitle={[
        'Communities',
        `${normalizeUrlParams(name.charAt(0).toUpperCase() + name.slice(1))}`,
      ]}
    >
      <div className="flex flex-1 bg-[#F5F6FA] p-6 h-full">
        <div className="gap-5 grid grid-cols-[2fr_1fr] w-full">
          <div className="flex flex-col gap-5 overflow-auto min-w-[600px]">
            <CommunityDetailHeader id={id} />
            <CommunityPost id={id} />
          </div>
          <div className="min-w-[311px] bg-white rounded-xl h-full w-full px-4 py-5 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="font-sora text-base font-semibold">
                  Administrators
                </span>
                <div className="bg-[#4534B8] border border-white text-white flex justify-center items-center rounded-full  w-5 h-5 text-[10px] font-sora">
                  {data?.data.length}
                </div>
              </div>
              <div className="gap-4 flex flex-col">
                {isLoading ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <Skeleton className="w-10 h-10 rounded-full" />
                      <div className="flex gap-1.5 flex-col">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-3 w-12" />
                      </div>
                    </div>
                  </div>
                ) : data.data.length ? (
                  data?.data.map((item: Member, idx: number) => (
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
                        <span className="text-[#8F8E93] text-xs">
                          @{item.member_username}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="w-full">No admin</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 pt-5 ">
                <span className="font-sora text-base font-semibold">
                  Members
                </span>
                <div className="bg-[#4534B8] border border-white text-white flex justify-center items-center rounded-full  w-5 h-5 text-[10px] font-sora">
                  {members?.data.count}
                </div>
              </div>
              <div className="gap-4 flex flex-col">
                {membersLoading ? (
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                      <Skeleton className="w-10 h-10 rounded-full" />
                      <div className="flex gap-1.5 flex-col">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-3 w-12" />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Skeleton className="w-10 h-10 rounded-full" />
                      <div className="flex gap-1.5 flex-col">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-3 w-12" />
                      </div>
                    </div>
                  </div>
                ) : members?.data.count ? (
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
                        <span className="text-[#8F8E93] text-xs">
                          @{item.member_username}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No member</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default Page;
