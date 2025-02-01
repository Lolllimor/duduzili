import ReactPlayer from "react-player/lazy";

export default function VideoPlayer() {
  const videos = Array(7).fill("");
  return (
    <div className='flex flex-wrap gap-x-[2%] gap-y-2 justify-betwe'>
      {videos.map((video, index) => {
        return (
          <div key={index} className='w-[32%]'>
            <ReactPlayer
              width=''
              height=''
              url='https://www.youtube.com/watch?v=d-zkQ44Y6Mw'
            />
          </div>
        );
      })}
    </div>
  );
}
