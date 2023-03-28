import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { isModalHandler } from "@/redux/features/Modals/modalSlicer";

function SidebarMenuModel() {
  const dispatch = useDispatch();
  return (
    <div id="sidebar-menu-modal">
      <div id="sidebar-menu-modal-header">
        <div>
          <h2>Sidebar items</h2>
          <p>Choose sidebar items to stick it on top navbar</p>
        </div>
        <input type="text" placeholder="Search option" />
        <button onClick={() => dispatch(isModalHandler(false))}>
          <AiOutlineClose />
        </button>
      </div>
      <div id="sidebar-menu-modal-body">
        <div id="sidebar-menu-modal-row">
          <div>1</div>
          <div>2</div>
          <div id="apply-btn">3</div>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenuModel;
