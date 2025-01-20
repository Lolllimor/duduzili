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
  useFetchUnasssociatedTagsQuery,
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
import EditBlackIcon from '@/components/icons/edit-black-icon';

const formSchema = z.object({
  name: z.string().nonempty('Name is required'),
  category: z.string().nonempty('A category is required'),
});

export const AddInterestModal = ({ item }: { item?: any }) => {
  const [open, setOpen] = useState(false);
  const { data } = useFetchUnasssociatedTagsQuery();
  const { data: categoryData } = useFetchInterestCategoryQuery();
  const [createInterest, { isLoading }] = useCreateInterestMutation();
  const [editInterest] = useEditInterestMutation();
  const [inputValue, setInputValue] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);

  const { handleSubmit, register, formState, reset, setValue } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: item?.name || '',
      category: '',
    },
  });
  const { errors, isValid } = formState;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      item
        ? (await editInterest({
            ...data,
            tags: hashtags,
            pf_id: item.pf_id,
          }).unwrap(),
          toast.success('Successfully updated'))
        : (await createInterest({
            ...data,
            tags: hashtags,
          }).unwrap(),
          toast.success('Successfully created')),
        setOpen(false);
      reset();
      setHashtags([]);
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };

  const handleRemoveGroup = (tagToRemove: string) => {
    setHashtags((prevHashtags) =>
      prevHashtags.filter((tag) => tag !== tagToRemove)
    );
  };

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(!open);
        reset();
        setHashtags(item?.tag_name || []);
      }}
    >
      <DialogTrigger
        asChild
        className="text-[#2A2A2A] flex gap-2 items-center text-xs w-full "
      >
        {item ? (
          <div
            onClick={(e) => e.stopPropagation()}
            className="border-none bg-transparent items-center justify-start text-[#292929] h-fit text-start flex"
          >
            <EditBlackIcon />
            Edit interest
          </div>
        ) : (
          <Button className="border-2 border-dashed border-[#D9D9DB] rounded-xl w-[346px] h-[300px] flex justify-center items-center bg-white hover:bg-white gap-6 flex-col ">
            <div className="w-20 h-20 rounded-full bg-[#ECEBF8] flex items-center justify-center">
              <Image
                src="/hashtag.svg"
                alt="hashtag-image"
                width={32}
                height={32}
              />
            </div>
            <span className="text-[#242428] text-base">Add New Topic</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        className="px-6 py-8 gap-5 w-[645px] [&>button]:hidden !rounded-[20px] max-h-[634px] h-fit overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <DialogTitle>
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold">
              {item ? 'Edit' : 'Add'} Interest
            </span>
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
              onKeyDown={(e) => {
                if (e.key === ' ') {
                  e.stopPropagation();
                }
              }}
              placeholder="Enter title"
              className="h-14 border-[#E5E6E8] rounded-sm  placeholder:text-sm placeholder:font-normal placeholder:text-[#ABAEB5] font-normal pl-4"
            />
            {errors.name && (
              <div className="text-red-500 text-sm font-normal pt-1">
                {errors.name.message}
              </div>
            )}
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
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === ' ') {
                    e.preventDefault();
                    if (inputValue.trim()) {
                      setHashtags([...hashtags, inputValue.trim()]);
                      setInputValue('');
                    }
                  }
                }}
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
