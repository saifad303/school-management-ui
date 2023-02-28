import React from "react";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className="hidden lg:flex lg:items-center lg:w-1/2 bg-[#18212F] h-full relative px-5">
      <Image
        src="/images/Ellipse-11.svg"
        height={0}
        width={0}
        alt="logo"
        className="absolute rotate-180 top-0 left-0 w-[300px] h-[300px] z-0"
      />
      <Image
        src="/images/Ellipse-11.svg"
        height={0}
        width={0}
        alt="logo"
        className="absolute bottom-0 right-0 w-[300px] h-[300px] z-0"
      />
      <div className=" text-white z-10">
        <h3 className="text-[46px] xl:text-[50px] 2xl:text-[64px] font-bold leading-[47px] w-[350px] xl:w-[380px] 2xl:w-[480px] mb-[20px] 2xl:mb-[32px] 2xl:leading-[60px]">
          Welcome to our community
        </h3>
        <p className="text-[14px] xl:text-[16px] 2xl:text-[20px] w-[450px] xl:w-[570px] 2xl:w-[705px] leading-[27px] mb-[40px] 2xl:leading-[35px]">
          Fuse helps developers to build organized and well coded dashboards
          full of beautiful and rich modules. Join us and start building your
          application today.
        </p>
        <div className="flex items-center">
          <div id="images" className="relative w-[120px] h-[28px]">
            <Image
              src="/images/user.png"
              height={32}
              width={32}
              alt="user-1"
              className="absolute top-0 left-0 z-40 border border-1 border-[#18212f] rounded-full"
            />
            <Image
              src="/images/user-4.png"
              height={32}
              width={32}
              alt="user-2"
              className="absolute top-0 left-[22px] z-30 border border-1 border-[#18212f] rounded-full"
            />
            <Image
              src="/images/user-2.png"
              height={32}
              width={32}
              alt="user-3"
              className="absolute top-0 left-[46px] z-10 border border-1 border-[#18212f] rounded-full"
            />
            <Image
              src="/images/user-3.png"
              height={32}
              width={32}
              alt="user-4"
              className="absolute top-0 left-[72px] z-0 border border-1 border-[#18212f] rounded-full"
            />
          </div>
          <div>
            <p className="text-[14px] xl:text-[16px] 2xl:xl:text-[20px]">
              More than 17k people joined us, it's your turn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
