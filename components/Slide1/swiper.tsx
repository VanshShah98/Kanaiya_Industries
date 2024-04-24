"use client"
import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NextPage } from 'next';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

const Slider: NextPage = () => {
  return (
    <div className='lg:pt-10'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
        effect={'fade'}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full max-w-[800px] h-72 lg:h-auto' src={'Panel_1.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full max-w-[800px] h-72 lg:h-auto' src={'Panel_2.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full max-w-[800px] h-72 lg:h-auto' src={'Panel_3.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full max-w-[800px] h-72 lg:h-auto' src={'Panel_4.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
