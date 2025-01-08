import React, { useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa6';
import WaveSurfer from 'wavesurfer.js';
import classes from './slider.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import { MdClose } from 'react-icons/md';
import { formatAudioTime } from '@/lib/format-audio-time';
import SkipBackward from '../icons/skip-backward';
import { Slider } from '../ui/slider';
import SkipForward from '../icons/skip-forward';

const formWaveSurferOptions = (ref: HTMLElement | null) => ({
  container: ref as HTMLElement,
  waveColor: '#ddd',
  progressColor: '#333',
  cursorWidth: 0,
  barWidth: 1,
  barHeight: 1,
  responsive: true,
  height: 100,
  normalize: true,
  partialRender: false,
});

function AudioPlayer({
  url,
  type = 'normal',
  name,
  removeAudio,
  miniHeight,
  miniWidth,
  withClose = true,
  width,
  onClick,
  noControls,
  controlsclassName,
  containerclassName,
  labelclassName,
}: {
  withClose?: boolean;
  noControls?: boolean;
  url: string;
  type?: 'mini' | 'normal';
  name?: string;
  removeAudio?: () => void;
  miniHeight?: string;
  miniWidth?: string;
  width?: string;
  containerclassName?: string;
  labelclassName?: string;
  controlsclassName?: string;
  onClick?: () => void;
}) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [time, setTime] = useState({
    totalTime: 0,
    currentTime: 0,
  });
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(false);
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url, [0, 0] as any);

    wavesurfer.current.on('ready', () => {
      if (wavesurfer.current) {
        setTime({
          totalTime: wavesurfer.current.getDuration(),
          currentTime: wavesurfer.current.getCurrentTime(),
        });
      }
    });

    wavesurfer.current.on('audioprocess', function () {
      if (wavesurfer.current) {
        setTime({
          totalTime: wavesurfer.current.getDuration(),
          currentTime: wavesurfer.current.getCurrentTime(),
        });
        if (
          wavesurfer.current.getDuration() ===
          wavesurfer.current.getCurrentTime()
        )
          setPlaying(false);
      }
    });

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.un('audioprocess', () => {});
        wavesurfer.current.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const handlePlayPause = () => {
    setPlaying(!playing);
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
    }
  };

  return type === 'mini' ? (
    <div
      onClick={onClick}
      style={{ height: miniHeight, width: miniWidth }}
      className={clsx(
        'w-[80px] h-[80px] relative cursor-pointer group rounded-lg shadow-lg border bg-gray-300',
        miniHeight
      )}
    >
      <div className="absolute flex items-center justify-center rounded-lg inset-0">
        <div id="waveform" className="hidden" ref={waveformRef} />
        {noControls ? null : (
          <div className="cursor-pointer">
            {!playing ? (
              <FaPlay onClick={handlePlayPause} color="white" size={18} />
            ) : (
              <FaPause onClick={handlePlayPause} color="white" size={18} />
            )}
          </div>
        )}
      </div>
      {withClose ? (
        <span
          onClick={removeAudio}
          className="bg-[#00000086] absolute rounded-full top-1  right-1 cursor-pointer z-10"
        >
          <MdClose color="white" />
        </span>
      ) : null}

      <Image
        src="/audio-label.jpg"
        width={100}
        height={100}
        alt="audio label"
        className="w-full h-full rounded-lg object-cover"
      />
    </div>
  ) : (
    <div
      className={clsx(
        'min-h-[200px] max-sm:min-h-[100px]',
        ' grid grid-cols-[29%_1fr] bg-[url(/community/Audio.svg)] h-[263px] w-[607px] bg-center bg-contain rounded-[14px]',
        width,
        containerclassName
      )}
    >
      <div
        className={clsx('min-h-[200px] max-sm:min-h-[100px]', labelclassName)}
      >
        <img
          className="w-full h-full object-cover rounded-l-[14px]"
          src="/audio-label.jpg"
          alt="audio label"
        />
      </div>
      <div
        className={clsx(
          'pr-5 py-7 justify-between',
          'flex flex-col pl-8',
          controlsclassName
        )}
      >
        <div className="flex flex-col">
          <h2 className="text-semibold-24 text-[#EAF4F4]">{name}</h2>
          {/* <p className="text-[17.7px] leading-[28.31px] text-[#EAF4F4]">
              Camila Cabello ft, Young Thug
            </p> */}
        </div>
        <div className="flex flex-col gap-[28px]">
          <div id="waveform" className="hidden" ref={waveformRef} />
          <div className="flex max-sm:hidden items-center gap-3">
            <span className="text-[17.7px] max-sm:text-sm w-[50px] leading-[21.24px] text-[#EAF4F4]">
              {formatAudioTime(time.currentTime)}
            </span>
            <Slider
              //   classNames={classes}
              //   styles={{
              //     thumb: {
              //       display: 'none',
              //     },
              //   }}
              value={[time?.currentTime]}
              onValueChange={(val) => {
                const value = val[0];
                setTime({
                  ...time,
                  currentTime: value,
                });
                wavesurfer?.current?.seekTo(
                  value / wavesurfer?.current?.getDuration()
                );
              }}
              max={time?.totalTime}
              //   label={null}
            />
            <span className="text-[17.7px] max-sm:text-sm leading-[21.24px] text-[#EAF4F4]">
              {formatAudioTime(time.totalTime)}
            </span>
          </div>
          <div className="hidden max-sm:flex flex-col items-center gap-3">
            <Slider
              //   classNames={classes}
              //   styles={{
              //     thumb: {
              //       display: 'none',
              //     },
              //   }}
              value={[time?.currentTime]}
              onValueChange={(val) => {
                const value = val[0];
                setTime({
                  ...time,
                  currentTime: value,
                });
                wavesurfer?.current?.seekTo(
                  value / wavesurfer?.current?.getDuration()
                );
              }}
              max={time?.totalTime}
              //   label={null}
            />
            <div className="flex justify-center">
              <span className="text-sm max-sm:text-sm w-[50px] leading-[21.24px] text-[#EAF4F4]">
                {formatAudioTime(time.currentTime)}
              </span>
              <span className="text-sm max-sm:text-sm leading-[21.24px] text-[#EAF4F4]">
                /
              </span>
              <span className="text-sm w-[50px] text-right max-sm:text-sm leading-[21.24px] text-[#EAF4F4]">
                {formatAudioTime(time.totalTime)}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-8 justify-center">
            <SkipBackward
              className="max-sm:w-5 w-[32px] h-[35px]  max-sm:h-5 cursor-pointer"
              onClick={() => {
                wavesurfer?.current?.seekTo(
                  (time.currentTime - 15 < 0 ? 0 : time.currentTime - 15) /
                    wavesurfer?.current?.getDuration()
                );
              }}
            />
            <div className="cursor-pointer">
              {!playing ? (
                <FaPlay
                  className="max-sm:w-5 w-[35.97px] text-[#D9D9D9] h-10 max-sm:h-5"
                  onClick={handlePlayPause}
                  color="white"
                  size={30}
                />
              ) : (
                <FaPause
                  className="max-sm:w-5 w-[35.97px] h-10  max-sm:h-5"
                  onClick={handlePlayPause}
                  color="white"
                  size={30}
                />
              )}
            </div>
            <SkipForward
              className="max-sm:w-5 w-[32px] h-[35px] text-[#D9D9D9] max-sm:h-5 cursor-pointer"
              onClick={() => {
                wavesurfer?.current?.seekTo(
                  (time.currentTime + 15 > time.totalTime
                    ? time.totalTime
                    : time.currentTime + 15) /
                    wavesurfer?.current?.getDuration()
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
