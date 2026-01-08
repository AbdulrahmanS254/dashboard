import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import {
    LuStar,
    LuMinus,
    LuPlus,
    LuShoppingCart,
    LuHeart,
    LuTruck,
    LuShieldCheck,
    LuShare2,
} from "react-icons/lu";

// Mock Data (Simulating a single product fetch)
const productData = {
    id: 1,
    title: "Shadow Drip Heavyweight Hoodie",
    price: 99.0,
    oldPrice: 120.0,
    rating: 4.8,
    reviews: 124,
    description:
        "Crafted for the modern urban explorer. This heavyweight hoodie features a relaxed fit, drop shoulders, and our signature premium cotton blend. Perfect for layering or standing out on its own.",
    colors: [
        { name: "Obsidian Black", code: "#1c1917" },
        { name: "Concrete Grey", code: "#57534e" },
        { name: "Burnt Orange", code: "#f97316" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1620799140187-5b603146744c?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=1000&auto=format&fit=crop",
    ],
};

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProductDetails() {
    const { id } = useParams(); // Retrieves the ID from URL (e.g., /products/1)

    // Local State
    const [activeImage, setActiveImage] = useState(productData.images[0]);
    const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
    const [selectedSize, setSelectedSize] = useState("M");
    const [quantity, setQuantity] = useState(1);

    // Reset active image when product changes (future proofing)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <section className="min-h-screen bg-white py-10 pb-20">
            <div className="container">
                {/* 1. Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-stone-500 mb-8">
                    <Link
                        to="/"
                        className="hover:text-stone-900 transition-colors"
                    >
                        Home
                    </Link>
                    <span>/</span>
                    <Link
                        to="/products"
                        className="hover:text-stone-900 transition-colors"
                    >
                        Products
                    </Link>
                    <span>/</span>
                    <span className="text-stone-900 font-medium truncate">
                        {productData.title}
                    </span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* 2. Left Column: Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-4"
                    >
                        {/* Main Image */}
                        <div className="md:w-1/2 mx-auto lg:w-full h-150 sm:h-125 lg:h-150 bg-gray-100 rounded-3xl overflow-hidden cursor-zoom-in">
                            <motion.img
                                key={activeImage} // Triggers animation on change
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                src={activeImage}
                                alt={productData.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-4">
                            {productData.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(img)}
                                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                                        activeImage === img
                                            ? "border-stone-900 opacity-100"
                                            : "border-transparent opacity-70 hover:opacity-100"
                                    }`}
                                >
                                    <img
                                        src={img}
                                        alt="Thumbnail"
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* 3. Right Column: Product Info */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-6 lg:sticky lg:top-24 h-fit"
                    >
                        {/* Header Info */}
                        <div>
                            <div className="flex justify-between items-start">
                                <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-2">
                                    {productData.title}
                                </h1>
                                <button className="p-2 rounded-full hover:bg-gray-100 text-stone-400 hover:text-red-500 transition-colors">
                                    <LuHeart size={24} />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-1 text-orange-500">
                                    <LuStar fill="currentColor" />
                                    <span className="font-bold text-stone-900 ml-1">
                                        {productData.rating}
                                    </span>
                                </div>
                                <span className="text-stone-300">|</span>
                                <span className="text-stone-500 text-sm">
                                    {productData.reviews} Reviews
                                </span>
                            </div>

                            <div className="flex items-end gap-3">
                                <span className="text-3xl font-bold text-stone-900">
                                    ${productData.price}
                                </span>
                                <span className="text-lg text-stone-400 line-through mb-1">
                                    ${productData.oldPrice}
                                </span>
                                <span className="text-orange-500 text-sm font-bold bg-orange-100 px-2 py-1 rounded mb-1">
                                    20% OFF
                                </span>
                            </div>
                        </div>

                        {/* Divider */}
                        <hr className="border-stone-100" />

                        {/* Description */}
                        <p className="text-stone-500 leading-relaxed">
                            {productData.description}
                        </p>

                        {/* Selectors */}
                        <div className="space-y-6">
                            {/* Color Selector */}
                            <div>
                                <span className="text-sm font-bold text-stone-900 uppercase block mb-3">
                                    Color: {selectedColor.name}
                                </span>
                                <div className="flex gap-3">
                                    {productData.colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() =>
                                                setSelectedColor(color)
                                            }
                                            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                                                selectedColor.name ===
                                                color.name
                                                    ? "border-stone-900 scale-110"
                                                    : "border-transparent hover:scale-110"
                                            }`}
                                        >
                                            <span
                                                className="w-8 h-8 rounded-full shadow-sm border border-black/10"
                                                style={{
                                                    backgroundColor: color.code,
                                                }}
                                            ></span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Size Selector */}
                            <div>
                                <div className="flex justify-between mb-3">
                                    <span className="text-sm font-bold text-stone-900 uppercase">
                                        Size: {selectedSize}
                                    </span>
                                    <button className="text-xs text-stone-500 underline hover:text-orange-500">
                                        Size Guide
                                    </button>
                                </div>
                                <div className="grid grid-cols-5 gap-2">
                                    {productData.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() =>
                                                setSelectedSize(size)
                                            }
                                            className={`py-3 rounded-lg text-sm font-bold transition-all border ${
                                                selectedSize === size
                                                    ? "bg-stone-900 text-white border-stone-900 shadow-lg"
                                                    : "bg-white text-stone-600 border-stone-200 hover:border-stone-900"
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            {/* Quantity */}
                            <div className="flex items-center justify-between bg-gray-50 rounded-full px-4 py-3 border border-stone-200 sm:w-1/3">
                                <button
                                    onClick={() =>
                                        setQuantity((q) => Math.max(1, q - 1))
                                    }
                                    className="p-1 hover:text-orange-500 transition-colors"
                                >
                                    <LuMinus />
                                </button>
                                <span className="font-bold text-stone-900">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity((q) => q + 1)}
                                    className="p-1 hover:text-orange-500 transition-colors"
                                >
                                    <LuPlus />
                                </button>
                            </div>

                            {/* Add to Cart */}
                            <button className="flex-1 bg-stone-900 text-white rounded-full py-4 font-bold flex items-center justify-center gap-2 hover:bg-orange-500 transition-all shadow-xl active:scale-95">
                                <LuShoppingCart size={20} /> Add to Cart
                            </button>
                        </div>

                        {/* Extra Info Icons */}
                        <div className="grid grid-cols-2 gap-4 text-xs text-stone-500 mt-2">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-gray-100 rounded-full">
                                    <LuTruck size={16} />
                                </div>
                                <span>Free shipping over $100</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-gray-100 rounded-full">
                                    <LuShieldCheck size={16} />
                                </div>
                                <span>Secure payment</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
