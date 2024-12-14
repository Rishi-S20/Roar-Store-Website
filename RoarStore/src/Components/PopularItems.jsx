import React from 'react'
import Bubblr from './ItemCards/Bubblr';
import Chips from './ItemCards/Chips';
import Hoodies from './ItemCards/Hoodies';
import { motion } from "framer-motion";

const PopularItems = ({ theme }) => {

    return (
        <section id="popItems" className={`min-h-screen p-8 flex flex-col gap-16 font-sora items-center justify-center
            ${theme === 'light'
                ? 'bg-gradient-to-r from-[rgb(225,225,225)] to-[#ffffcc]'
                : 'bg-gradient-to-r from-[rgb(15,15,15)] to-[#272616]'
            }`}>


            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}

            >
                <h2 className={`text-5xl pt-16 font-bold
                    ${theme === 'light'
                        ? 'bg-gradient-to-r from-[#6f6b3e] to-[#0f0f0f] text-transparent bg-clip-text'
                        : 'bg-gradient-to-r from-[#d1a63d] to-[#fde9b9] text-transparent bg-clip-text'
                    }
                    `}>Popular Items</h2>
            </motion.div>



            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}

            >
                <div className="flex flex-col sm:flex-row gap-16 justify-center items-center">
                    <Bubblr theme={theme} />
                    <Chips theme={theme} />
                    <Hoodies theme={theme} />
                </div>
            </motion.div>


        </section>

    );

}


export default PopularItems;