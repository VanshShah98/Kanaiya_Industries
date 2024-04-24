import React, { FC } from "react";
import dynamic from 'next/dynamic';

interface NavbarButtonProps {
  text: string;
  target: string;
}

const NavbarButton: FC<NavbarButtonProps> = ({ text, target }) => {
  const scrollToSection = () => {
    const section = document.getElementById(target);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button className="text-white flex flex-col lg:pl-5 hover:text-green-400" onClick={scrollToSection}>
      <span>{text}</span>
    </button>
  );
};

export default dynamic(() => Promise.resolve(NavbarButton), { ssr: false });
