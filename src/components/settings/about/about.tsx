'use client';
import DOMPurify from 'dompurify';
import { IoMdAdd } from 'react-icons/io';
import { EmptyState } from '../empty-state';
import { AboutFilled } from './about-filled';
import { Skeleton } from '@/components/ui/skeleton';
import { AddEditAbout } from '../modals/add-edit-about';

import { useFetchAboutQuery } from '@/redux/features/settingsApi';
import { Button } from '@/components/ui/button';

export const About = () => {
  const { data, isLoading } = useFetchAboutQuery();
 
  return (
    <div className="h-full">
      {isLoading ? (
        <div className="flex flex-col p-8 gap-10 h-full">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">About Duduzili</span>

            <Button
              disabled
              className="h-10 px-4 font-inter rounded-[48px] text-sm font-semibold flex items-center gap-2 bg-[#4534B8] text-white"
            >
              <IoMdAdd className="size-5" />
              About Duduzili
            </Button>
          </div>
          <div className="flex flex-col overflow-auto gap-3 h-full text-xl">
            {Array(25)
              .fill(0)
              .map((item, idx) => (
                <Skeleton key={idx} className="h-3 w-full" />
              ))}
          </div>
        </div>
      ) : data?.data.about ? (
        <AboutFilled />
      ) : (
        <EmptyState
          title="About Duduzili"
          paragraph="Write a descriptive content about the platform for users to learn"
          btn={<AddEditAbout />}
        />
      )}
    </div>
  );
};
