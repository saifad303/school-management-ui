import {
  topNavLeftCalender,
  topNavLeftMail,
  topNavLeftUser,
  topNavLeftPlus,
  topNavLeftRevealer,
} from "@/util/nextjsImageProperties/imageProperties";
import Image from "next/image";
import { Button } from "flowbite-react";

function TopNavLeft() {
  return (
    <div id="top-nav-left">
      <div id="top-nav-left-icons">
        <Image {...topNavLeftCalender} />
        <Image {...topNavLeftMail} />
        <Image {...topNavLeftUser} />
        <Image {...topNavLeftPlus} />
      </div>
      <Image {...topNavLeftRevealer} id="top-nav-left-altBar" />
    </div>
  );
}

export default TopNavLeft;
