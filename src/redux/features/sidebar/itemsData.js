import {
  AiOutlineFundProjectionScreen as Project,
  AiOutlineShoppingCart as ECommerce,
  AiOutlineFolder as File,
  AiOutlineMail as Mail,
} from "react-icons/ai";
import {
  BsGraphUp as Analytics,
  BsCalendarDate as Calender,
  BsActivity as Activities,
  BsShieldLock as Authentication,
} from "react-icons/bs";
import {
  FaRegMoneyBillAlt as Finance,
  FaGraduationCap as Academy,
} from "react-icons/fa";

export const sidebarItemList = [
  {
    id: "dashboard-id",
    title: "dashboard",
    subtitle: "unique dashboard designs",
    itemList: [
      {
        id: 1,
        name: "project",
        icon: <Project className="sidebar-icon" />,
      },
      {
        id: 2,
        name: "analytics",
        icon: <Analytics className="sidebar-icon" />,
      },
      {
        id: 3,
        name: "finance",
        icon: <Finance className="sidebar-icon" />,
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
        icon: <Academy className="sidebar-icon" />,
      },
      {
        id: 2,
        name: "calender",
        icon: <Calender className="sidebar-icon" />,
      },
      {
        id: 3,
        name: "E-Commerce",
        icon: <ECommerce className="sidebar-icon" />,
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
        icon: <File className="sidebar-icon" />,
      },
      {
        id: 5,
        name: "mail",
        icon: <Mail className="sidebar-icon" />,
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
        icon: <Activities className="sidebar-icon" />,
      },
      {
        id: 3,
        name: "authentication",
        icon: <Authentication className="sidebar-icon" />,
        subItemList: [
          { id: 1, title: "auth item 1" },
          { id: 2, title: "auth item 2" },
          { id: 3, title: "auth item 3" },
        ],
      },
    ],
  },
];
