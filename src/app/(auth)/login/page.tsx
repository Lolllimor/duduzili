"use client";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { FaSpinner } from "react-icons/fa";
import { handleError } from "@/lib/errorHandler";
import toast from "react-hot-toast";
import CryptoJS from "crypto-js";
import { LOGIN_API } from "@/axios-config";
import { useMutation } from "@tanstack/react-query";
import { endpoints } from "@/redux/endpoint";
import { Login } from "@/lib/type";
import { useRouter } from "next/navigation";

const page = () => {
  const { push } = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: Login) => {
      const response = await LOGIN_API.post(endpoints.signin, data);
    },
    mutationKey: ["signin"],

    onSuccess() {
      toast.success("Yuppy! You just sign in");
      push("/dashboard");
    },
    onError(error) {
      handleError(error);
    },
  });

  const [currentPassword, setCurrentPassword] = useState("");
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

  //   if (isSuccess) {
  //     const message = data?.message || "Login successful";
  //     toast.success(<span>{message}</span>, {
  //       style: {
  //         border: "1px solid #22C55E",
  //         padding: "16px",
  //         color: "#0A0A0A",
  //       },
  //       iconTheme: {
  //         primary: "#22C55E",
  //         secondary: "#FAFAFA",
  //       },
  //       duration: 5000,
  //     });

  //   }

  //   if (error) {
  //     handleError(error);
  //     console.log("loginerror:", error);
  //   }
  // }, [data?.message, isSuccess, error]);

  const { errors, isValid } = formState;

  // const encryptData = (data: DataType, secretKey: string): string => {
  //   const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey);
  //   return encrypted.toString();
  // };

  // const decryptData = (encryptedData: string, secretKey: string): DataType => {
  //   const decrypted = CryptoJS.AES.decrypt(encryptedData, secretKey);
  //   return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
  // };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    mutate(values);
  };

  return (
    <div className="flex w-full bg-[#fafafa] pl-[20px] pr-[32px] relative h-full justify-center overflow-y-auto ">
      <Image
        src="/form-bg.svg"
        alt="bg"
        width={768}
        height={768}
        className="absolute top-[40px] w-full"
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
            <p className="text-[32px] text-[#2A2A2A] font-semibold">
              Sign in to
              <span className="text-[#4534B8]"> Duduzili</span>
            </p>
            <p className="text-[#494850] text-base">
              Welcome back! Please enter your details.
            </p>
          </div>
          <div className="flex flex-col gap-8 w-[400px]">
            <div className="flex items-center justify-between">
              <Button className="w-[194px] h-12 bg-white border border-[#D9D9DB] rounded-lg flex gap-[13px]">
                <Image src="/google.png" alt="google" width={20} height={20} />
                <p className="text-base text-[#313131]">Google</p>
              </Button>
              <Button className="w-[194px] h-12 bg-white border border-[#D9D9DB] rounded-lg flex gap-[13px]">
                <Image src="/apple.png" alt="apple" width={20} height={20} />
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
                  {...register("username_email")}
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
                  {...register("password")}
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
                {isPending ? <FaSpinner className="animate-spin" /> : "Log in"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
