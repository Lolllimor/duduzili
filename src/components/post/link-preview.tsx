
import YouTube from 'react-youtube';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LinkPreviewSkeleton from './link-preview-skeleton';
import { ILinkPreviewResponse } from '@/lib/type';

const extractVideoId = (link: string) => {
  // Extract the video ID from the YouTube link
  // Example link formats:
  // https://www.youtube.com/watch?v=VIDEO_ID
  // https://youtu.be/VIDEO_ID
  const regex =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|user\/\S+|attribution_link\/\S+|embed\/videoseries\?list=)|youtu\.be\/)([\w-]{11})(?:\S+)?$/;
  const match = link.match(regex);

  if (match) {
    return match[1];
  }

  return null;
};

function LinkPreview({ text }: { text: string }) {
  const [preview, setPreview] = useState('');
  const [videoId, setVideoId] = useState('');

  const { data, isFetching } = useQuery({
    queryFn: () =>
      axios.get<ILinkPreviewResponse>(
        `/api/link-preview?url=${encodeURIComponent(preview)}`
      ),
    queryKey: ['link-preview', preview],
    enabled: !!preview,
    select: ({ data }) => data,
  });

  useEffect(() => {
    var urlPattern = /\b(https?:\/\/\S+)/gi;
    var urls = text.match(urlPattern);
    let extractedVideoId;
    if (urls?.length) {
      urls.forEach((el) => {
        extractedVideoId = extractVideoId(el);
        if (extractedVideoId) {
          return;
        }
      });
      if (extractedVideoId) {
        setVideoId(extractedVideoId);
        setPreview('');
      } else {
        if (urls?.[0]) {
          setPreview(urls?.[0]);
          //   setPreview({})
          //   axios
          //     .post("https://getlinkpreview.onrender.com/", { url: urls?.[0] })
          //     .then(({ data }) => {
          //       setPreview({ ...data, ogUrl: data?.ogUrl || urls?.[0] });
          //       setVideoId("");
          //       setPreviewLoading(false);
          //     })
          //     .catch((e) => {
          //       setPreviewLoading(false);
          //       // console.log(e);
          //     });
        }
      }
    }
  }, [text]);

  return preview ? (
    isFetching ? (
      <LinkPreviewSkeleton />
    ) : (
      <a target="_blank" href={preview} className="flex flex-col">
        <img
          src={data?.metadata?.image ?? '/internet.png'}
          alt="site metadata image"
          className="h-[149px] object-cover w-full rounded-t-lg"
        />
        <div className="bg-duduzili-neutral-200 rounded-b-lg py-3 px-2 flex flex-col gap-1">
          <p className="text-regular-14 text-duduzili-neutral-600">
            {data?.metadata?.hostname ?? preview}
          </p>
          <h5 className="text-semibold-14 text-duduzili-neutral-1000">
            {data?.metadata?.description}
          </h5>
        </div>
      </a>
    )
  ) : videoId ? (
    <YouTube
      videoId={videoId}
      opts={{
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      }}
    />
  ) : null;
}

export default LinkPreview;
