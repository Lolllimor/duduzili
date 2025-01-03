'use client';

import React, { useContext, useRef, useState } from 'react';
import clsx from 'clsx';
import { PostContainerProps } from './post-container';
import DuduziliPlayIcon from '../icons/duduzili-play-icon';

function VideoContainer({
  file,
  url,
  files,
  name,
  postDetails,
  currentIndex,
  isProfile,
  className,
}: {
  file?: string;
  url: string;
  files?: string[];
  name: string;
  postDetails?: PostContainerProps;
  currentIndex?: number;
  isProfile?: boolean;
  className?: string;
}) {
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  //   const { setModalState } = useContext(ModalContext);
  return (
    <div
      className={clsx(
        isProfile ? 'h-fit w-full' : ' h-full w-full',
        'relative',
        className
      )}
    >
      {!showControls && (
        <div
          style={{ background: 'rgba(0, 0, 0, 0.4)' }}
          className="absolute inset-0 flex rounded-2xl items-center justify-center"
        >
          <DuduziliPlayIcon
            // onClick={() => {
            //   // setShowControls(true);
            //   // videoRef.current?.play();
            //   setModalState({
            //     opened: true,
            //     file,
            //     files,
            //     currentIndex,
            //     name,
            //     postDetails,
            //   });
            // }}
            className="cursor-pointer z-20"
          />
        </div>
      )}
      {isProfile ? (
        <video
          controls={showControls}
          ref={videoRef}
          className="h-full w-full rounded-lg"
          src={url}
        ></video>
      ) : (
        <video
          controls={showControls}
          ref={videoRef}
          className="h-full w-full rounded-2xl"
          src={url}
        ></video>
      )}
    </div>
  );
}

export default VideoContainer;
