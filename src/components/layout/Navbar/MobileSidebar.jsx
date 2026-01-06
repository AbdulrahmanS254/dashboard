import { AnimatePresence, motion } from "motion/react";
import { NavLink } from "react-router";

export default function MobileSidebar({ open }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 0, y: -20, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: -20, x: 20 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                    }}
                    className="md:hidden absolute top-20 left-0 w-full"
                >
                    <div className="p-2">
                        <div className="links rounded-2xl bg-amber-500 py-6 px-6 font-bold">
                            <ul className="list-none flex flex-col gap-3">
                                <li>
                                    <NavLink to={"/products"}>Products</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/admin"}>Admin</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/create"}>Create</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
