import Image from "next/image";

export default function ImagesCollage() {
  const images = [1, 2];

  return (
    <>
      <div
        className={`grid grid-cols-2 ${
          images.length !== 1 && "grid-rows-2"
        } gap-1`}>
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              src='/deebaba.jpg'
              width='1000'
              height='1000'
              alt='profile'
              className={`w-full max-h-96 object-cover ${
                images.length === 2 && index < 3 && "row-span-2"
              } 
            `}
            />
          );
        })}
      </div>
      {/* <div id='webcrumbs'>
        <div className='grid grid-cols-3 gap-6'>
          <div className='col-span-1 group'>
            <img
              src='https://images.unsplash.com/photo-1682686581498-5e85c7228119'
              className='w-full h-full object-cover rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl'
              alt='Full height'
            />
          </div>
          <div className='col-span-1 space-y-6'>
            <div className='group'>
              <img
                src='https://webcrumbs.cloud/placeholder'
                className='w-full h-[285px] object-cover rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl'
                alt='Half height 1'
              />
            </div>
            <div className='group'>
              <img
                src='https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b'
                className='w-full h-[285px] object-cover rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl'
                alt='Half height 2'
              />
            </div>
          </div>
          <div className='col-span-1 group'>
            <img
              src='https://webcrumbs.cloud/placeholder'
              className='w-full h-[600px] object-cover rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl'
              alt='Full height'
            />
          </div>
        </div>
      </div> */}
    </>
  );
}
