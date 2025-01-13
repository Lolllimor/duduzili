'use client';
import {
  useFetchCommunityDashboardQuery,
  useToggleCommunityStatusMutation,
} from '@/redux/features/communityApi';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';
import { ViewMember } from './view-member';
import { useRouter } from 'next/navigation';
import { ProfileDrawer } from './profile-drawer';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';

export const CommunityDetailHeader = ({ id }: { id: string }) => {
  const { back } = useRouter();
  const { data, isLoading } = useFetchCommunityDashboardQuery(id);
  const [toggle] = useToggleCommunityStatusMutation();

  const handleClick = async () => {
    try {
      const res = await toggle({ community_id: id }).unwrap();
      toast.success('Successfully toggled');
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };
  return isLoading ? (
    <div className="min-h-[270px] rounded-lg py-5 px-[22px]  flex flex-col  w-[789px] gap-4">
      <Skeleton className="h-[163px] w-full" />
      <div className="flex flex-col gap-1">
        <Skeleton className="h-[15px]" />
        <Skeleton className="h-[15px]" />
        <Skeleton className="h-[15px]" />
        <Skeleton className="h-[15px]" />
      </div>
    </div>
  ) : (
    <div className="min-h-[270px] relative rounded-xl flex w-full flex-col bg-[#4534B8]">
      <div
        className="h-[163px] w-full rounded-t-xl px-[20px] pt-5 "
        style={{
          backgroundImage: `url(${data.data.cover_photo})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex items-center justify-between w-full">
          <ArrowLeft
            className="w-6 h-6 text-white cursor-pointer"
            onClick={back}
          />
          <Image
            src="/community/circle_more.svg"
            alt="more"
            width={32}
            height={32}
          />
        </div>
      </div>
      <div className=" pt-4 flex gap-11 justify-between  px-[20px] pb-5 ">
        <div className="max-w-[410px] flex gap-2 flex-col ">
          <div className="gap-2 flex items-center">
            <span className="text-white text-base font-bold font-sora">
              {data?.data.name.charAt(0).toUpperCase() +
                data?.data.name.slice(1)}
            </span>
            <ProfileDrawer id={id} />
          </div>
          <p className="text-xs text-white font-sora ">
            {data?.data.description.charAt(0).toUpperCase() +
              data?.data.description.slice(1)}
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <div className="gap-[7px] flex flex-col items-start">
            <span className="font-sora text-xs text-[#D9D9DB]">
              {data?.data.members_count}{' '}
              {data?.data.members_count > 1 ? 'Members' : 'Member'}
            </span>
            <ViewMember id={id}
              trigger={
                <div className="flex items-center cursor-pointer ml-[15px]">
                  {data.data.photo_preview.map(
                    (item: string, idx: number) =>
                      item !== null && (
                        <Image
                          key={idx}
                          alt="Image preview"
                          height={40}
                          width={40}
                          src={item}
                          className="ml-[-15px] rounded-full border-2 border-white max-h-10 max-w-10"
                        />
                      )
                  )}
                </div>
              }
            />
          </div>
        </div>
        <Button
          className="bg-white rounded-[4px] text-sm font-sora text-[#ED5556] h-10 px-[22px] "
          onClick={handleClick}
        >
          Deactivate
        </Button>
      </div>
    </div>
  );
};
