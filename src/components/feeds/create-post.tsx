'use client';
import React, { useRef, useState } from 'react';
import { Button } from '../ui/button';
import { IoMdAdd } from 'react-icons/io';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import PhoneIcon from '../icons/photo-icon';
import CameraIcon from '../icons/camera-icon';
import MusicSquare from '../icons/music-square';
import MicrophoneIcon from '../icons/microphone-icon';
import HashtagIcon from '../icons/hashtag-blue-icon';
import EditIcon from '../icons/edit-blue-icon';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { encrypt } from '@/lib/encrypt';
import { Textarea } from '../ui/textarea';
import ChatInput from './chat-input';
import { MdClose } from 'react-icons/md';
import AudioPlayer from '../post/audio-player';
import ViewMedia from './view-media';
import WebcamCapture from './webcam-capture';
import { cookieStorage } from '@ibnlanre/portal';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

export interface FormType {
  tags: string[];
  mentions: string[];
  content: string;
  media: File[];
}

export type MediaType = 'image' | 'audio' | 'video';

function formatString(inputString: string) {
  // Step 1: Extract words after # character
  const ashRegex = /{{#([^}]*)}}/g;
  const atRegex = /{{@([^}]*)}}/g;
  let match;
  const tags = [];
  while ((match = ashRegex.exec(inputString)) !== null) {
    tags.push(encrypt(match[1]));
  }

  let atmatch;
  const mentions = [];
  while ((atmatch = atRegex.exec(inputString)) !== null) {
    mentions.push(encrypt(atmatch[1]));
  }

  // Step 2: Format the string
  const formattedString = inputString
    .replace(/{{#([^}]*)}}/g, (match, word) => `#${word}`)
    .replace(/{{@([^}]*)}}/g, (match, word) => `@${word}`);

  return { tags, mentions, formattedString };
}

const formSchema = z.object({
  content: z.string().nonempty('Please enter post content'),
});

export const CreatePost = ({
  community_id,
  joinChannel,
  createComment,
  post_id,
  createCommentLoading,
  parent_id,
  isComment,
}: {
  community_id?: string;
  joinChannel?: () => void;
  createComment?: (payload: { data: FormData; onSuccess: () => void }) => void;
  post_id?: string;
  createCommentLoading?: boolean;
  parent_id?: string;
  isComment?: boolean;
}) => {
  const [visibility, setVisibility] = useState('Public');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [audio, setAudio] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [viewOpened, setViewOpened] = useState(false);
  const [openWebCam, setOpenWebCam] = useState(false);
  const [preview, setPreview] = useState<{
    type: MediaType;
    file: File;
  } | null>(null);

  const { handleSubmit, register, formState, reset, setValue, watch } =
    useForm<FormType>({
      resolver: zodResolver(formSchema),
      mode: 'onChange',
      defaultValues: {
        content: '',
        tags: [],
        media: [],
        mentions: [],
      },
    });

  const handleClick = () => {
    fileInputRef.current?.click(); // Trigger the file input click
  };

  const handleSendMessage = (values: FormType) => {
    const { tags, mentions, formattedString } = formatString(values.content);
    const formData = new FormData();

    Object.entries(values)?.forEach(([k, v]) => {
      if (typeof v === 'string') formData.append(k, encrypt(formattedString));
      else if (k === 'tags' && tags.length) {
        formData.append(k, JSON.stringify(tags));
      } else if (k === 'mentions' && mentions.length) {
        formData.append(k, JSON.stringify(mentions));
      } else if (k === 'media') {
        values.media.forEach((el) => {
          formData.append(k, el);
        });
      }
    });
    if (audio) {
      formData.append('media', audio);
    }
    if (video) {
      formData.append('media', video);
    }
    if (community_id) {
      formData.append('community_id', encrypt(community_id));
    }
    if (post_id) {
      formData.append('post_id', encrypt(post_id));
    }
    if (parent_id) {
      formData.append('parent_id', encrypt(parent_id));
    }
    if (createComment) {
      createComment({
        data: formData,
        onSuccess() {
          reset();
          setAudio(null);
          setVideo(null);
        },
      });
    } else {
      // mutate(formData);
    }
  };

  const unparsedUser = cookieStorage.getItem('user-detail');
  const user = unparsedUser && JSON.parse(unparsedUser);

  // const data = [
  //   {
  //     icon: <GlobeGray />,
  //     name: 'Public',
  //   },
  //   {
  //     icon: <Users />,
  //     name: 'Friends',
  //   },
  //   {
  //     icon: <UserEdit />,
  //     name: 'Custom',
  //   },
  // ];

  // const options = data?.map((item, idx) => (
  //   <Combobox.Option value={item.name} key={idx}>
  //     <div className="flex items-center gap-1">
  //       {item.icon}
  //       <p>{item.name}</p>
  //     </div>
  //   </Combobox.Option>
  // ));


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-9 gap-2 flex items-center text-base rounded-[32px] bg-[#4534B8] font-inter">
          <IoMdAdd className="size-5" />
          Create Post
        </Button>
      </DialogTrigger>
      <DialogContent className=" px-0 py-8 gap-0 w-[clamp(200px,50vw,645px)] shrink [&>button]:hidden !rounded-[20px] max-h-[clamp(345px,75vh,823px)] overflow-auto">
        <DialogTitle className="h-fit bg-[#FCFCFD] pb-5 border-b border-[#F3F3F3] px-6">
          <div className="flex justify-between w-full ">
            <span className="text-2xl font-bold"> Create Post</span>
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
        <form className=" flex flex-col py-8 gap-5 px-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 ">
              <Image
                src={
                  user && user.userDetail.image
                    ? user.userDetail.image
                    : '/user.png'
                }
                width={44}
                height={44}
                alt="user"
              />
              <div className="flex flex-col justify-between">
                <span className="text-[#2A2A2A] text-base font-semibold">
                  Duduzili
                </span>
                <span className="text-[#494850] text-sm ">@duduzili</span>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-[130px] bg-[#F5F5F5] flex items-center justify-between h-[39px] border-[0.5px] border-[#D9D9DB] shadow-none rounded-md px-2">
                <div className="flex items-center gap-1">
                  <Image
                    src="/feeds/world.svg"
                    width={18}
                    height={18}
                    alt="image"
                  />
                  {visibility}
                </div>
                <ChevronDown className="h-3 w-3 text-[#8F8E93]" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <Select
              defaultValue={visibility}
              onValueChange={(val) => setVisibility(val)}
            >
              <SelectTrigger className="w-[130px] bg-[#F5F5F5] h-[39px] border-[0.5px] border-[#D9D9DB] shadow-none">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="public" className="cursor-pointer">
                    Public
                  </SelectItem>
                  <SelectItem value="friends">Friends</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}
          </div>
          <div className="border border-[#D9D9DB] rounded-[16px] h-fit  py-2 pt-[23px]">
            <div className="flex flex-col gap-3 px-4 ">
              <ChatInput
                value={watch().content}
                setValue={(value) => {
                  setValue('content', value);
                }}
              />
              <div className="flex flex-wrap gap-4 pb-2">
                {watch('media')?.map((el, idx) => (
                  <div
                    className="w-[80px] h-[80px] max-sm:w-[60px] max-sm:h-[60px] relative cursor-pointer group rounded-lg shadow-lg border bg-gray-300"
                    key={idx}
                  >
                    <div
                      onClick={() => {
                        setPreview({
                          type: 'image',
                          file: el,
                        });
                        setViewOpened(true);
                      }}
                      className="group-hover:block duration-300 absolute rounded-lg inset-0 hidden bg-black opacity-20"
                    />
                    <span
                      onClick={() => {
                        const filtered = watch('media').filter(
                          (item) => item.name !== el.name
                        );
                        setValue('media', filtered);
                      }}
                      className="bg-[#00000086] absolute rounded-full top-1  right-1 cursor-pointer z-10"
                    >
                      <MdClose color="white" />
                    </span>
                    <Image
                      src={URL.createObjectURL(el)}
                      width={100}
                      height={100}
                      alt={el.name}
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                ))}
                {video ? (
                  <div className="w-[80px] h-[80px] relative cursor-pointer group rounded-lg shadow-lg border bg-gray-300">
                    <div className="group-hover:block duration-300 absolute rounded-lg inset-0 hidden bg-black opacity-20" />
                    <span
                      onClick={() => {
                        setVideo(null);
                      }}
                      className="bg-[#00000086] absolute rounded-full top-1  right-1 cursor-pointer z-10"
                    >
                      <MdClose color="white" />
                    </span>
                    <video
                      onClick={() => {
                        setPreview({
                          type: 'video',
                          file: video,
                        });
                        setViewOpened(true);
                      }}
                      src={URL.createObjectURL(video)}
                      controls={false}
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                ) : null}
                {audio ? (
                  <AudioPlayer
                    name={audio?.name}
                    removeAudio={() => setAudio(null)}
                    url={URL.createObjectURL(audio)}
                    type="mini"
                  />
                ) : null}
              </div>
            </div>
            <div className="border-t border-[#F0F0F1] pt-4 flex items-baseline">
              <div className="px-4 flex justify-between items-center w-full h-full">
                <div className="gap-4 flex items-center">
                  <label htmlFor="image-input">
                    <PhoneIcon className="cursor-pointer" />
                    <input
                      multiple
                      id="image-input"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(event) => {
                        if (event.target.files) {
                          setValue('media', [
                            ...watch('media'),
                            ...Array.from(event.target.files),
                          ]);
                        }
                      }}
                    />
                  </label>
                  <CameraIcon
                    onClick={() => {
                      setOpenWebCam(true);
                    }}
                  />
                  <MusicSquare />
                  <MicrophoneIcon />
                  <HashtagIcon />
                  <EditIcon />
                </div>
                <Button className="bg-[#4534B8] shadow-[0px_4px_14px_0px_#5440D87A] h-12 w-[148px] font-sora rounded-lg text-base">
                  Publish Post
                </Button>
              </div>
            </div>
          </div>
        </form>
        <ViewMedia
          open={viewOpened}
          setOpened={setViewOpened}
          file={preview?.file}
          type={preview?.type}
        />
        {openWebCam && (
          <WebcamCapture
            opened={openWebCam}
            close={() => {
              setOpenWebCam(false);
            }}
            setValue={setValue}
            media={watch('media')}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
