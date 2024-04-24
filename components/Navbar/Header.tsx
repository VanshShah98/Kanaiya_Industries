import React, { FC, useState, useEffect } from "react";
import Image from 'next/image';
import Elements from "./Elements";
import FormButton from "./Formbutton";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    // Adjust the screen width threshold as needed for iPad
    const isIpadScreen = window.innerWidth >= 0 && window.innerWidth <= 1024;
    setMobileMenuOpen(isIpadScreen ? !mobileMenuOpen : false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Listen for window resize to handle dynamic changes
  useEffect(() => {
    window.addEventListener('resize', closeMobileMenu);
    return () => {
      window.removeEventListener('resize', closeMobileMenu);
    };
  }, []);

  return (
    <>
      <AppBar position="fixed" className="bg-[#1D231C] shadow h-20">
        <Toolbar>
          <IconButton className=" lg:hidden md:block" edge="start" color="inherit" onClick={toggleMobileMenu}>
            <MenuIcon/>
          </IconButton>

          <div className="text-white text-2xl font-semibold pl-5 md:pl-10">
            <Image className="w-[150px] md:w-[200px] lg:mt-5 w-[250px]" src={'KI_LOGO.svg'} alt={'Image'} width={96} height={96} />
          </div>

          <div className="hidden md:hidden lg:flex text-xl ml-auto">
            <Elements />
          </div>

          <div className="mt-2 md:pl-96 lg:pl-5">
            <div className="flex pr-6">
              <FormButton />
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu */}
      <Drawer className="lg:hidden" anchor="left" open={mobileMenuOpen} onClose={closeMobileMenu}>
        <div className="bg-[#1D231C] h-full text-white" onClick={closeMobileMenu}>
          <List>
            <Elements/>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
