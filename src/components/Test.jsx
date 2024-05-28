import { motion } from "framer-motion";
const Test = () => {
    return (
        <motion.div initial={{opacity:0, x:100}} animate={{opacity: 2, x:0}} transition={{type:"spring", delay:1}} className="h-20 w-20 bg-white mx-auto mt-20">
            hello
        </motion.div>
    );
};

export default Test;


