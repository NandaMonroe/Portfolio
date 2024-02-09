import React, { useState } from 'react';

// next image
import Image from 'next/image';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: 'Languages',
    info: [
      {
        image: '/java.png',
        name: 'Java',
      },
      {
        image: '/python.png',
        name: 'Python',
      },
      {
        image: '/typescript.png',
        name: 'TypeScript'
      },
      {
        image: '/html-5.png',
        name: 'Html5'
      },
      {
        image: '/javascript.png',
        name: 'JavaScript',
      },
      {
        image: '/css-3.png',
        name: 'CSS',
      },
    ],
  },
  {
    title: 'Frameworks',
    info: [
      {
        image: '/atom.png',
        name: 'React'
      },
      {
        image: '/node.png',
        name: 'NodeJS',
      },
      {
        image: '/vite.png',
        name: 'Vite',
      },
      {
        image: '/nextjs.png',
        name: 'NextJS',
      },
    ],
  },
  {
    title: 'Libraries',
    info: [
      {
        image: '/bootstrap.png',
        name: 'Bootstrap 5'
      },
      {
        image: '/mu5.png',
        name: 'MaterialUI',
      },
      {
        image: '/tailwind.png',
        name: 'Tailwind',
      },
    ],
  },
  {
    title: 'Database',
    info: [
      {
        image: '/mysql.png',
        name: 'MySQL',
      },
      {
        image: '/mongodb.png',
        name: 'MongoDB',
      },
    ],
  },
  {
    title: 'Tools',
    info: [
      {
        image: '/springb.png',
        name: 'SpringBoot',
      },
      {
        image: '/aws.png',
        name: 'AWS',
      },
      {
        image: '/postman.png',
        name: 'Postman',
      },
      {
        image: '/git.png',
        name: 'Git',
      },
    ],
  },
];
const aboutDataOriginal = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Software Development - Coding Dojo',
        stage: 'Part of Colorado Technical University',
      },
      {
        title: 'Bachelors of Science Civil Engineer',
        stage: 'Universidade Santa Cecilia',
      }
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index)
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar image */}
      <motion.div
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[350px] max-w-[726px] max-h-[696px]'
      >
        {/* max-w-[526px] max-h-[496px] */}
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col'>
          {/* text */}
          <motion.h2 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'>
            Hi, I am a <span className='text-amber-500'>Software</span> developer.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            I began my journey after completing a 16 week long bootcamp with 70+ hours a week,
            colaborating and coding with people all over the world
            {/* I began freelancing as a developer. Since then, I've 
            done remote work for agencies, counsulted for startups, and 
            collaborated on digital products for business and consumer use. */}
          </motion.p>
          {/* counters */}
          <motion.div 
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-amber-500 mb-2'>
                  <CountUp start={0} end={5} duration={10} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-amber-500 mb-2'>
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-amber-500 mb-2'>
                  <CountUp start={0} end={650} duration={10} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-10'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-amber-500 after:w-[100%] after:bg-amber-500 after:transition-all after:duration-300' 
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className='py-2 xl:py-6 grid grid-cols-3 grid-rows-3 xl:ml-4 md:mx-auto gap-x-8 gap-y-2 xl:gap-y-4 items-center flex-wrap'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className='flex-1 flex flex-col max-w-max gap-y-6 items-center'>
                  {/* icons */}
                  <Image src={item.image} width={100} height={100} alt='' className='flex gap-x-4'/>
                  {/* title */}
                  <div className='font-light'>{item.name}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
