import {
  topNavLeftCalender,
  topNavLeftMail,
  topNavLeftUser,
  topNavLeftPlus,
  topNavLeftRevealer,
} from "@/util/nextjsImageProperties/imageProperties";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Image from "next/image";

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
