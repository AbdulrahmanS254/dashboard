import { NavLink } from "react-router";

const linkClass =
    "px-3 py-2 rounded-3xl transition-all duration-300 ease-in-out hover:bg-white hover:text-orange-500 font-semibold";

export default function Navbar() {
    return (
        <nav className="bg-stone-950 text-white py-4">
            <div className="container flex justify-between">
                <div className="brand text-2xl">
                    <NavLink to={"/"}>Qurio</NavLink>
                </div>
                <div className="links flex items-center">
                    <ul className="list-none flex gap-5">
                        <li>
                            <NavLink to={"/products"} className={linkClass}>
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin"} className={linkClass}>
                                Admin
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/create"} className={linkClass}>
                                Create
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
