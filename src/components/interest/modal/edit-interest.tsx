'use client';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  useCreateInterestMutation,
  useEditInterestMutation,
  useFetchInterestCategoryQuery,
} from '@/redux/features/interestsApi';
import { z } from 'zod';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import { zodResolver } from '@hookform/resolvers/zod';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';

const formSchema = z.object({
  name: z.string().nonempty('Name is required'),
  category: z.string().nonempty('A category is required'),
});

export const EditInterestModal = ({ item }: { item?: any }) => {
  const [open, setOpen] = useState(false);
  const { data: categoryData } = useFetchInterestCategoryQuery();
  const [editInterest] = useEditInterestMutation();
  const [inputValue, setInputValue] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);

  const { handleSubmit, register, formState, reset, setValue } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      category: '',
    },
  });
  const { errors, isValid } = formState;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await editInterest({
        ...data,
        tags: hashtags,
        pf_id: item.pf_id,
      }).unwrap(),
        toast.success('Successfully updated');

      setOpen(false);
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      if (inputValue.trim()) {
        setHashtags([...hashtags, inputValue.trim()]);
        setInputValue('');
      }
    }
  };
  const handleRemoveGroup = (tagToRemove: string) => {
    setHashtags((prevHashtags) =>
      prevHashtags.filter((tag) => tag !== tagToRemove)
    );
  };

  useEffect(() => {
    if (item) {
      setValue('name', item.name);
      setValue('category', item.category);
      setHashtags(item.tags_name);
    }
  }, []);

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(!open);
        reset();
        setHashtags(item.tags_name || []);
      }}
    >
      <DialogTrigger
        onClick={(e) => e.stopPropagation()}
        className="text-[#2A2A2A] flex gap-2 items-center text-xs "
      >
        <div className=" flex gap-2 items-center text-xs">
          <Image src="/edit.svg" alt="edit" width={16} height={16} />
          Edit interest
        </div>
      </DialogTrigger>
      <DialogContent className="px-6 py-8 gap-5 w-[645px] !rounded-[20px] max-h-[634px] h-fit overflow-auto">
        <DialogTitle>
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold">Edit Interest</span>
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

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className=" flex flex-col w-full  gap-1.5">
            <label
              htmlFor="interest title"
              className="text-sm text-[#242428] font-medium font-poppins"
            >
              Interest Title
            </label>
            <Input
              {...register('name')}
              placeholder="Enter title"
              className="h-14 border-[#E5E6E8] rounded-sm  placeholder:text-sm placeholder:font-normal placeholder:text-[#ABAEB5] font-normal pl-4"
            />
          </div>
          <div className=" flex flex-col w-full  gap-1.5">
            <label
              htmlFor="interest title"
              className="text-sm text-[#242428] font-medium font-poppins"
            >
              Category
            </label>
            <Select onValueChange={(value) => setValue('category', value)}>
              <SelectTrigger className="h-14 border-[#E5E6E8] rounded-sm  pl-4">
                <SelectValue
                  className=" placeholder:text-sm placeholder:font-normal placeholder:text-[#ABAEB5] font-normal text-sm"
                  placeholder="Select a category"
                  {...register('category')}
                />
              </SelectTrigger>
              <SelectContent>
                {categoryData?.data.results.map(
                  (item: { name: string }, idx: any) => (
                    <SelectItem key={idx} value={item.name}>
                      {item.name}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
            {errors.category && (
              <div className="text-red-500 text-sm font-normal pt-1">
                {errors.category.message}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <div className=" flex flex-col w-full  gap-1.5">
              <label
                htmlFor="hashtag"
                className="text-sm text-[#242428] font-medium font-poppins"
              >
                Hashtags
              </label>
              <Input
                onClick={(e) => e.stopPropagation()}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyUp={handleKeyUp}
                placeholder="Enter tag"
                className="h-14 border-[#E5E6E8] rounded-sm  placeholder:text-sm placeholder:font-normal placeholder:text-[#ABAEB5] font-normal pl-4"
              />
            </div>
            <div className=" flex gap-2.5 items-center flex-wrap">
              {hashtags.map((item) => (
                <div
                  key={item}
                  className="shadow-sm h-11 px-4 flex gap-2 rounded-lg text-base bg-transparent border text-[#242428] border-[#D0D5DD] hover:bg-transparent items-center"
                >
                  #{item}
                  <IoClose
                    className="size-5 cursor-pointer "
                    onClick={() => handleRemoveGroup(item)}
                  />
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={(e) => e.stopPropagation()}
            type="submit"
            className="bg-[#4534B8] border-none rounded-[32px] h-[51px] w-full text-white flex justify-center items-center mt-5 "
          >
            Save Interest
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
