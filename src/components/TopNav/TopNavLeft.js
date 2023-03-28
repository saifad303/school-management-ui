import {
  topNavLeftCalender,
  topNavLeftMail,
  topNavLeftUser,
  topNavLeftPlus,
  topNavLeftRevealer,
} from "@/util/nextjsImageProperties/imageProperties";
import Image from "next/image";
import MasterModal from "../Modals/MasterModal";
import SidebarMenuModel from "../Modals/SidebarMenuModel";
import { useSelector, useDispatch } from "react-redux";
import { isModal, isModalHandler } from "@/redux/features/Modals/modalSlicer";

function TopNavLeft() {
  const dispatch = useDispatch();
  const modalOpener = useSelector(isModal);
  return (
    <div id="top-nav-left">
      <div id="top-nav-left-icons">
        <Image {...topNavLeftCalender} />
        <Image {...topNavLeftMail} />
        <Image {...topNavLeftUser} />
        <Image
          {...topNavLeftPlus}
          onClick={() => dispatch(isModalHandler(true))}
        />
      </div>
      <Image {...topNavLeftRevealer} id="top-nav-left-altBar" />
      {modalOpener ? (
        <MasterModal>
          <SidebarMenuModel />
        </MasterModal>
      ) : (
        ""
      )}
    </div>
  );
}

export default TopNavLeft;
