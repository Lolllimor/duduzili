'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { PostContainerProps } from './post-container';
import clsx from 'clsx';
import { Dialog, DialogTrigger } from '../ui/dialog';

const LazyLoadedImage = ({
  url,
  noHeight,
  className,
}: {
  noHeight?: boolean;
  url: string;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(
        noHeight ? 'h-full' : 'h-fit',
        'w-full rounded-2xl',
        className
      )}
    >
      {isVisible && (
        <img
          src={url}
          width={800}
          height={300}
          alt="post image"
          className={clsx(
            noHeight ? 'h-full' : 'h-[300px] max-sm:h-[150px]',
            'w-full rounded-2xl object-cover',
            className
          )}
        />
      )}
    </div>
  );
};

function ImagePostContainer({
  file,
  files,
  name,
  postDetails,
  currentIndex,
  url,
  noHeight,
  className,
}: {
  file?: string;
  url: string;
  files?: string[];
  name: string;
  postDetails?: PostContainerProps;
  currentIndex?: number;
  noHeight?: boolean;
  className?: string;
}) {
  //   const { setModalState } = useContext(ModalContext);
  return (
    // <Dialog>
    //   <DialogTrigger>
    <div
      className={clsx(
        noHeight ? 'h-full' : 'h-fit',
        'relative group w-full rounded-2xl',
        className
      )}
      //   onClick={() => {
      //     setModalState({
      //       opened: true,
      //       file,
      //       files,
      //       currentIndex,
      //       name,
      //       postDetails,
      //     });
      //   }}
    >
      {/* <div
        onClick={() => {
          setModalState({
            opened: true,
            file,
            files,
            currentIndex,
            name,
            postDetails,
          });
        }}
        className="absolute hidden group-hover:block opacity-10 bg-black cursor-pointer inset-0 rounded-2xl"
      /> */}
      <LazyLoadedImage className={className} url={url} noHeight={noHeight} />
    </div>
    //   </DialogTrigger>
    // </Dialog>
  );
}

export default ImagePostContainer;
