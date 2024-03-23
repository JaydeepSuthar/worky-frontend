import { FaHeart } from "react-icons/fa";

export function Footer({ brandName, brandLink, routes, year }) {
    return (
        <footer className="py-2">
            <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
                <h6 className="font-normal text-inherit">
                    &copy; {year}, made with{" "}
                    <FaHeart className="-mt-0.5 inline-block h-3.5 w-3.5 text-red-600" />{" "}
                    by{" "}
                    <a
                        href={brandLink}
                        target="_blank"
                        className="transition-colors hover:text-blue-500 font-bold"
                    >
                        {brandName}
                    </a>{" "}
                    for a better world.
                </h6>
                <ul className="flex items-center gap-4">
                    {routes.map(({ name, path }) => (
                        <li key={name}>
                            <a
                                href={path}
                                target="_blank"
                                className="py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                            >
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

Footer.defaultProps = {
    brandName: "JD Studios",
    brandLink: "https://www.github.com/jaydeepsuthar",
    year: 2024,
    routes: [
        {
            name: "Jaydeep Suthar",
            path: "https://www.github.com/jaydeepsuthar",
        },
        {
            name: "Gautam Suthar",
            path: "https://www.github.com/iamgautamsuthar",
        },
        { name: "Contact us", path: "https://www.github.com/jaydeepsuthar" },
    ],
};

export default Footer;
