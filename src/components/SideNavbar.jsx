import useWebStore from "../context/webStore";
import { NavLink } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";
import { RiLogoutBoxFill } from "react-icons/ri";

export function SideNavbar({ routes }) {
    const openSidenav = useWebStore((state) => state.openSidenav);
    const setOpenSidenav = useWebStore((state) => state.setOpenSidenav);
    const setIsLogin = useWebStore((state) => state.setIsLogin);

    return (
        <aside
            className={`bg-white shadow-sm ${
                openSidenav ? "translate-x-0" : "-translate-x-80"
            } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
        >
            <div className="relative">
                <button
                    className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
                    onClick={() => setOpenSidenav(!openSidenav)}
                >
                    <HiMiniXMark
                        strokeWidth={1}
                        className="h-5 w-5 m-4 text-black"
                    />
                </button>
            </div>
            <div className="m-4">
                {routes.map(({ layout, title, pages }, key) => (
                    <ul key={key} className="mb-4 flex flex-col gap-1">
                        {title && (
                            <li className="mx-3.5 mt-4 mb-2">
                                <h1 className="font-black uppercase opacity-75">
                                    {title}
                                </h1>
                            </li>
                        )}
                        {pages.map(({ icon, name, path }) => (
                            <li key={name}>
                                <NavLink to={`/${layout}${path}`}>
                                    {({ isActive }) => (
                                        <button
                                            className={`${
                                                isActive
                                                    ? "bg-gray-900 shadow-md shadow-gray-500/50 text-white"
                                                    : "bg-white text-black"
                                            } flex items-center gap-4 px-4 w-full capitalize  font-medium rounded-lg text-sms py-[13px] text-center me-2 mb-2 `}
                                        >
                                            {icon}
                                            <h1
                                                className={`${
                                                    isActive ? "white" : "black"
                                                }font-medium capitalize`}
                                            >
                                                {name}
                                            </h1>
                                        </button>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <NavLink to={`/`}>
                                {({ isActive }) => (
                                    <button
                                        className={`${
                                            isActive
                                                ? "bg-gray-900 shadow-lg shadow-gray-500/50 text-white"
                                                : "bg-white text-black"
                                        } flex items-center gap-4 px-4 w-full capitalize font-medium rounded-lg text-sms py-[13px] text-center me-2 mb-2`}
                                        onClick={setIsLogin}
                                    >
                                        <RiLogoutBoxFill className="h-5 w-5" />
                                        <h1
                                            className={`${
                                                isActive ? "white" : "black"
                                            }font-medium capitalize`}
                                        >
                                            Log Out
                                        </h1>
                                    </button>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                ))}
            </div>
        </aside>
    );
}

export default SideNavbar;
