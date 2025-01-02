import toast from 'react-hot-toast';
import { API } from '@/axios-config';
import { endpoints } from '@/redux/endpoint';
import { handleError } from '@/lib/errorHandler';
import { Button } from '@/components/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActivateDeactivatedMutation } from '@/redux/features/settingsApi';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';

export const ActivateBtn = ({ username }: { username: string }) => {
  const [activate] = useActivateDeactivatedMutation();
  const handleClick = async () => {
    try {
      const res = await activate({ username: username }).unwrap();
      toast.success('Successfully activated');
    } catch (error) {
      errorMessageHandler(error as ErrorType);
    }
  };
  return (
    <Button
      className="bg-transparent text-[#0DBF66] hover:bg-[#0DBF66] hover:text-white rounded-md hover:shadow shadow-none"
      onClick={() => handleClick()}
    >
      Reactivate Account
    </Button>
  );
};
