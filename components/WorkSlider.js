// work slider data
const workSlider = {
  slides: [
    {
      projects: [
        {
          path: 'https://nandamonroe.github.io/MKT-Studio/',
          image: '/thumb3.png',
        },
        {
          path: 'https://nandamonroe.github.io/Ecommerce/',
          image: '/thumb2.png',
        },
        {
          path: 'https://nandamonroe.github.io/AkioDashboard/',
          image: '/thumb1.png',
        },
        {
          path: 'https://nandamonroe.github.io/Francesco/',
          image: '/francesco.png',
        },
      ],
    },
    {
      projects: [
        {
          path: 'https://nandamonroe.github.io/TrewDashboard/',
          image: '/thumb4.png',
        },
        {
          path: 'http://nandamonroe.vercel.app',
          image: '/traveledge.png',
        },
        {
          path: 'http://nandamonroe.vercel.app',
          image: '/e-smart.png',
        },
        {
          path: 'http://nandamonroe.vercel.app',
          image: '/sasquatch.png',
        },
      ],
    },
  ],
};

// import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[340px] sm:h-[380px] md:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.projects.map((project, index) => {
                  return (
                    <Link
                      href={project.path}
                      target={'_blank'}
                      rel={'noopener noreferrer'}
                      className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                      key={index}
                    >
                      <div className='flex items-center justify-center relative overflow-hidden group'>
                        {/* image */}
                        <Image src={project.image} width={500} height={100} alt='' />
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e87e38] to-[#923020] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                        {/* title */}
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl-translate-y-20 transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            {/* title part 1 */}
                            <div className='delay-100'>LIVE</div>
                            {/* title part 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                            {/* icon */}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper >
  );
};

export default WorkSlider;

