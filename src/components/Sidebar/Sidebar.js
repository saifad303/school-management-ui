import AccOwner from "./AccOwner";
import SidebarHeader from "./SidebarHeader";
import Items from "./SidebarItems/Items";

function Sidebar() {
  return (
    <div id="sidebar">
      <SidebarHeader />
      <AccOwner />
      <Items />
    </div>
  );
}

export default Sidebar;
