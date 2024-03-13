import React, { useState } from 'react';


// icons
import { RxDownload } from 'react-icons/rx';

//  data
const aboutData = [
  {
    title: 'Languages',
    info: [
      {
        image: '/html.png',
        name: 'HTML'
      },
      {
        image: '/css.png',
        name: 'CSS',
      },
      {
        image: '/javascript.png',
        name: 'JavaScript',
      },
      {
        image: '/typescript.png',
        name: 'TypeScript'
      },
      {
        image: '/java.png',
        name: 'Java',
      },
      {
        image: '/python.png',
        name: 'Python',
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
        image: '/nextjs2.png',
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
// const aboutDataOriginal = [
//   {
//     title: 'skills',
//     info: [
//       {
//         title: 'Web Development',
//         icons: [
//           <FaHtml5 />,
//           <FaCss3 />,
//           <FaJs />,
//           <FaReact />,
//           <SiNextdotjs />,
//           <SiFramer />,
//           <FaWordpress />,
//         ],
//       },
//       {
//         title: 'UI/UX Design',
//         icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
//       },
//     ],
//   },
//   {
//     title: 'awards',
//     info: [
//       {
//         title: 'Webby Awards - Honoree',
//         stage: '2011 - 2012',
//       },
//       {
//         title: 'Adobe Design Achievement Awards - Finalist',
//         stage: '2009 - 2010',
//       },
//     ],
//   },
//   {
//     title: 'experience',
//     info: [
//       {
//         title: 'Webby Awards - Honoree',
//         stage: '2011 - 2012',
//       },
//       {
//         title: 'Adobe Design Achievement Awards - Finalist',
//         stage: '2009 - 2010',
//       },
//     ],
//   },
//   {
//     title: 'credentials',
//     info: [
//       {
//         title: 'Software Development - Coding Dojo',
//         stage: 'Part of Colorado Technical University',
//       },
//       {
//         title: 'Bachelors of Science Civil Engineer',
//         stage: 'Universidade Santa Cecilia',
//       }
//     ],
//   },
// ];

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

  const newTab = url => {window.open(url)}

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar image */}
      <motion.div
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[300px] max-w-[626px] max-h-[596px]'
      >
        {/* max-w-[526px] max-h-[496px] */}
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-fit flex flex-col justify-between md:justify-around lg:justify-between xl:flex-row gap-x-6'>
        <div className='flex flex-col items-center xl:items-start md:gap-y- xl:gap-y-'>
          {/* subtitle */}
          <motion.h2 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='font-semibold text-lg md:text-xl'>
            <span className='text-amber-500'>Civil Engineer</span> turned <span className='text-amber-500'>Software Developer.</span>
          </motion.h2>
          {/* title */}
          <motion.h2 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 mt-1'>
            My Shift to Tech
          </motion.h2>
          {/* paragraph */}
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-2 xl:mb-12 px-2 xl:px-0'
          >
            From civil engineering to <span className='text-amber-500'>web development and design</span>, I offer a dynamic and global perspective. My background helped me transition careers, and after graduating from Coding Dojo at Colorado Technical University, I began offering <span className='text-amber-500'>full-stack web solutions</span>. Regarding my preference for front-end or back-end design, I genuinely enjoy both, but I think the spices of coding are in the back end. 
          </motion.p>
          {/* resume btn */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-row-reverse mt-2 xl:ml-80'
          >
            <button onClick={() => newTab('https://drive.google.com/file/d/1vtO8WJLPqRW6uA4qkF0okdteVzjGNsaG/view?usp=sharing')} className='btn rounded-lg border border-amber-500 max-w-[170px] p-3 xl:px-8 transition-all duration-300 flex items-center justify-center overflow-hidden group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 '>Resume</span>
              <RxDownload className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.div>
          {/* counters
          <motion.div 
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              experience
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-amber-500 mb-2'>
                  <CountUp start={0} end={5} duration={10} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              clients
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-amber-500 mb-2'>
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              projects
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-amber-500 mb-2'>
                  <CountUp start={0} end={650} duration={10} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[400px] lg:gap-y-10'
        >
          <div className='flex gap-x-4 md:gap-x-8 mx-auto xl:mx-0 md:mt-8 my-7 items-center'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-amber-500 after:w-[100%] after:bg-amber-500 after:transition-all after:duration-300' 
                  } cursor-pointer capitalize text-sm md:text-lg lg:text-2xl relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className='flex py-2 xl:py-6 xl:ml-4 mx-auto gap-x-8 lg:gap-x-12 gap-y-2 md:gap-y-4 lg:gap-y-8 items-center flex-wrap'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className='flex flex-col max-w-max gap-y-3 items-center'>
                  {/* icons */}
                  <img
                  className='h-[50px] w-[50px] md:h-[80px] md:w-[80px]'
                  src={item.image}
                  />
                  {/* name */}
                  <p className='font-light'>{item.name}</p>
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
