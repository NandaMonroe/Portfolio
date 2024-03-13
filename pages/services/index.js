// components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            {/* subtitle */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="font-semibold text-lg md:text-xl"
            >
              <span className="text-amber-500">Coding</span>, <span className="text-amber-500">Debugging</span>, & <span className="text-amber-500">Design</span>.
            </motion.h2>
            {/* title */}
            <motion.h2
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mt-2"
            >
              My services <span className="text-amber-500">.</span>
            </motion.h2>
            {/* paragraph */}
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[400px] mx-auto lg:mx-0"
            >
              I offer custom website development services in <span className="text-amber-500">front-end</span>, <span className="text-amber-500">back-end</span>, and <span className="text-amber-500">full-stack</span> programming.
              Are you experiencing a project gap or error? Let's collaborate on
              an effective solution for long-term success.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] h-full flex items-center"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
