'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper';
import { projectData } from '@/constants/projectData';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { BsGithub } from 'react-icons/bs';
import { IoLogoVercel } from 'react-icons/io5';
import { SiVercel } from 'react-icons/si';

const ProjectSlider = () => {
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
        clickable: true,
      }}
      modules={[Pagination, FreeMode]}
      className='h-[240px] sm:h-[340px]'
    >
      {projectData.map((project, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className='
              flex flex-col
              h-[85%]
              justify-between
              rounded-lg
              bg-gradient-to-r
              from-accent/50
              to-primary/30
              p-4
              transition
              shadow-md              
              backdrop-filter
              backdrop-blur-lg
              shadow-accent/20             
              hover:from-accent/70
              hover:to-primary/50
              hover:text-white/70                
              duration-200
              cursor-pointer
            '
            >
              <div className='flex flex-col mb-2 justify-evenly items-center'>
                <div className='flex items-center justify-center gap-x-4'>
                  <div className='text-xl'>{project.icon}</div>
                  <h3
                    className='
                    text-xl
                    font-semibold
                    text-white/70
                    transition
                    duration-200
                    hover:text-accent
                  '
                  >
                    {project.title}
                  </h3>
                </div>
                <Link
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='
                    text-white/70
                    hover:text-accent                                        
                    transition
                    duration-200
                    text-3xl
                    justify-center
                    flex
                    mt-5                    
                    group
                    '
                >
                  <span
                    className='
                     text-lg
                    '
                  >
                    Visit @ &nbsp;
                  </span>
                  <span className='group-hover:animate-transition-bounce transition duration-200'>
                    {project.url.includes('vercel') ? (
                      <SiVercel />
                    ) : (
                      <BsGithub />
                    )}
                  </span>
                </Link>
              </div>
              <p className='text-sm'>{project.description}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProjectSlider;
