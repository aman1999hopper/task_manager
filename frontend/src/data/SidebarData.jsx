import {
  LayoutDashboard,
  ClipboardList,
  BarChart,
  Users,
  LogOut,
} from "lucide-react";

export const sidebarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5 text-gray-700 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white" />,
    link: "overview",
  },
  {
    id: 2,
    title: "Manage Tasks",
    icon: <BarChart className="w-5 h-5 text-gray-700 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white" />,
    link: "#",
  },
  {
    id: 3,
    title: "Create Tasks",
    icon: <ClipboardList className="w-5 h-5 text-gray-700 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white" />,
    link: "#",
  },
  {
    id: 4,
    title: "Team Members",
    icon: <Users className="w-5 h-5 text-gray-700 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white" />,
    link: "#",
  },
  {
    id: 5,
    title: "Logout",
    icon: <LogOut className="w-5 h-5 text-gray-700 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white" />,
    link: "#",
  },
];
