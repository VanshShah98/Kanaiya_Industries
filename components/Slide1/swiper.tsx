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
          <Image className='w-full max-w-[800px] h-72 lg:h-auto' src={'0.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full max-w-[800px] h-72 lg:h-auto' src={'1.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full max-w-[800px] h-72 lg:h-auto' src={'2.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full max-w-[800px] h-72 lg:h-auto' src={'3.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full max-w-[800px] h-72 lg:h-auto' src={'4.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full max-w-[800px] h-72 lg:h-auto' src={'5.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full max-w-[800px] h-72 lg:h-auto' src={'6.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full max-w-[800px] h-72 lg:h-auto' src={'7.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full max-w-[800px] h-72 lg:h-auto' src={'8.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full max-w-[800px] h-72 lg:h-auto' src={'9.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;
