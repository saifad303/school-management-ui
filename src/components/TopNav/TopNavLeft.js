import {
  topNavLeftCalender,
  topNavLeftMail,
  topNavLeftUser,
  topNavLeftPlus,
  topNavLeftRevealer,
} from "@/util/nextjsImageProperties/imageProperties";
import Image from "next/image";
import SidebarMenuModel from "../Modals/SidebarMenuModel";
import { useState } from "react";

function TopNavLeft() {
  const [isModel, setIsModel] = useState(false);
  // console.log(isModel);
  return (
    <div id="top-nav-left">
      <div id="top-nav-left-icons">
        <Image {...topNavLeftCalender} />
        <Image {...topNavLeftMail} />
        <Image {...topNavLeftUser} />
        <Image {...topNavLeftPlus} onClick={() => setIsModel(true)} />
      </div>
      <Image {...topNavLeftRevealer} id="top-nav-left-altBar" />
      {isModel ? <SidebarMenuModel /> : ""}
    </div>
  );
}

export default TopNavLeft;
