import React from 'react';
import { motion } from "motion/react"


const About = () => {


    return (


        <section id="about" className="min-h-screen flex flex-col items-center justify-start gap-20  bg-base-200">
            <h2 className="text-4xl pt-16 font-bold">About The Roar Store</h2>

            <div className="flex gap-16 flex-col sm:flex-row p-8">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Saber Merch</h2>
                        <p>We have a long selection of Saber sweatshirts and hoodies</p>
                    </div>
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                </div>

                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
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