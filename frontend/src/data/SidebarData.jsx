import {
    FaChartPie,
    FaUserTie,
    FaClipboardList,
    FaChartBar,
    FaHistory,
  } from "react-icons/fa";
  import { RiDashboardLine } from "react-icons/ri";

  export const sidebarData = [
    {
      id: 1,
      title: "Dashboard",
      icon: <RiDashboardLine className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" />,
      link: "#",
      children: [
        { id: 1.1, title: "Overview", link: "#overview" },
        { id: 1.2, title: "Statistics", link: "#statistics" },
        { id: 1.3, title: "Settings", link: "#settings" },
      ],
    },
    {
      id: 2,
      title: "Portfolio",
      icon: <FaChartPie className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" />,
      link: "#",
      children: [
        { id: 2.1, title: "Admin", link: "#overview" },
        { id: 2.2, title: "Market", link: "#statistics" },
        { id: 2.3, title: "Instruction", link: "#settings" },
      ],
    },
    {
      id: 3,
      title: "WatchList",
      icon: <FaClipboardList className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" />,
      link: "#",
    },
    {
      id: 4,
      title: "Market Overview",
      icon: <FaChartBar className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" />,
      link: "#",
    },
    {
      id: 5,
      title: "Transactions",
      icon: <FaUserTie className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" />,
      link: "#",
    },
    {
      id: 6,
      title: "Reports & Analytics",
      icon: <FaHistory className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" />,
      link: "#",
    },
  ];