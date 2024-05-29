import { motion, useScroll, useTransform } from "framer-motion";
import mountain from "../../assets/mountains.png";
import planets from "../../assets/planets.png";
import stars from "../../assets/stars.png";
import { useRef } from "react";
const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
      className="w-full h-full relative flex justify-center items-center overflow-hidden"
    >
      <motion.h1 style={{ y: yText }} className="text-8xl">
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${mountain})`,
        }}
        className="absolute bg-cover bg-bottom w-full h-full z-[3]"
      ></motion.div>

      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${planets})`,
        }}
        className="absolute bg-cover bg-bottom w-full h-full z-[2]"
      ></motion.div>

      <motion.div
        style={{
            x:yBg,
          backgroundImage: `url(${stars})`,
        }}
        className="absolute bg-cover bg-bottom w-full h-full z-[1]"
      ></motion.div>
    </div>
  );
};

export default Parallax;
