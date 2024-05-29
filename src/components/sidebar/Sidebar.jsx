import { motion } from "framer-motion";
import Links from "./Links";
import ToggleButton from "./ToggleButton";
import { useState } from "react";


const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition:{
        type: "spring",
        stiffness: 20,
      }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 40,
        }
    },
  }

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    return (
        <motion.div animate={open ? "open" : "closed"} className="flex-col items-center justify-center bg-white text-black">
          <motion.div variants={variants} className="fixed top-0 bottom-0 w-[400px] bg-white z-[999]">
            <Links></Links>
          </motion.div>
           <ToggleButton open={open} setOpen={setOpen}></ToggleButton>
        </motion.div>
    );
};

export default Sidebar;