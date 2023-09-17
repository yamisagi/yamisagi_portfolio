'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { workSlides } from '@/constants/projectData';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='md:h-[480px] h-[280px] w-full'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className='grid grid-cols-2 grid-rows-2 gap-4 p-8
            md:h-[480px] h-[280px] rounded-lg cursor-pointer 
            w-[90%] mx-auto'
            >
              {slide.images.map((image, i) => {
                return (
                  <div
                    key={i}
                    className='relative overflow-hidden rounded-lg flex items-center 
                    justify-center group'
                  >
                    <div
                      className='flex items-center rounded-lg justify-center relative 
                     group'
                    >
                      <Image
                        src={image.path}
                        alt={image.title}
                        width={500}
                        height={500}
                        layout='intrinsic'
                        className='rounded-lg object-cover object-center'
                      />
                      <div
                        className='absolute inset-0 bg-gradient-to-l 
                      from-transparent via-accent to-[#4a22bd]
                      opacity-0 group-hover:opacity-80 transition-all
                      duration-700'
                      ></div>
                    </div>
                    <div
                      className='absolute bottom-0 translate-y-full 
                        group-hover:-translate-y-10                         
                        group-hover:xl:-translate-y-20
                        transition-all duration-300
                        sm:text-sm
                        '
                    >
                      <Link
                        href={image.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <div className='flex items-center gap-x-2 text-[10px] md:text-[13px] md:tracking-[0.2em]'>
                          <div className='delay-100'>VISIT</div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            PROJECT
                          </div>
                          <div
                            className='text-xl translate-y-[500%]
                            group-hover:translate-y-0 transition-all duration-300 delay-200
                            '
                          >
                            <BsArrowRight />
                          </div>
                        </div>
                      </Link>
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
