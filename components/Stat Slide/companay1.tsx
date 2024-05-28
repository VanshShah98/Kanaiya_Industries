import Pie from '../charts/PieChart';

export default function Statistics1() {
  return (
    <>
      <section id="Stats">
        <div className='bg-white flex flex-col lg:flex-row h-auto'>
          <div className='text-black underline text-3xl lg:text-5xl font-bold pl-8 lg:pl-8 pt-10 lg:pt-20'>
            <p className='pt-2'>Statistics</p>
          </div>
          <div className='flex flex-col pt-16 lg:pt-64 '>
            <div className='flex pl-20 lg:pt-24 lg:pl-44'>
              <Pie/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
