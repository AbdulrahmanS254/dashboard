import { motion } from "motion/react";
import { Link } from "react-router";
import {
    LuTrash2,
    LuMinus,
    LuPlus,
    LuArrowRight,
    LuShoppingBag,
} from "react-icons/lu";

// Mock Data (عشان نتخيل الشكل لحد ما نركب Redux)
const cartItems = [
    {
        id: 1,
        title: "Shadow Drip Hoodie",
        price: 99,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Hoodies",
        quantity: 1,
    },
    {
        id: 2,
        title: "Urban Cargo Pants",
        price: 85,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=997&auto=format&fit=crop",
        category: "Pants",
        quantity: 2,
    },
];

export default function Cart() {
    // حالة العربة فارغة (للتجربة غير الرقم ده لـ 0)
    const isEmpty = cartItems.length === 0;

    if (isEmpty) return <EmptyCartState />;

    return (
        <section className="min-h-screen bg-white py-10">
            <div className="container">
                <h1 className="text-3xl font-bold uppercase mb-8">
                    Your Cart{" "}
                    <span className="text-stone-400 text-lg normal-case">
                        ({cartItems.length} items)
                    </span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* 1. Cart Items List (Left Side) */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        {cartItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col sm:flex-row gap-6 p-4 border border-stone-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white"
                            >
                                {/* Image */}
                                <div className="w-full sm:w-32 h-60 sm:h-32 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Details */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-stone-400 text-xs font-bold uppercase">
                                                {item.category}
                                            </p>
                                            <h3 className="text-lg font-bold text-stone-900">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <button className="text-stone-400 hover:text-red-500 transition-colors p-2">
                                            <LuTrash2 size={20} />
                                        </button>
                                    </div>

                                    <div className="flex justify-between items-end mt-4 sm:mt-0">
                                        {/* Quantity Controls */}
                                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-stone-200">
                                            <button className="w-8 h-8 flex items-center justify-center text-stone-500 hover:bg-white hover:shadow-sm rounded-md transition-all">
                                                <LuMinus size={14} />
                                            </button>
                                            <span className="font-bold text-sm w-4 text-center">
                                                {item.quantity}
                                            </span>
                                            <button className="w-8 h-8 flex items-center justify-center text-stone-500 hover:bg-white hover:shadow-sm rounded-md transition-all">
                                                <LuPlus size={14} />
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <p className="text-xl font-bold text-stone-900">
                                            ${item.price * item.quantity}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* 2. Order Summary (Right Side) */}
                    <div className="lg:col-span-1">
                        <div className="bg-stone-900 text-white p-8 rounded-3xl sticky top-24 shadow-xl">
                            <h2 className="text-xl font-bold mb-6">
                                Order Summary
                            </h2>

                            <div className="flex flex-col gap-4 mb-8 text-stone-300 text-sm">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="text-white font-bold">
                                        $269.00
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="text-white font-bold">
                                        Free
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax (Estimated)</span>
                                    <span className="text-white font-bold">
                                        $12.00
                                    </span>
                                </div>
                                <div className="border-t border-stone-700 my-2"></div>
                                <div className="flex justify-between text-lg text-white font-bold">
                                    <span>Total</span>
                                    <span className="text-orange-500">
                                        $281.00
                                    </span>
                                </div>
                            </div>

                            <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all active:scale-95 cursor-pointer">
                                Checkout <LuArrowRight />
                            </button>

                            <p className="text-stone-500 text-xs text-center mt-4">
                                Secure Checkout - 30 Days Return
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// 3. Empty State Component (شكل شيك لو العربية فاضية)
function EmptyCartState() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <div className="bg-orange-100 p-6 rounded-full text-orange-500 mb-6">
                <LuShoppingBag size={48} />
            </div>
            <h2 className="text-3xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-stone-500 mb-8 max-w-md">
                Looks like you haven't added anything to your cart yet. Go ahead
                and explore our top categories.
            </p>
            <Link
                to="/products"
                className="bg-stone-900 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition-colors shadow-lg"
            >
                Start Shopping
            </Link>
        </div>
    );
}
