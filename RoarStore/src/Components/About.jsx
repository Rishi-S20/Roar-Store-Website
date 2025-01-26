import { motion } from "framer-motion";
import food from "../assets/food.jpeg";
import merch from "../assets/merch.jpeg";
import drinks from "../assets/drinks.jpeg";

const About = ({ theme }) => {
  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col gap-16 font-sora items-center justify-center
            ${
              theme === "light"
                ? "bg-gradient-to-r from-[rgb(225,225,225)] to-[#ffffcc]"
                : "bg-gradient-to-r from-[rgb(15,15,15)] to-[#272616]"
            }`}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`shadow-xl ${
          theme === "light" ? "shadow-gray-400" : "shadow-black/50"
        }`}
      >
        <h2
          className={`text-5xl pt-16 font-bold
                    ${
                      theme === "light"
                        ? "bg-gradient-to-r from-[#6f6b3e] to-[#0f0f0f] text-transparent bg-clip-text"
                        : "bg-gradient-to-r from-[#d1a63d] to-[#fde9b9] text-transparent bg-clip-text"
                    }
                    `}
        >
          About The Roar Store
        </h2>
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
            <h2 className="card-title font-bold">Saber Merch</h2>
            <p>
              Show your Saber pride with our premium hoodies, t-shirts, and
              athletic wear. New designs arrive monthly!
            </p>
          </div>
          <figure>
            <img src={merch} alt="Merch" />
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
            <h2 className="card-title font-bold">School Essentials</h2>
            <p>
              From notebooks to snacks, we have got everything you need to power
              through your school day.
            </p>
          </div>
          <figure>
            <img src={food} alt="Food" />
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
            <h2 className="card-title font-bold">Refreshing Drinks</h2>
            <p>
              Stay hydrated with our selection of cold drinks! From water and
              sports drinks to sodas and energy drinks - perfect for any time of
              day.
            </p>
          </div>
          <figure>
            <img src={drinks} alt="Drinks" />
          </figure>
        </motion.div>
      </div>
    </section>
  );
};

import PropTypes from "prop-types";

About.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
};

export default About;
