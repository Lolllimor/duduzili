'use client';

import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectFade, Pagination } from 'swiper/modules';

// import styles bundle
import 'swiper/css/bundle';
import Image from 'next/image';
// import { SwiperSliderInner } from "./SwiperSliderInner";
interface SwiperCompProps {
  imageSources: string[];
  height: string;
}

const SwiperComp: FC<SwiperCompProps> = ({ imageSources, height }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-0 w-full h-full mt-20 ">
      <div>
        <Swiper
          effect="fade"
          loop
          onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
          className={` h-full `}
          modules={[Autoplay, EffectFade, Pagination, A11y]}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          pagination={{
            clickable: true,
            renderBullet: function (_, className) {
              return `<span class="${className} "></span>`;
            },
          }}
        >
          {imageSources.map((src, index) => (
            <SwiperSlide
              key={index}
              className={`${
                activeIndex === 2 && 'bg-[#ECEBF8]'
              } overflow-clip h-full `}
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
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComp;
