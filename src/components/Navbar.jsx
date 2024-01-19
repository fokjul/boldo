import { siteLogo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { Button_S } from "./Button";
import { useState } from "react";

const Navbar = () => {
const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex justify-between py-6 items-center  mb-[64px]">
        <img src={siteLogo} alt="site logo" className="w-[162px] h-[40px]"/>
        <div className="items-center sm:flex hidden" >
            <ul className="list-none flex justify-end items-center flex-1">
                {navLinks.map((link, index) => ( 
                    <div key={link.id} className={`navItem  w-full md:px-5 px-3 ${navLinks.length - 1 === index && 'mr-3'}`}>
                        <li  className=" font-body font-semibold text-white  w-full">{link.title}</li>
                    </div>
                ))}
            </ul>
            <Button_S label="Log In"/>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center relative ">
            <img 
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={()=> setToggle((prev) => !prev)}/>
                <div className={`${toggle ? 'flex' : 'hidden'} flex-col gap-2 navBarMobile absolute top-10 right-0 mx-0 my-0 min-w-[140px] rounded-xl z-[10] px-2 py-2`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((link, index) => ( 
                            <li key={link.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mb-0'} text-white navItemMobile p-3`}>
                            <a href={`#${link.id}`}>
                            {link.title}
                            </a>
                        </li>
                        ))}
                    </ul>
                    <Button_S label="Log In"/>
                </div>
        </div>
    </nav>
  )
}

export default Navbar