import {
  topNavLeftCalender,
  topNavLeftMail,
  topNavLeftUser,
  topNavLeftPlus,
} from "@/util/nextjsImageProperties/imageProperties";
import Image from "next/image";

topNavLeftCalender;

function TopNavLeft() {
  return (
    <div id="top-nav-left">
      <div id="top-nav-left-icons">
        <Image {...topNavLeftCalender} />
        <Image {...topNavLeftMail} />
        <Image {...topNavLeftUser} />
        <Image {...topNavLeftPlus} />
      </div>
    </div>
  );
}

export default TopNavLeft;
