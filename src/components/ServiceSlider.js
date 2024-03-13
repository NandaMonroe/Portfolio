// import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxGear,
  RxPerson,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from 'swiper';

// service data
const serviceData = [
  {
    icon: <RxPerson />,
    title: 'Front-End',
    description: 'Seamless designs, because a great user experience always comes first.',
  },
  {
    icon: <RxGear />,
    title: 'Back-End',
    description: 'The spices of coding live here- making it my favorite part of site and app development. ',
  },
  {
    icon: <RxDesktop />,
    title: 'Full Stack',
    description: 'Combining client-side and server-side expertise for a full-service experience. ',
  },
  // {
  //   icon: <RxReader />,
  //   title: 'Web Development',
  //   description: 'Building and maintaining websites and web applications.',
  // },
  // {
  //   icon: <RxRocket />,
  //   title: 'Mobile App',
  //   description: 'Creating and maintaining applications for mobile devices, such as smartphones and tablets.',
  // },
];

const ServiceSlider = () => {
  return (
    <Swiper 
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },

      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[300px]'
    >
      {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='bg-[rgba(80,75,95,0.15)] h-[300px] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(124,118,146,0.15)] transition-all duration-300'>
                {/* icon */}
                <div className='text-4xl text-amber-500 mb-4'>{item.icon}</div>
                {/* title & desc */}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>
                    {item.description}
                  </p>
                </div>
                {/* arrow
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-amber-500 transition-all duration-300'/>
                </div> */}
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper >
  );
};

export default ServiceSlider;
