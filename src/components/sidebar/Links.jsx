import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 200,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <motion.div
      variants={variants}
      className="absolute bg-red-200 text-[40px] h-full w-full flex flex-col items-center justify-center gap-5"
    >
      {items.map((item) => (
        <motion.a key={item} href={`#${item}`} variants={itemVariants}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
