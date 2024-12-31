'use client';
import { z } from 'zod';
import Image from 'next/image';
import { Login } from '@/lib/type';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
// import { handleError } from '@/lib/errorHandler';
import { cookieStorage } from '@ibnlanre/portal';
import { zodResolver } from '@hookform/resolvers/zod';
import { errorMessageHandler, ErrorType } from '@/lib/error-handler';
import { useLoginMutation } from '@/redux/features/settingsApi';
import { PasswordInput } from '@/components/password-input';

const page = () => {
  const [login, { isSuccess, isLoading, isError, error }] = useLoginMutation();

  const { push } = useRouter();

  const formSchema = z.object({
    username_email: z.string().min(5, {
      message: 'Enter your username or email',
    }),
    password: z.string().min(2, 'Enter your password'),
  });

  const { handleSubmit, register, formState, control } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      username_email: '',
      password: '',
    },
  });

  const { errors, isValid } = formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await login(values).unwrap();
      toast.success('Successfully logged in');
      push('dashboard');
      cookieStorage.setItem(
        'duduzili-auth',
        JSON.stringify({
          access_token: response?.data.access_token,
        })
      );
    } catch (err) {
      errorMessageHandler(err as ErrorType);
    }
  };

  return (
    <div className="flex w-full bg-[#fafafa] pl-[20px] pr-[32px] relative h-full justify-center overflow-y-auto ">
      <Image
        src="/form-bg.svg"
        alt="bg"
        width={768}
        height={768}
        className="absolute top-[40px] w-full h-fit"
        priority
      />
      <div className="py-[47px] flex flex-col pl-[32px] pr-[20px] w-full">
        <div className="flex justify-between items-center">
          <Image src="/logo.svg" alt="logo" width={180} height={40} />
          <div className="flex items-center gap-1 ">
            <span className="text-sm">Don’t have an account?</span>
            <a href="/" className="text-sm text-[#4534B8] ">
              Sign up
            </a>
          </div>
        </div>
        <div className=" flex flex-col mx-auto flex-1  mt-[30%] z-10 gap-10 pb-[30px]">
          <div className="flex flex-col items-center gap-2">
            <div className="text-[32px] text-[#2A2A2A] font-semibold">
              Sign in to
              <span className="text-[#4534B8]"> Duduzili</span>
            </div>
            <p className="text-[#494850] text-base">
              Welcome back! Please enter your details.
            </p>
          </div>
          <div className="flex flex-col gap-8 w-[400px]">
            <div className="flex items-center justify-between">
              <Button className="w-[194px] h-12 bg-white border border-[#D9D9DB] rounded-lg flex gap-[13px]">
                <Image
                  src="/google.png"
                  alt="google"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <p className="text-base text-[#313131]">Google</p>
              </Button>
              <Button className="w-[194px] h-12 bg-white border border-[#D9D9DB] rounded-lg flex gap-[13px]">
                <Image
                  src="/apple.png"
                  alt="apple"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <p className="text-base text-[#313131]">Apple</p>
              </Button>
            </div>
            <div className="flex items-center w-full gap-[17px]">
              <hr className="w-full" />
              <p className="text-[#494850] text-xs text-nowrap">
                Or continue with
              </p>
              <hr className="w-full" />
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 w-full"
            >
              <div className=" flex flex-col w-full  gap-1.5">
                <label
                  htmlFor="username"
                  className="text-xs text-[#494850] font-semibold"
                >
                  Username/Email Address
                </label>
                <Input
                  {...register('username_email')}
                  placeholder="Username/Email Address"
                  className="h-12 border-[#D9D9DB] rounded-lg placeholder:text-[#8F8E93] font-normal"
                />
                {errors.username_email && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.username_email?.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col w-full  gap-1.5">
                <label
                  htmlFor="password"
                  className="text-xs text-[#494850] font-semibold"
                >
                  Password
                </label>
                <PasswordInput
                  {...register('password')}
                  id="current_password"
                  // value={currentPassword}
                  // value={}
                  // onChange={(e) => setCurrentPassword(e.target.value)}
                  autoComplete="current-password"
                />
                {errors.password && (
                  <div className="text-red-500 text-sm font-normal pt-1">
                    {errors.password?.message}
                  </div>
                )}
              </div>
              <div className=" flex items-center justify-between my-4">
                <div className="gap-2 flex items-center">
                  <span className="text-[#494850] text-sm">Remember me</span>
                </div>
                <a
                  href="/reset-password"
                  className="text-sm text-[#4534B8] font-semibold"
                >
                  Forgot password?
                </a>
              </div>
              <Button
                type="submit"
                className="bg-[#4534B8] border-none rounded-lg h-11 "
              >
                {isLoading ? <FaSpinner className="animate-spin" /> : 'Log in'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
