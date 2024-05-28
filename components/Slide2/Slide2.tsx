import Card from './Card';
import Image from 'next/image';
// made responsive
export default function Slide2() {
  return (
    <>
      <section id="Our Services">
        <div className='bg-[#0F0F0F] flex flex-col pr-8 lg:pr-0'>
          <div className='text-white text-3xl underline lg:text-5xl font-bold pl-8 pt-10 '>
            <p className='pt-14 italic'>What we Provide?</p>
          </div>
          <div className='bg-[#0F0F0F] flex flex-col lg:h-screen lg:pl-16 pt-52  md:flex-row mt-10 pt-8 pl-12'>
            <div className="container mx-auto lg:w-1/3 md:mr-10 mb-4 lg:mb-0">
              <Card
                image={<Image width={500}
                  height={500} src={'Manufacture.svg'} alt="Manufacuture" className="w-full h-auto " />}
                title="LT Panels"
                description="Precision manufacturing delivering quality panels for diverse industry applications"
              />
            </div>
            <div className="container mx-auto lg:w-1/3 md:mr-10 mb-4 lg:mb-0">
              <Card
                image={<Image width={500}
                  height={500} src={'Custom.svg'} alt="Custom" className="w-full h-auto" />}
                title="SIEPAN Lite Partner"
                description="Tailored panel solutions designed to meet your unique specifications."
              />
            </div>
            <div className="container mx-auto lg:w-1/3 mb-4 lg:mb-0">
              <Card
                image={<Image width={500}
                  height={500} src={'Sipan8pu.svg'} alt="Sipan" className="w-full h-[347px]" />}
                title="SIEPAN 8pu Partner"
                description="Trusted partner for your panel needs, from concept to completion"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
