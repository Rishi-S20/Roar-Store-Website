import PropTypes from "prop-types";

const AnimatedBackground = ({ children, theme }) => {
  return (
    <div
      className={`
            relative min-h-screen w-full
            bg-gradient-radial bg-[size:400%_400%] animate-gradient
            ${
              theme === "light"
                ? "from-[rgb(225,225,225)] via-[#ffffab] to-[rgb(225,225,225)]"
                : "from-[rgb(15,15,15)] via-[#3b391f] to-[rgb(15,15,15)]"
            }
        `}
    >
      <div className="relative z-10 min-h-screen p-8 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

AnimatedBackground.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
};

export default AnimatedBackground;
