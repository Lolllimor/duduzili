'use client';

import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectFade, Pagination } from 'swiper/modules';

// import styles bundle
import 'swiper/css/bundle';
import Image from 'next/image';


interface SwiperCompProps {
  imageSources: string[];
  height?: string;
}

const SwiperComp: FC<SwiperCompProps> = ({ imageSources, height }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const info = [
    {
      title: 'Introducing Duduzili',
      description:
        'The ultimate social media platform designed to connect people, inspire creativity, and foster meaningful interactions',
    },
    {
      title: 'Post and Share',
      description:
        'Create and share posts, photos, videos, and stories with your friends, family, and the wider Duduzili community.',
    },
    {
      title: 'Discover and Explore',
      description:
        'Find new people to follow, explore trending topics, and discover exciting content from users around the globe.',
    },
  ];
  return (
    <div className="flex flex-col gap-0 w-full h-full  ">
      <div className="h-full mt-20">
        <Swiper
          effect="fade"
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className={` h-full `}
          modules={[Autoplay, EffectFade, Pagination, A11y]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          pagination={{
            clickable: true,
            renderBullet: function (_, className) {
              return `<span class="${className} swiper-btn "></span>`;
            },
          }}
        >
          {imageSources.map((src, index) => (
            <SwiperSlide
              key={index}
              className={`${'bg-[#ECEBF8]'} overflow-clip h-full `}
            >
              <Image
                src="/pattern.png"
                width={100}
                height={100}
                alt="login-image"
                className="h-full w-full opacity-10 -z-20  absolute bg-cover"
              />

              <div className={`w-full flex justify-center items-center  `}>
                <Image
                  src={src}
                  alt="image-slide"
                  height={100}
                  width={436}
                  className="h-fit"
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="h-[50%] bg-[url('/curve.svg')] bg-cover absolute z-30 w-full bottom-0 flex transition-all duration-500 ease-in-out min-h-[430px] ">
            <div className="flex flex-col items-center gap-2 mt-[144px]">
              <h1 className="font-semibold text-[clamp(16px,5vw,30px)]">
                {info[activeIndex]?.title}
              </h1>
              <p className="text-[clamp(12px,2vw,16px)] text-center w-2/3">
                {info[activeIndex]?.description}
              </p>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComp;
