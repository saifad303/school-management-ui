import {
  AiOutlineFundProjectionScreen,
  AiOutlineMoneyCollect,
} from "react-icons/ai";
import { GrAnalytics, GrMailOption } from "react-icons/gr";
import { SlCalender, SlFolderAlt, SlGraduation } from "react-icons/sl";
import { FaOpencart } from "react-icons/fa";
import { BsActivity, BsShieldLock } from "react-icons/bs";

export const sidebarItemList = [
  {
    id: "dashboard-id",
    title: "dashboard",
    subtitle: "unique dashboard designs",
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
  {
    id: "application-id",
    title: "applications",
    subtitle: "custom made applications designs",
    itemList: [
      {
        id: 1,
        name: "academy",
        icon: <SlGraduation />,
      },
      {
        id: 2,
        name: "calender",
        icon: <SlCalender />,
      },
      {
        id: 3,
        name: "E-Commerce",
        icon: <FaOpencart />,
        subItemList: [
          { id: 1, title: "product" },
          { id: 2, title: "product detail" },
          { id: 3, title: "new product" },
          { id: 4, title: "order" },
          { id: 5, title: "order detail" },
        ],
      },
      {
        id: 4,
        name: "file manager",
        icon: <SlFolderAlt />,
      },
      {
        id: 5,
        name: "mail",
        icon: <GrMailOption />,
      },
    ],
  },
  {
    id: "pages-id",
    title: "pages",
    subtitle: "custom made page designs",
    itemList: [
      {
        id: 1,
        name: "activities",
        icon: <BsActivity />,
      },
      {
        id: 3,
        name: "authentication",
        icon: <BsShieldLock />,
        subItemList: [
          { id: 1, title: "auth item 1" },
          { id: 2, title: "auth item 2" },
          { id: 3, title: "auth item 3" },
        ],
      },
    ],
  },
];
