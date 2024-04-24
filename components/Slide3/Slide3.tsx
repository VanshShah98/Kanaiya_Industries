import Slider from './Slider';

export default function Slide3() {
  // made responsive
  return (
    <>
      <section id="Our Projects">
        <div className='bg-white flex flex-col lg:flex-row h-auto'>
          <div className='text-black text-3xl lg:text-5xl font-bold pl-8 pt-20 underline'>
            <p className='pt-2'>Projects</p>
          </div>

          <div className='w-5/6 lg:w-2/3 lg:pt-72 md:pt-24 lg:items-center lg:justify-center pl-16'>
            <Slider />
          </div>
        </div>
      </section>
    </>
  );
}
