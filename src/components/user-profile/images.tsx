import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const Images = ({ image }: { image: string }) => {
  const imagesArray = Array(6).fill(image);

  return (
    <div className='flex flex-wrap'>
      {imagesArray.map((img, index) => (
        <Dialog key={index}>
          <DialogContent className='max-w-md p-0 bg-inherit border-none'>
            <DialogHeader>
              <DialogTitle className='hidden'>Image Item</DialogTitle>
            </DialogHeader>
            <Image src='/user-img.svg' alt='user' height='1000' width='1000' />
          </DialogContent>
          <div className='w-1/3 p-1'>
            <DialogTrigger asChild>
              <Image
                src={img}
                alt='user'
                className='w-full h-full object-cover'
                width={1000}
                height={1000}
              />
            </DialogTrigger>
          </div>
        </Dialog>
      ))}
    </div>
  );
};

export default Images;
