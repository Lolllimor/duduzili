import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function ImagesCollage() {
  const images = Array(5).fill("");

  const gridClassNames = (index: number) => {
    if (images.length === 1) {
      return `col-span-2`;
    }

    if (images.length === 2) {
      return `row-span-2`;
    }

    if (images.length === 3) {
      return `${
        index === 0 ? "row-span-2 col-span-1" : "row-span-1 col-span-1"
      }`;
    }

    if (images.length === 4) {
      return `row-span-1`;
    }
  };

  return (
    <div
      className={`grid grid-cols-2 gap-1 w-full h-96 relative ${
        images.length === 1 ? "grid-rows-1" : "grid-rows-2"
      }`}>
      {images.map((image, index) => {
        return (
          <Dialog key={index}>
            <DialogContent className='max-w-md p-0 bg-inherit border-none'>
              <DialogHeader>
                <DialogTitle className='hidden'>Image Item</DialogTitle>
              </DialogHeader>
              <Image
                src='/deebaba.jpg'
                alt='user'
                height='1000'
                width='1000'
                className="max-h-[80vh] rounded-md"
              />
            </DialogContent>
            <div className={`${gridClassNames(index)}`}>
              <DialogTrigger asChild>
                <Image
                  src='/deebaba.jpg'
                  width={1000}
                  height={1000}
                  alt='profile'
                  className={`object-cover w-full h-full ${
                    index > 3 && "hidden w-0 h-0 absolute -z-10"
                  }`}
                />
              </DialogTrigger>
            </div>
          </Dialog>
        );
      })}
      {images.length > 4 && (
        <div className='w-1/2 h-1/2 bg-slate-50 absolute bg-opacity-70 right-0 bottom-0 text-4xl flex items-center justify-center text-blue-700'>
          +{images.length - 4}
        </div>
      )}
    </div>
  );
}
