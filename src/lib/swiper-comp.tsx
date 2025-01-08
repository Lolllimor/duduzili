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
    <div className="flex flex-col gap-0 w-full h-full pt-10">
      <div className={`relative h-full `}>
        <Swiper
          effect="fade"
          onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
          className=" h-full"
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
            <SwiperSlide key={index}>
              <div
                className={`w-full flex justify-center items-center ${
                  src === '/bg-img3.svg' ? 'bg-[url("/pattern.png")]' : ''
                }`}
              >
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
