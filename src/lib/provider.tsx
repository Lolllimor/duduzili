'use client';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { store } from '@/redux/store';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </Provider>
  );
}
