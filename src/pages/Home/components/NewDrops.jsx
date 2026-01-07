import { motion } from "motion/react";
import ProductCard from "../../../components/ui/ProductCard";

const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};
const cardsVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function NewDrops() {
    return (
        <section id="new-drops" className="my-14">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={titleVariants}
                    className="section-title"
                >
                    <h2 className="text-4xl uppercase font-bold">New Drops</h2>
                    <p className="text-gray-500 md:w-7/12 mt-2">
                        Stand out with our latest collection-bold designs,
                        premium fabrics, and street-ready fits. Once they're
                        gone, they're gone. Don't miss out!
                    </p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardsVariants}
                    className="cards-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12"
                >
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </motion.div>
            </div>
        </section>
    );
}
