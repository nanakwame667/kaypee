import { motion } from "framer-motion";

export const TextLoader = () => {
  return (
    <div className="relative overflow-hidden flex w-full items-center justify-center h-[100vh] ">
      {/* Static text (invisible, just for sizing) */}
      <span className="opacity-0 font-rage font-normal text-black text-5xl md:text-[80px] leading-normal">
        Kwame Frimpong...
      </span>

      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
        style={{
          width: "50%", // Gradient width
        }}
      />
    </div>
  );
};
