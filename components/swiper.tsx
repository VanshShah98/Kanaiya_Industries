"use client"
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NextPage } from 'next';
import { EffectCoverflow } from 'swiper/modules';


const Slider: NextPage = () => {
  return (
    <div className=''>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,EffectCoverflow,EffectFade]}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,}}
        breakpoints={{
          // when window width is >= 1024px (laptop view)
          1024: {
            effect: 'coverflow',
          },
          // when window width is < 1024px (other views)
          720:{
            effect: 'fade',
            centeredSlides:true,

          },
          0: {
            effect: 'fade',
            slidesPerView:1,
            spaceBetween:30,
            
          },
        }}
      >
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full h-[400px]' src={'Pre1.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full h-[400px]' src={'Pre2.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full h-[400px]' src={'Floor1.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-auto h-[400px]' src={'C1.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full h-[400px]' src={'C2.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full h-[400px]' src={'C3.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full h-[400px]' src={'C4.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full h-[400px]' src={'C7.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full h-[400px]' src={'C8.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full h-[400px]' src={'Sipan8pu.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>
      
        <SwiperSlide className='flex items-center justify-center'>
          <Image className='w-full h-[400px]' src={'C9.svg'} alt={'Image'} width={96} height={96} />
        </SwiperSlide>   
       
        </Swiper>
    </div>
  );
};

export default Slider;
