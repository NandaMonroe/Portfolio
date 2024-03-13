
//components
import ParticlesContainer from '../src/components/ParticlesContainer';
import ProjectsBtn from '../src/components/ProjectsBtn';
import Avatar from '../src/components/Avatar';

// framer motion
import {motion} from 'framer-motion'

// variants
import {fadeIn} from '../variants'

const Home = () => {
  return (
    <div className='bg-primary/60 h-full flex'>
      {/* left side */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto'>
          {/* subtitle */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="text-2xl font-bold"
          >
            Transforming <span className="text-amber-500">Digital Visions</span> Into{' '}
            <span className="text-amber-500"> Reality</span>
          </motion.h1>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2"
          >
            Web & Software Programmer
          </motion.h1>
          {/* paragraph */}
          <motion.p             
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-7 xl:mb-10"
            >
            Hi, I’m Fernanda, welcome to my portfolio. 
            <br/>
            <br/>
            I’m a <span className="text-amber-500">certified full-stack developer</span> specializing in designing, developing, and debugging websites for optimized user experiences. My work blends creativity with precision, bringing an innovative and analytical mindset to your projects. Explore my <span className="text-amber-500">website and software development portfolio</span> or my GitHub profile to see if my knowledge and skills fit your needs.
          </motion.p>
          {/* btn */}
          {/* <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div> 
           <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden xl:flex"
          >
            <ProjectsBtn/>
          </motion.div>*/}
        </div>
      </div>
      {/* right side */}
      <div className="w-full h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{ position: 'absolute', right: '50px' }}
          className="w-full h-full max-w-[526px] max-h-[476px] -bottom-32 lg:bottom-0 lg:right-[8%">
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
