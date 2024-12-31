'use client';
import {
  useFetchSmiQuery,
  useToggleSmiMutation,
} from '@/redux/features/settingsApi';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { Switch } from '@/components/ui/switch';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';

interface SocialItem {
  smi_id: string;
  thumbnail: string;
  name: string;
  description: string;
  is_active: boolean;
}

export const SocialFilled = () => {
  const { data } = useFetchSmiQuery();
  const [toggleSmi] = useToggleSmiMutation();

  const handleChange = async (value: string) => {
    try {
      const res = await toggleSmi({ smi_id: value }).unwrap();

      toast.success('Successfully updated');
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };

  return (
    <div className="flex gap-4 p-8">
      {data.map((item: SocialItem) => (
        <div
          key={item.smi_id}
          className="h-full w-[342px] p-6 rounded-[12px] shadow gap-5 flex flex-col border border-[#E5E6E8] font-switzer"
        >
          <div className="flex justify-between">
            <Image
              src={item.thumbnail}
              alt={item.name}
              width={40}
              height={40}
            />

            <Switch
              checked={item.is_active}
              onCheckedChange={() => handleChange(item.smi_id)}
            />
          </div>
          <div className="flex flex-col justify-between gap-1">
            <span className="text-lg text-[#424348] font-bold">
              {item.name}
            </span>
            <span className="text-[#81848F] text-sm">{item.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
