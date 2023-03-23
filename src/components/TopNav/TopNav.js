import SidebarMenuModel from "../Modals/SidebarMenuModel";
import TopNavLeft from "./TopNavLeft";
import TopNavRight from "./TopNavRight";

function TopNav() {
  return (
    <div id="top-nav">
      <TopNavLeft />
      <TopNavRight />
    </div>
  );
}

export default TopNav;
