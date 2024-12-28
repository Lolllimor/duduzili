import { Dialog } from '@/components/ui/dialog';
import React, { ReactNode, createContext, useState } from 'react';

export interface ModalContextType {
  setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
  modalState: ModalState;
  close: () => void;
}

interface ModalState {
  opened: boolean;
  component: ReactNode | null;
  closeOnOverlayClick: boolean;
  id?: null | number | string;
  onClose?: () => void;
  overflow?: 'unset' | 'auto';
  zIndex?: number;
}

export const ModalContext = createContext<ModalContextType | null>(null);

const initialState: ModalState = {
  opened: false,
  component: null,
  closeOnOverlayClick: true,
  id: null,
  onClose: () => {},
  overflow: 'auto',
};


function ModalProvider({ children }: { children: ReactNode }) { 
    const [modalState, setModalState] = useState<ModalState>(initialState);
    const close = () => { 
        setModalState(initialState);
    }

    return (
        <>
            <ModalContext.Provider value={{ setModalState, modalState, close }}>
                <Dialog open={modalState.opened} onOpenChange={close}>

                </Dialog>
            </ModalContext.Provider></>
    )
}