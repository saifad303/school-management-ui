import Image from "next/image";
import { logoProperty } from "@/util/nextjsImageProperties/imageProperties";
import { FaBars } from "react-icons/fa";

function SidebarHeader() {
  return (
    <div id="sidebar-header">
      <FaBars id="fa-bar" />
      <Image {...logoProperty} />
    </div>
  );
}

export default SidebarHeader;
