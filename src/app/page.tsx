"use client"
import Image from 'next/image'

import Header from '../../components/Navbar/Header';
import Slide1 from '../../components/Slide1/slide1';
import Slide2 from '../../components/Slide2/Slide2';
import Slide3 from '../../components/Slide3/Slide3';
import Slide4 from '../../components/Slide4/Slide4';
// import Statistics from '../../components/Stat Slide/stat';
import FormSlide from '../../components/FormSlide/FormSlide';
import Statistics1 from '../../components/Stat Slide/companay1';


export default () => {
  return (
      <>
      <Header/>
      <Slide1/>
      <Slide2/>
      <Slide3/>
      <Statistics1/>
      <Slide4/>
      <FormSlide/>

      </>
  );
};
