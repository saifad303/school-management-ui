import {
  AiOutlineFundProjectionScreen,
  AiOutlineMoneyCollect,
} from "react-icons/ai";
import { GrAnalytics } from "react-icons/gr";

export const sidebarItemList = [
  {
    id: "dashboard",
    title: "Dashboard",
    subtitle: "Unique dashboard designs",
    itemList: [
      {
        id: 1,
        name: "project",
        icon: <AiOutlineFundProjectionScreen />,
      },
      {
        id: 2,
        name: "analytics",
        icon: <GrAnalytics />,
      },
      {
        id: 3,
        name: "finance",
        icon: <AiOutlineMoneyCollect />,
      },
    ],
  },
];
