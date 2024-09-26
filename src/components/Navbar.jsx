import { HiMiniBars3 } from "react-icons/hi2";
import useWebStore from "../context/webStore";

export function Navbar() {
    const setOpenSidenav = useWebStore((state) => state.setOpenSidenav);

    return (
        <nav className="rounded-xl transition-all top-4 z-40 py-3 px-3 shadow-md bg-white shadow-blue-gray-500/5">
            <div className="flex  justify-between gap-6 md:flex-row items-center">
                <div className="capitalize">
                    <h1>hello</h1>
                </div>
                <div className="flex items-center justify-center">
                    <div className=" text-black">
                        <input
                            type="text"
                            className=" rounded-lg p-1 max-md:hidden border border-gray-400 "
                            placeholder="Search..."
                        />
                    </div>
                    <button
                        className="grid xl:hidden pl-3"
                        onClick={setOpenSidenav}
                    >
                        <HiMiniBars3 className="h-6 w-6 text-blue-gray-500" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
