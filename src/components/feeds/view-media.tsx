
import { Dispatch, SetStateAction } from 'react';
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';

export type IMediaType = 'image' | 'audio' | 'video';

function ViewMedia({
  open,
  setOpened,
  file,
  type,
}: {
  setOpened: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  type: IMediaType | undefined;
  file: File | undefined;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpened}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <div className="h-full flex items-center justify-center">
          {file ? (
            type === 'image' ? (
              <img
                src={URL.createObjectURL(file)}
                className="max-h-[90dvh]"
                alt="Image"
              />
            ) : type === 'video' ? (
              <video
                controls
                autoPlay
                className="max-h-[90dvh]"
                src={URL.createObjectURL(file)}
              />
            ) : null
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ViewMedia;
