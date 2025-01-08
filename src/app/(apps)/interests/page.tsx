import Image from 'next/image';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { HiOutlineDotsVertical } from 'react-icons/hi';
import GeneralLayout from '@/components/layout/generalLayout';
import { AddInterestModal } from '@/components/interest/modal/add-interest';
import { InterestCard } from '@/components/interest/interest-card';

function InterestPage() {
  const SeedData = [
    {
      name: 'Football',
      tags: [
        'teachersofinstagram',
        'training',
        'life',
        'studyabroad',
        'health',
        'facts',
        'educationmatters',
        'career',
        'upsc',
        'educational',
        'nonprofit',
        'preschool',
        'fun',
        'engineering',
        'studygram',
        'parenting',
        'follow',
        'onlinelearning',
        'studentlife',
        'elearning',
        'entrepreneur',
        'leadership',
        'family',
        'history',
        'support',
        'like',
        'parents',
        'nature',
        'charity',
        'travel',
      ],
    },
    {
      name: 'Education',
      tags: [
        'teachersofinstagram',
        'training',
        'life',
        'studyabroad',
        'health',
        'facts',
        'educationmatters',
        'career',
        'upsc',
        'educational',
        'nonprofit',
        'preschool',
        'fun',
        'engineering',
        'studygram',
        'parenting',
        'follow',
        'onlinelearning',
        'studentlife',
        'elearning',
        'entrepreneur',
        'leadership',
        'family',
        'history',
        'support',
        'like',
        'parents',
        'nature',
        'charity',
        'travel',
      ],
    },
    {
      name: 'Business',
      tags: [
        'teachersofinstagram',
        'training',
        'life',
        'studyabroad',
        'health',
        'facts',
        'educationmatters',
        'career',
        'upsc',
        'educational',
        'nonprofit',
        'preschool',
        'fun',
        'engineering',
        'studygram',
        'parenting',
        'follow',
        'onlinelearning',
        'studentlife',
        'elearning',
        'entrepreneur',
        'leadership',
        'family',
        'history',
        'support',
        'like',
        'parents',
        'nature',
        'charity',
        'travel',
      ],
    },
    {
      name: 'Art',
      tags: [
        'teachersofinstagram',
        'training',
        'life',
        'studyabroad',
        'health',
        'facts',
        'educationmatters',
        'career',
        'upsc',
        'educational',
        'nonprofit',
        'preschool',
        'fun',
        'engineering',
        'studygram',
        'parenting',
        'follow',
        'onlinelearning',
        'studentlife',
        'elearning',
        'entrepreneur',
        'leadership',
        'family',
        'history',
        'support',
        'like',
        'parents',
        'nature',
        'charity',
        'travel',
      ],
    },
    {
      name: 'Sport',
      tags: [
        'teachersofinstagram',
        'training',
        'life',
        'studyabroad',
        'health',
        'facts',
        'educationmatters',
        'career',
        'upsc',
        'educational',
        'nonprofit',
        'preschool',
        'fun',
        'engineering',
        'studygram',
        'parenting',
        'follow',
        'onlinelearning',
        'studentlife',
        'elearning',
        'entrepreneur',
        'leadership',
        'family',
        'history',
        'support',
        'like',
        'parents',
        'nature',
        'charity',
        'travel',
      ],
    },
    {
      name: 'General',
      tags: [
        'teachersofinstagram',
        'training',
        'life',
        'studyabroad',
        'health',
        'facts',
        'educationmatters',
        'career',
        'upsc',
        'educational',
        'nonprofit',
        'preschool',
        'fun',
        'engineering',
        'studygram',
        'parenting',
        'follow',
        'onlinelearning',
        'studentlife',
        'elearning',
        'entrepreneur',
        'leadership',
        'family',
        'history',
        'support',
        'like',
        'parents',
        'nature',
        'charity',
        'travel',
      ],
    },
  ];
  return (
    <GeneralLayout pageTitle="Interests">
      <hr />
      <div className="flex p-8 gap-8 flex-wrap overflow-auto h-full">
        <AddInterestModal />
        {/* {SeedData.map((item) => (
          <div
            key={item.name}
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
                  <DropdownMenuItem>
                    <AddInterestModal />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-[#ED5556] hover:text-[#ED5556] flex gap-2 items-center text-xs">
                    <Image src="/trash.svg" alt="edit" width={16} height={16} />
                    Delete topic
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex gap-0.5 flex-wrap w-full h-full px-6">
              {item.tags.map((tag, idx) => (
                <p key={idx} className="text-[#494850] text-xs">
                  #{tag}
                </p>
              ))}
            </div>
            <div className="py-[18px] flex justify-end w-full  px-6">
              <span className="text-sm text-[#4534B8] font-semibold">#27</span>
            </div>
          </div>
        ))} */}
        <InterestCard />
      </div>
    </GeneralLayout>
  );
}

export default InterestPage;
