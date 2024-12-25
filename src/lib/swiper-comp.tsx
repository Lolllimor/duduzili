"use client";

import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade, Pagination } from "swiper/modules";

// import styles bundle
import "swiper/css/bundle";
// import { SwiperSliderInner } from "./SwiperSliderInner";
interface SwiperCompProps {
  imageSources: string[];
  height: string;
}

const SwiperComp: FC<SwiperCompProps> = ({ imageSources, height }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-0 relative">
      <div className={`relative swiper-new w-full lg:z-1 ${height}`}>
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
              return `<span class="${className}"></span>`;
            },
          }}
        >
          {imageSources.map((src, index) => (
            <SwiperSlide key={index}>
              {/* <SwiperSliderInner imageSrc={src} /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComp;
