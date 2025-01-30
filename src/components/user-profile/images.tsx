import Image from "next/image";
import React from "react";

export default function Images({
  index,
  image,
}: {
  index: number;
  image: string;
}) {
  return (
    <div key={index} className='w-1/3'>
      <Image
        src={image}
        alt='user'
        className='w-full h-full'
        width='1000'
        height='1000'
      />
    </div>
  );
}
