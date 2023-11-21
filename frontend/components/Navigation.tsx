/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";
import { Navbar, NavbarMenuToggle, NavbarMenu, NavbarBrand, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { LuMusic3 } from "react-icons/lu";


function Navigation() {

    const menuItems = [
        "Github",
        "Documentation",
        
      ];
    
      return (
        <Navbar isBordered className="light border-gray-300 text-gray-500"> 
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle />
          </NavbarContent>
          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              {/* <p className="sm:text-4xl  font-bold text-inherit " >Beethoven Bot</p> */}
              <LuMusic3 style={{ color: '#EC4899',fontSize: '25px' }} />
              <p className="text-[25px]" style={{ color: '#EC4899'}}>= 90</p>
            </NavbarBrand>
          </NavbarContent>
    
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarBrand>
              {/* <p className="text-lg font-bold text-inherit">Beethoven Bot</p> */}
              <LuMusic3 style={{ color: '#EC4899',fontSize: '25px' }} />
              <p className="text-[25px]" style={{ color: '#EC4899'}}>= 90</p>
            </NavbarBrand>
          </NavbarContent>
    
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex color:white mr-4">
              <Link href="#" className="text-gray-500 text-lg ">Documentation</Link>
            </NavbarItem>
            <NavbarItem>
              {/* <Button as={Link} color="warning" href="#" variant="flat">
                Sign Up
              </Button> */}
              <a className=" hover:opacity-40" href="https://github.com/AmeeMadhani/Beethoven-Bot" target="_blank" rel="noopener noreferrer">
                <FaGithub style={{color: '#EC4899', fontSize: '30px' }} />
              </a>
            </NavbarItem>
          </NavbarContent>
    
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>

      
  );
}
  
export default Navigation;