// framer motion
import { motion } from 'framer-motion'

// variants
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  },
};

const Transition = () => {
  return (
    <>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#323234]'
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{delay: 0.2, duartion: 0.6, ease: 'easeInOut'}}
      ></motion.div>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#4c4b4e]'
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{delay: 0.4, duartion: 0.6, ease: 'easeInOut'}}
      ></motion.div>
            <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#565658]'
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{delay: 0.6, duartion: 0.6, ease: 'easeInOut'}}
      ></motion.div>
    </>
  );
};

export default Transition;
