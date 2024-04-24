  
  const LOGOS = [
      <img src="LOGO/BhartRasayan.svg" width={300} height={300} className=" text-slate-800" />,
      <img src="LOGO/SRF.svg" width={300} height={300} className=" text-slate-800" />,
      <img src="LOGO/GI.svg" width={300} height={300} className=" text-slate-800" />,
      <img src="LOGO/Godrej.svg" width={300} height={300} className=" text-slate-800" />,
      <img src="LOGO/MFL.svg" width={200} height={300} className=" text-slate-800" />,
      <img src="LOGO/NACL.svg" width={300} height={300} className=" text-slate-800" />,
      <img src="LOGO/PI.svg" width={300} height={300} className=" text-slate-800" />,
      <img src="LOGO/Tagros.svg" width={300} height={300} className=" text-slate-800" />,
      <img src="LOGO/Thermax.svg" width={300} height={300} className=" text-slate-800" />,
      <img src="LOGO/Thirumalai.svg" width={300} height={300} className=" text-slate-800" />,
      <img src="LOGO/UPL.svg" width={300} height={300} className=" text-slate-800" />,

  ];
  
  export const InfiniteSlider = () => {
    return (
      <div className="relative z-1 m-auto w-5/6 lg:w-full overflow-hidden bg-slate-200 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="lg:h-32 animate-infinite-slider flex w-[calc(250px*10)]">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    );
  };
  