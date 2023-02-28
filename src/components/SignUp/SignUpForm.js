import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SignUpForm() {
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
            className=" lg:mb-[20px]"
          />
          <h2 className=" font-extrabold text-[40px] lg:mb-[20px]">Sign Up</h2>
          <p>
            Already have an account?{" "}
            <Link href="/sign-in">
              <span className="underline text-[#745FF2]">Sign in</span>
            </Link>
          </p>
        </div>
        <form action="" className=" space-y-[22px] mb-[28px]">
          <input
            type="text"
            placeholder="Enter Your Name *"
            className="block placeholder:text-black border border-1 border-black px-[17px] py-[18px] rounded-lg w-full placeholder:text-[20px] text-[20px]"
          />
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
          <input
            type="text"
            placeholder="Password (Confirm) *"
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
            <span>I agree to the Terms of Service and Privacy Policy</span>
          </div>
        </div>
        <button className=" bg-[#7E635B]/50 py-[11px] rounded-full text-[#A89191] w-full lg:mt-[55px]">
          Create your free account
        </button>
      </div>
    </div>
  );
}
