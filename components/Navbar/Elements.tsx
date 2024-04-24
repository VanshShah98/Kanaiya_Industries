import React, { FC } from "react";
import NavbarButton from "./navbarbuttons";
import { IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import BarChartIcon from '@mui/icons-material/BarChart';
import InfoIcon from '@mui/icons-material/Info';


const Elements: FC = () => {
  return (
    <div className="lg:flex flex-row pr-5">

      <div className="pl-6 lg:pl-0">
        <div className="text-white flex flex-row hover:text-green-400 gap-2 lg:gap-0">
        <HomeIcon/>
        <NavbarButton text={"Home"} target={"Home"} ></NavbarButton>
        </div>
      </div>
      <div className="pt-5 pl-6  lg:pt-0 pl-0">
        <div className="text-white flex flex-row hover:text-green-400">
        <MiscellaneousServicesIcon />
        <NavbarButton text={"Services"} target={"Our Services"} />
        </div>
      </div>
      <div className="pt-5 pl-6  lg:pt-0 pl-0">
        <div className="text-white flex flex-row hover:text-green-400">
        <PrecisionManufacturingIcon/>
        <NavbarButton text={"Projects"} target={"Our Projects"} />
        </div>
      </div>
      <div className="pt-5 pl-6  lg:pt-0 pl-0">
        <div className="text-white flex flex-row hover:text-green-400">
          <BarChartIcon/>
        <NavbarButton text={"Statistics"} target={"Stats"} />
        </div>
      </div>
      <div className="pt-5 pl-6  lg:pt-0 pl-0">
        <div className="text-white flex flex-row hover:text-green-400">
          <InfoIcon/>
        <NavbarButton text={"About Us"} target={"About Us"} />
        </div>
      </div>
    </div>
  );
};

export default Elements;
