import React from 'react'
import { motion } from "framer-motion";


const Promotions = ({ theme }) => {

    return (
        <section id="promotions" className={`min-h-screen p-8 flex flex-col gap-16 font-sora items-center justify-center
            ${theme === 'light'
                ? 'bg-gradient-to-r from-[rgb(225,225,225)] to-[#ffffcc]'
                : 'bg-gradient-to-r from-[rgb(15,15,15)] to-[#272616]'
            }`}>
            <h2 className="text-4xl font-bold">Ongoing Promotions</h2>
        </section>

    );

}


export default Promotions;