import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <motion.div
        className="w-[100px] h-[100px] bg-red-400 text-white flex justify-center items-center p-2"
        animate={{ scale: [10.5, 0.6, 0.7, 1, 1.2] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        Text
      </motion.div>
    </div>
  );
}

export default App;
