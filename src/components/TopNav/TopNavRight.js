import {
  topNavRightLanguage,
  topNavRightScreenExpand,
  topNavRightCalender,
  topNavRightSearch,
  topNavRightBookmark,
  topNavRightBell,
} from "@/util/nextjsImageProperties/imageProperties";
import Image from "next/image";

function TopNavRight() {
  return (
    <div id="top-nav-right">
      <div id="top-nav-right-icons">
        <Image {...topNavRightLanguage} />
        <Image {...topNavRightScreenExpand} />
        <Image {...topNavRightCalender} />
        <Image {...topNavRightSearch} />
        <Image {...topNavRightBookmark} />
        <Image {...topNavRightBell} />
        <Image {...topNavRightBell} />
      </div>
    </div>
  );
}

export default TopNavRight;
