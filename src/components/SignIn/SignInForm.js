import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SignInForm() {
  return (
    <div
      id="form-container"
      className="flex flex-col justify-center h-full lg:w-1/2 px-[30px] sm:px-[80px] md:px-[180px] lg:px-[30px] py-[334px] xl:px-[70px] 2xl:px-[180px]"
    >
      <div className=" 2xl:w-[500px] 2xl:mx-auto">
        <div className=" mb-[28px]">
          <Image
            priority
            src="/images/logo.svg"
            height={66}
            width={66}
            alt="logo"
          />
          <h2 className=" font-extrabold text-[40px] lg:mb-[20px]">Sign In</h2>
          <p className="lg:mb-[60px]">
            Don't have an account?{" "}
            <Link href="/sign-up">
              <span className="underline text-[#745FF2] ">Sign up</span>
            </Link>
          </p>
        </div>
        <form action="" className=" space-y-[22px] mb-[28px]">
          <input
            type="text"
            placeholder="Email *"
            className="block placeholder:text-black border border-1 border-black px-[17px] py-[18px] rounded-lg w-full placeholder:text-[20px] text-[20px]"
          />
          <input
            type="text"
            placeholder="Password *"
            className="block placeholder:text-black border border-1 border-black px-[17px] py-[18px] rounded-lg w-full placeholder:text-[20px] text-[20px]"
          />
        </form>
        <div className=" flex gap-[20px] mb-[30px]">
          <div className="">
            <input
              className="w-[14px] h-[14px]"
              type="checkbox"
              id="termsCheck"
              name=""
              value=""
            />
          </div>
          <div>
            <span>Remember me</span>
          </div>
        </div>
        <button className=" bg-[#7165E3] py-[11px] rounded-full text-white mb-[60px] w-full">
          Sign In
        </button>
        <div className="w-[90%] md:w-[100%] lg:w-[90%] 2xl:w-[100%] mx-auto">
          <div className=" flex items-center justify-center gap-2 mb-[30px]">
            <div className="bg-[#9C9B9B] w-[20%] h-[1px] sm:w-[30%]" />
            <p className=" text-[14px] sm:text-[18px]">Or continue with</p>
            <div className="bg-[#9C9B9B] w-[20%] h-[1px] sm:w-[30%]" />
          </div>
          <div className=" flex justify-between sm:justify-evenly items-center">
            <div className="border border-1 border-black flex justify-center items-center w-[100px] h-[50px] sm:h-[54px] sm:w-[130px] rounded-[43px]">
              <Image
                src="/images/facebook.svg"
                height={30}
                width={30}
                alt="logo"
              />
            </div>
            <div className="border border-1 border-black flex justify-center items-center w-[100px] h-[50px] sm:h-[54px] sm:w-[130px] rounded-[43px]">
              <Image
                src="/images/twitter.svg"
                height={30}
                width={30}
                alt="logo"
              />
            </div>
            <div className="border border-1 border-black flex justify-center items-center w-[100px] h-[50px] sm:h-[54px] sm:w-[130px] rounded-[43px]">
              <Image
                src="/images/google.svg"
                height={30}
                width={30}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
