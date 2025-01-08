import React, { useEffect, useRef, useState } from 'react';
import { FormType } from './create-post';
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';

const WebcamCapture = ({
  opened,
  close,
  setValue,
  addFile,
  media,
}: {
  opened: boolean;
  close: () => void;
  addFile?: (file: File) => void;
  setValue?: any;
  media?: File[];
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  let videoRef = useRef<HTMLVideoElement>(null);

  const handleCameraClose = () => {
    if (videoRef.current) {
      const stream: any = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();

        tracks.forEach((track: any) => {
          track.stop();
        });
      }

      videoRef.current.srcObject = null;
      (videoRef.current as any) = null;
    }
  };

  // Function to handle capturing the image
  const captureImage = () => {
    const canvas = document.createElement('canvas');
    if (videoRef.current) {
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas?.getContext('2d')?.drawImage(videoRef.current, 0, 0);

      // Convert the captured image to a data URL
      const imageDataURL = canvas.toDataURL('image/jpeg');

      // Convert the data URL to a blob
      fetch(imageDataURL)
        .then((res) => res.blob())
        .then((blob) => {
          // Set the captured image as a file object
          const imageFile = new File([blob], 'capturedImage.jpg', {
            type: 'image/jpeg',
          });
          // Here you can append the imageFile to formData and send it to the backend
          setImageFile(imageFile);
        });
      // Set the captured image as the source for displaying it
      setImageSrc(imageDataURL);
      handleCameraClose();
    }
  };

  // Function to handle starting the camera
  const startCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef?.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error('Error accessing the camera:', error);
      });
  };

  // Start the camera when the component mounts
  useEffect(() => {
    startCamera();
  }, []);

  return (
    <Dialog
      open={opened}
      onOpenChange={() => {
        handleCameraClose();
        close();
      }}
    >
      <DialogTitle>Take Picture</DialogTitle>
      <DialogContent>
        <div className="flex flex-col gap-4">
          {!imageSrc ? (
            <video ref={videoRef} autoPlay style={{ maxWidth: '100%' }} />
          ) : null}
          {imageSrc && (
            <img src={imageSrc} alt="Captured" style={{ maxWidth: '100%' }} />
          )}
          <div className="flex gap-3">
            {imageSrc ? (
              <Button
                onClick={() => {
                  setImageSrc(null);
                  startCamera();
                }}
              >
                Recapture
              </Button>
            ) : null}
            <Button
              onClick={
                imageSrc
                  ? () => {
                      if (imageFile) {
                        if (setValue && media) {
                          setValue('media', [...media, imageFile]);
                        }
                        if (addFile) addFile(imageFile);
                      }
                      close();
                    }
                  : captureImage
              }
            >
              {imageSrc ? 'Continue' : 'Capture'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default WebcamCapture;
