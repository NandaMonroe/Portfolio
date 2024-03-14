// components
import Circles from '/components/Circles';

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer motion
import { motion } from 'framer-motion';

// variants 
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='text-3xl font-semibold text-center mb-12'
          >
            Ready for a <span className='text-amber-500'>Digital Transformation</span>?
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            action='https://getform.io/f/5eV4EWbE'
            method='POST'
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full '>
              <input type="text" placeholder='name' name='name' className='input hover:border-amber-500' />
              <input type="text" placeholder='email' name='email' className='input hover:border-amber-500' />
            </div>
            <input type="text" placeholder='subject' name='subject' className='input hover:border-amber-500' />
            <textarea placeholder='message' name='message' className='textarea hover:border-amber-500'></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-amber-500 group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-amber-500 '>Let&apos;s connect</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
