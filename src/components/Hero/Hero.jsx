import { motion } from "framer-motion";
import hero from "../../assets/hero.png";
import scrollButton from "../../assets/scroll.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButtonAnimation: {
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: -4000,
    transition: {
      duration: 95,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};
const Hero = () => {
  return (
    <div className="h-[calc(100vh-100px)] relative overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132)]">
      <div className="px-44 h-full">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="w-1/2 h-full flex flex-col justify-center gap-[40px]"
        >
          <motion.h2
            variants={textVariants}
            className="text-[30px] text-violet-700 tracking-widest"
          >
            ASM SAKI
          </motion.h2>

          <motion.h1
            variants={textVariants}
            className="text-[50px] leading-none"
          >
            Web developer and UI designer
          </motion.h1>

          <motion.div variants={textVariants}>
            <motion.button
              variants={textVariants}
              className="px-5 py-3 border-[1px] border-solid border-white rounded-[10px] bg-transparent text-white cursor-pointer font-light"
            >
              See the Latest Works
            </motion.button>

            <motion.button
              variants={textVariants}
              className="px-5 py-3 ml-5 border-[1px] border-solid border-white rounded-[10px] bg-transparent text-white cursor-pointer font-light"
            >
              Contact Me
            </motion.button>
            <motion.img
              variants={textVariants}
              className="w-[50px] pt-10"
              animate="scrollButtonAnimation"
              src={scrollButton}
              alt=""
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute text-[50vh] bottom-[-80px] whitespace-nowrap w-1/2 font-bold opacity-5"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="h-full absolute top-0 right-0">
        <img src={hero} alt="" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default Hero;
