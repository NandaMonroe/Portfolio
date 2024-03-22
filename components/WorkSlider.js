// work slider data
const workSlider = {
  slides: [
    {
      projects: [
        {
          title: "MKT Studio",
          desc: "A marketing agency website",
          demo: "https://nandamonroe.github.io/MKT-Studio/",
          github: "https://github.com/NandaMonroe/MKT-Studio",
          image: "/thumb3.png",
        },
        {
          title: "Nike Store",
          desc: "Nike ecommerce website",
          demo: "https://nandamonroe.github.io/Ecommerce/",
          github: "https://github.com/NandaMonroe/Ecommerce",
          image: "/thumb2.png",
        },
        {
          title: "Akio Dash",
          desc: "A ecommerce dashboard",
          demo: "https://nandamonroe.github.io/AkioDashboard/",
          github: "https://github.com/NandaMonroe/AkioDashboard",
          image: "/thumb1.png",
        },
        {
          title: "Francesco",
          desc: "A italian restaurant website",
          demo: "https://nandamonroe.github.io/Francesco/",
          github: "https://github.com/NandaMonroe/Francesco",
          image: "/francesco.png",
        },
      ],
    },
    {
      projects: [
        {
          title: "Trew Dash",
          desc: "A ecommerce dashboard",
          demo: "https://nandamonroe.github.io/TrewDashboard/",
          github: "https://github.com/NandaMonroe/TrewDashboard",
          image: "/thumb4.png",
        },
        {
          title: "Traveledge",
          desc: "Your next travel destination is here",
          demo: "",
          github: "https://github.com/NandaMonroe/Traveledge",
          image: "/traveledge.png",
        },
        {
          title: "E-Smart",
          desc: "Employee management system",
          demo: "",
          github: "https://github.com/NandaMonroe/E-Smart",
          image: "/e-smart.png",
        },
        {
          title: "Sasquatch Websighting",
          desc: "A platform to report sasquatch sightings",
          demo: "",
          github: "",
          image: "/sasquatch.png",
        },
      ],
    },
  ],
};

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

// next image
import Image from "next/image";

// next link
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[340px] sm:h-[380px] md:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.projects.map((project, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image
                        src={project.image}
                        width={500}
                        height={100}
                        alt=""
                      />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#e87e38] to-[#923020] opacity-0 group-hover:opacity-90 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute flex flex-col items-center gap-5 mt-20 translate-y-full group-hover:-translate-y-10 group-hover:xl-translate-y-20 transition-all duration-300">
                        <div className="text-black/80 text-xl lg:text-3xl italic font-bold translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-100">
                          {project.title}
                        </div>
                        <p className="text-white/80 italic font-semibold translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-100">
                          {project.desc}
                        </p>
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <Link
                            href={project.demo}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            className="btn cursor-pointer rounded-lg bg-black/70 border-black border-2 hover:bg-black/50 hover:shadow-md text-white/80 font-semibold p-3 xl:px-5 transition-all duration-300 flex items-center justify-center overflow-hidden group delay-200"
                          >
                            DEMO
                          </Link>
                          {/* title part 2 */}
                          <Link
                            href={project.github}
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                            className="btn cursor-pointer rounded-lg bg-black/70 border-black border-2 hover:bg-black/50 hover:shadow-md text-white/80 font-semibold p-3 xl:px-5 flex items-center justify-center overflow-hidden group translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-300"
                          >
                            CODE
                          </Link>
                          {/* icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
