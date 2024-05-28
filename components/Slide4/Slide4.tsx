import { Typography } from '@mui/material';
import { InfiniteSlider } from './infiniteloop';

export default function Slide4() {
  return (
    <>
      <section id="About Us">
        <div className='bg-[#0F0F0F] flex flex-col h-auto'>
          <div className='flex flex-col text-white text-3xl lg:text-5xl font-serif pl-8 lg:pl-10 pt-14'>
            <p>Founder's Note</p>
          </div>
          <div className='lg:pl-20 pt-6'>
            <Typography className='text-white text-center lg:text-left text-xl italic'>
              {"Esteemed Partners, our Management Team extends a gracious invitation to partake in a symbiotic venture, where cutting-edge expertise converges to deliver unparalleled solutions. By synergizing our technological acumen, we aspire to engineer bespoke excellence that aligns seamlessly with your requisites. Engage with us, and let our collective prowess sculpt the pinnacle of technical innovation, propelling your endeavors to unparalleled heights."}
            </Typography>
          </div>
          <div className='pb-4'>
            <Typography className='flex flex-col text-white text-3xl lg:text-5xl font-medium font-serif pl-8 lg:pl-10 pt-14 pt-16 pb-16 '>Esteemed Customers</Typography>
            <InfiniteSlider />
          </div>
        </div>
      </section>
    </>
  );
}
