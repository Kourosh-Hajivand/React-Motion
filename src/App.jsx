import { motion } from "framer-motion";
import { useRef } from "react";

function App() {
  const constraintsRef = useRef(null);

  return (
    <div>
      <div className="w-full min-h-screen bg-white flex items-center justify-center"></div>
      <div className="w-full h-screen bg-white flex items-center justify-center">
        <motion.div className="w-[450px] h-[450px] relative">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 100, opacity: 0 },
            }}
            src="/public/illustartion 5/5-.png"
          />
          <div className="w-[100px] h-[100px] absolute top-0 left-10">
            <motion.div
              ref={constraintsRef}
              className="w-[100px] h-[100px]  relative  "
            >
              <motion.img
                whileTap="press"
                initial="hidden"
                whileInView="visible"
                className="absolute"
                drag
                dragConstraints={constraintsRef}
                viewport={{ once: false }}
                // whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                variants={{
                  visible: { y: 0, opacity: 1 },
                  hidden: { y: 120, opacity: 0 },
                }}
                src="/public/illustartion 5/3-5.png"
              />
            </motion.div>
          </div>
          <motion.div className="w-[100px] h-[100px]  absolute top-0 right-10 ">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.3 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 140, opacity: 0 },
              }}
              src="/public/illustartion 5/2-5.png"
            />
          </motion.div>
          <div className="w-[100px] h-[100px] absolute bottom-0 right-24 ">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 160, opacity: 0 },
              }}
              src="/public/illustartion 5/2-5.png"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
