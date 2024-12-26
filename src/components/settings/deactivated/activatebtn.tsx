import toast from 'react-hot-toast';
import { API } from '@/axios-config';
import { endpoints } from '@/redux/endpoint';
import { handleError } from '@/lib/errorHandler';
import { Button } from '@/components/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const ActivateBtn = ({ username }: { username: string }) => {
      const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ username }: { username: string }) => {
      const response = await API.post(
        endpoints.setting.deactivated.activate,
        username
      );
    },
    onSuccess(data) {
      toast.success(' You just created a new about');
      queryClient.invalidateQueries({
        queryKey: [endpoints.setting.privacy.fetch],
      });
    },
    onError(error) {
      handleError(error);
    },
  });
  return (
    <Button className="bg-transparent text-[#0DBF66] hover:bg-[#0DBF66] hover:text-white rounded-md hover:shadow shadow-none" onClick={() => mutate({ username: username })}>
      Reactivate Account
    </Button>
  );
};
