import { useState } from "react";
import { motion } from "motion/react";
import { LuSettings2, LuChevronDown } from "react-icons/lu";
import ProductCard from "../../components/ui/ProductCard";

// Categories Data (مؤقتاً لحد ما نجيبها من الـ API)
const categories = [
    "All Products",
    "T-Shirts",
    "Hoodies",
    "Pants",
    "Accessories",
    "Shoes",
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Products() {
    const [activeCategory, setActiveCategory] = useState("All Products");
    const [showFilters, setShowFilters] = useState(false); // For phones & small screens

    return (
        <div className="min-h-screen bg-white pt-10 pb-20">
            <div className="container">
                {/* Page Header (Title & Sort) */}
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-4xl font-bold uppercase mb-2">
                            Collection
                        </h1>
                        <p className="text-stone-500">Showing 12 results</p>
                    </div>

                    {/* Controls (Filter Toggle Mobile & Sort) */}
                    <div className="flex gap-3 w-full md:w-auto">
                        <button
                            className="md:hidden flex-1 flex items-center justify-center gap-2 border border-stone-200 px-4 py-2 rounded-lg font-semibold"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <LuSettings2 /> Filters
                        </button>

                        <div className="relative flex-1 md:w-48">
                            <button className="w-full flex items-center justify-between border border-stone-200 px-4 py-2 rounded-lg text-stone-600 hover:border-orange-500 transition-colors">
                                <span>Sort by: Newest</span>
                                <LuChevronDown />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex gap-10 items-start">
                    {/* 2. Sidebar Filters (Sticky on Desktop) */}
                    <aside
                        className={`
                        fixed inset-0 z-40 bg-white p-6 transition-transform duration-300 md:translate-x-0 md:static md:w-1/5 md:p-0 md:block
                        ${showFilters ? "translate-x-0" : "-translate-x-full"}
                    `}
                    >
                        {/* Mobile Close Button */}
                        <div className="flex justify-between items-center mb-6 md:hidden">
                            <h3 className="text-xl font-bold">Filters</h3>
                            <button
                                onClick={() => setShowFilters(false)}
                                className="text-stone-400 text-2xl"
                            >
                                &times;
                            </button>
                        </div>

                        {/* Categories Group */}
                        <div className="mb-8">
                            <h3 className="font-bold text-lg mb-4 border-b border-stone-100 pb-2">
                                Category
                            </h3>
                            <ul className="space-y-3">
                                {categories.map((cat) => (
                                    <li key={cat}>
                                        <button
                                            onClick={() =>
                                                setActiveCategory(cat)
                                            }
                                            className={`text-sm transition-colors duration-200 flex items-center gap-2 ${
                                                activeCategory === cat
                                                    ? "text-orange-500 font-bold"
                                                    : "text-stone-500 hover:text-stone-900"
                                            }`}
                                        >
                                            {activeCategory === cat && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                            )}
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Price Range (Mock UI) */}
                        <div>
                            <h3 className="font-bold text-lg mb-4 border-b border-stone-100 pb-2">
                                Price
                            </h3>
                            <div className="flex gap-4 items-center">
                                <input
                                    type="number"
                                    placeholder="Min"
                                    className="w-full bg-gray-50 border border-stone-200 rounded-md p-2 text-sm outline-none focus:border-orange-500"
                                />
                                <span className="text-stone-400">-</span>
                                <input
                                    type="number"
                                    placeholder="Max"
                                    className="w-full bg-gray-50 border border-stone-200 rounded-md p-2 text-sm outline-none focus:border-orange-500"
                                />
                            </div>
                        </div>
                    </aside>

                    {/* Overlay for Mobile Sidebar */}
                    {showFilters && (
                        <div
                            className="fixed inset-0 bg-black/50 z-30 md:hidden"
                            onClick={() => setShowFilters(false)}
                        ></div>
                    )}

                    {/* 3. Product Grid */}
                    <motion.main
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {Array.from({ length: 9 }).map((_, index) => (
                            <motion.div key={index} variants={cardAnim}>
                                <ProductCard />
                            </motion.div>
                        ))}
                    </motion.main>
                </div>
            </div>
        </div>
    );
}
