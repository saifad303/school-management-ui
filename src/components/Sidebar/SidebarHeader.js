import Image from "next/image";
import { logoProperty } from "@/util/nextjsImageProperties/imageProperties";
import { FaBars } from "react-icons/fa";

function SidebarHeader() {
  return (
    <div id="sidebar-header">
      <Image {...logoProperty} />
      <FaBars id="fa-bar" />
    </div>
  );
}

export default SidebarHeader;
