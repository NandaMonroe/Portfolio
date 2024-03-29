// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 items-center">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mt-10 lg:mt-0 mb-4 xl:mb-0">
            {/* subtitle */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="font-semibold text-lg md:text-xl"
            >
              <span className="text-amber-500">Website</span> & <span className="text-amber-500">App Development</span>
            </motion.h2>
            {/* title */}
            <motion.h2
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mt-2"
            >
              My work <span className="text-amber-500">.</span>
            </motion.h2>
            {/* paragraph */}
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              I build <span className="text-amber-500">accessible</span>, <span className="text-amber-500">engaging</span>, and <span className="text-amber-500">eye-catching</span> websites and apps,
              creating successful user engagement experiences. Discover my
              coding and <span className="text-amber-500">software design projects</span> to learn more about my style,
              skills, and expertise.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
