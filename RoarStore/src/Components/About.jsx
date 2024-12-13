import React from 'react';
import { motion } from "framer-motion";
import saberMerch from '../assets/saber-merch.jpeg';
import food from '../assets/food.jpeg';
import merch from '../assets/merch.jpeg';
import drinks from '../assets/drinks.jpeg';

const About = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-start gap-20 bg-base-200 font-sora">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}

            >
                <h2 className="text-4xl pt-16 font-bold">About The Roar Store</h2>
            </motion.div>


            <div className="flex gap-14 flex-col sm:flex-row p-8 flex-wrap justify-center">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="card bg-base-100 w-96 shadow-xl"
                >
                    <div className="card-body">
                        <h2 className="card-title">Saber Merch</h2>
                        <p className='text-white'>Show your Saber pride with our premium hoodies, t-shirts, and athletic wear. New designs arrive monthly!</p>
                    </div>
                    <figure>
                        <img

                            src={merch}
                            alt="Merch"
                        />
                    </figure>
                </motion.div>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="card bg-base-100 w-96 shadow-xl"
                >
                    <div className="card-body">
                        <h2 className="card-title">School Essentials</h2>
                        <p>From notebooks to snacks, we've got everything you need to power through your school day.</p>
                    </div>
                    <figure>
                        <img

                            src={food}
                            alt="Food"
                        />
                    </figure>
                </motion.div>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    className="card bg-base-100 w-96 shadow-xl"
                >
                    <div className="card-body">
                        <h2 className="card-title">Refreshing Drinks</h2>
                        <p>Stay hydrated with our selection of cold drinks! From water and sports drinks to sodas and energy drinks - perfect for any time of day.</p>
                    </div>
                    <figure>
                        <img
                            src={drinks}
                            alt="Drinks"
                        />
                    </figure>
                </motion.div>
            </div>
        </section>
    );
}

export default About;