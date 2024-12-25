import Image from 'next/image';
import React from 'react';
import { Switch } from '../ui/switch';

export const SocialMediaIntegration = () => {
  const media = [
    {
      name: 'Facebook',
      description:
        'Integrate your team and businesses for effective communication and databases.',
      icon: '/settings/fbicon.svg',
    },
    {
      name: 'Twitter',
      description:
        'Integrate your team and businesses for effective communication and databases.',
      icon: '/settings/twiticon.svg',
    },
    {
      name: 'Apple',
      description:
        'Integrate your team and businesses for effective communication and databases.',
      icon: '/settings/appleicon.svg',
    },
  ];
    return (
      <div className="flex gap-4 p-8">
        {media.map((item) => (
          <div className="h-full w-[342px] p-6 rounded-[12px] shadow gap-5 flex flex-col border border-[#E5E6E8]   font-switzer">
            <div className=" flex justify-between">
              <Image src={item.icon} alt={item.name} width={40} height={40} />

              <Switch id="airplane-mode" />
            </div>
              <div className="flex flex-col justify-between gap-1">
                <span className="text-lg text-[#424348] font-bold">{item.name}</span>
                <span className="text-[#81848F] text-sm ">
                  {item.description}
                </span>
              </div>
          </div>
        ))}
      </div>
    );
};
