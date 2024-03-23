import { Home, Profile, Workers, Sites } from "./pages/dashboard/index";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { MdMapsHomeWork } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

const icon = {
    className: "w-5 h-5 text-inherit",
};

export const routes = [
    {
        title: "Worky",
        layout: "dashboard",
        pages: [
            {
                icon: <FaHome {...icon} />,
                name: "home",
                path: "/home",
                element: <Home />,
            },
            {
                icon: <MdMapsHomeWork {...icon} />,
                name: "sites",
                path: "/sites",
                element: <Sites />,
            },
            {
                icon: <HiUserGroup {...icon} />,
                name: "Workers",
                path: "/workers",
                element: <Workers />,
            },
            {
                icon: <FaUserCircle {...icon} />,
                name: "profile",
                path: "/profile",
                element: <Profile />,
            },
        ],
    },
];

export default routes;
