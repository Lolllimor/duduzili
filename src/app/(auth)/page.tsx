"use client";
import { z } from "zod";
import Image from "next/image";
import { Login } from "@/lib/type";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cookieStorage } from "@ibnlanre/portal";
import { zodResolver } from "@hookform/resolvers/zod";
import { errorMessageHandler, ErrorType } from "@/lib/error-handler";
import { useLoginMutation } from "@/redux/features/settingsApi";
import { PasswordInput } from "@/components/post/password-input";
import { Checkbox } from "@/components/ui/checkbox";

const page = () => {
  const [login, { isLoading }] = useLoginMutation();

  const { push } = useRouter();

  const formSchema = z.object({
    username_email: z.string().min(5, {
      message: "Enter your username or email",
    }),
    password: z.string().min(2, "Enter your password"),
  });

  const { handleSubmit, register, formState, control } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      username_email: "",
      password: "",
    },
  });

  const { errors, isValid } = formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await login(values).unwrap();
      toast.success("Successfully logged in");
      cookieStorage.setItem(
        "user-detail",
        JSON.stringify({ userDetail: response.data })
      );
      console.log('login', response);
      push("dashboard");
      cookieStorage.setItem(
        "duduzili-auth",
        JSON.stringify({
          access_token: response?.data.access_token,
        })
      );
    } catch (err) {
      errorMessageHandler(err as ErrorType);
    }
  };

  return (
    <div className='flex w-full bg-[#fafafa] pl-5 pr-8 relative h-full justify-center overflow-y-auto font-sora pb-60'>
      <Image
        src='/form-bg.svg'
        alt='bg'
        width={768}
        height={768}
        className='absolute top-[40px] w-full h-fit'
        priority
      />
      <div className='py-[47px] flex flex-col pl-[32px] pr-[20px] w-full'>
        <div className='flex justify-between items-center'>
          <Image src='/logo-auth.svg' alt='logo' width={180} height={40} />
        </div>
        <div className=' flex flex-col mx-auto flex-1  mt-[30%] z-10 gap-10 pb-[30px]'>
          <div className='flex flex-col items-center gap-2'>
            <div className='text-[32px] text-[#2A2A2A] font-semibold'>
              Sign in to
              <span className='text-[#4534B8]'> Duduzili</span>
            </div>
            <p className='text-[#494850] text-base'>
              Welcome back! Please enter your details.
            </p>
          </div>
          <div className='flex flex-col gap-8 w-[400px]'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col gap-4 w-full'>
              <div className=' flex flex-col w-full  gap-1.5'>
                <label
                  htmlFor='username'
                  className='text-xs text-[#494850] font-semibold font-sora'>
                  Username/Email Address
                </label>
                <Input
                  {...register("username_email")}
                  placeholder='Username/Email Address'
                  className='h-12 border-[#D9D9DB] rounded-lg placeholder:text-[#8F8E93] placeholder:font-sora placeholder:text-xs font-normal'
                />
                {errors.username_email && (
                  <div className='text-red-500 text-sm font-normal pt-1'>
                    {errors.username_email?.message}
                  </div>
                )}
              </div>
              <div className='flex flex-col w-full  gap-1.5'>
                <label
                  htmlFor='password'
                  className='text-xs text-[#494850] font-semibold font-sora'>
                  Password
                </label>
                <PasswordInput
                  placeholder='Password'
                  {...register("password")}
                  id='current_password'
                  autoComplete='current-password'
                />
                {errors.password && (
                  <div className='text-red-500 text-sm font-normal pt-1'>
                    {errors.password?.message}
                  </div>
                )}
              </div>
              <div className=' flex items-center justify-between my-4'>
                <div className='gap-2 flex items-center'>
                  <Checkbox id='terms' />
                  <span className='text-[#494850] text-sm font-sora'>
                    Remember me
                  </span>
                </div>
                <a
                  href='/reset-password'
                  className='text-sm text-[#4534B8] font-semibold font-sora'>
                  Forgot password?
                </a>
              </div>
              <Button
                variant='primary'
                type='submit'
                className='text-base font-sora'>
                {isLoading ? <FaSpinner className='animate-spin' /> : "Log in"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
