import { Link } from "react-router";
import { LuShoppingCart } from "react-icons/lu";

const ProductCard = () => {
    return (
        <Link className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-orange-400/20 transition-all duration-300">
            {/* Card Image */}
            <div className="relative h-72 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1622567893612-a5345baa5c9a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Shadow Drip Hoodie"
                />

                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                    New Arrival
                </span>
            </div>
            {/* Card Text (Product Name) */}
            <div className="p-5 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-orange-500 transition-colors">
                    Shadow Drip
                </h3>
                <p className="text-stone-500 text-sm line-clamp-2 leading-relaxed">
                    A sleek, minimalist hoodie with dark tones and subtle
                    reflective accents for an effortless street vibe.
                </p>
            </div>

            {/* 4. Card Footer */}
            <div className="p-5 pt-0 flex items-center justify-between mt-auto">
                <div className="price flex flex-col">
                    <span className="text-stone-500 text-xs line-through">
                        $120
                    </span>
                    <span className="text-2xl font-bold text-stone-900">
                        $99
                    </span>
                </div>

                <button className="bg-stone-800 text-white py-2 px-8 rounded-full flex items-center gap-1 text-2xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md active:scale-95 cursor-pointer">
                    +<LuShoppingCart size={20} />
                </button>
            </div>
        </Link>
    );
};

export default ProductCard;
