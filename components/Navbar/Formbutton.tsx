// components/FormButton.tsx
import React from 'react';
import Link from 'next/link';

const FormButton: React.FC = () => {

  const scrollToSection = () => {
    const section = document.getElementById("Get in Touch");

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };


  return (
    <button className="bg-[#209D50] w-32 h-10 lg:w-40 text-s lg:pr-0 lg:text-l lg:h-14 text-white lg:font-bold pl-1 lg:pl-2 rounded-full cursor-pointer" onClick={scrollToSection}>
        Get in Touch
    </button>
  );
};

export default FormButton;
