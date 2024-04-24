import Image from 'next/image'
import Text from './text'
import Slider from './swiper'

export default function Slide1() {
  return (
    <>
    {/* Responsive made */}
      <section id="Home">
        <div className='bg-[#1D231C] flex flex-col lg:flex-row h-auto lg:h-screen'>
          <div className='w-full lg:w-[50%] h-[300px] lg:h-auto p-4 lg:pl-24 lg:pt-14'>
            <Slider />
          </div>

          <div className='w-full lg:w-[50%] p-4 lg:pl-36 lg:pt-44'>
            <Text />
          </div>
        </div>
      </section>
    </>
  )
}
