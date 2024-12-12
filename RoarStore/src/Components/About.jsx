import React from 'react';
import { motion } from "motion/react"


import saberMerch from '../assets/saber-merch.jpeg'  // adjust extension if needed (.jpg, .png, .jpeg)

const About = () => {


    return (


        <section id="about" className="min-h-screen flex flex-col items-center justify-start gap-20  bg-base-200 font-sora">
            <h2 className="text-4xl pt-16 font-bold">About The Roar Store</h2>

            <div className="flex gap-14 flex-col sm:flex-row p-8 flex-wrap justify-center">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Saber Merch</h2>
                        <p>Show your Saber pride with our premium hoodies, t-shirts, and athletic wear. New designs arrive monthly!</p>
                    </div>
                    <figure>
                        <img className="h-96 w-96"
                            src={saberMerch}
                            alt="Saber Merchandise" />
                    </figure>
                </div>

                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">School Essentials</h2>
                        <p>From notebooks to snacks, we've got everything you need to power through your school day.</p>
                    </div>
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                </div>

                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Refreshing Drinks</h2>
                        <p>Stay hydrated with our selection of cold drinks! From water and sports drinks to sodas and energy drinks - perfect for any time of day.</p>
                    </div>
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                </div>

            </div>



        </section>
    );

}


export default About;