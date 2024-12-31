'use client';
import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
// import NavList from '../NavList/NavList';
import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';
import NavListHome from '../NavListHome/NavListHome';

function Navbar() {
  const [navList,setNavList]= useState<boolean>(false);
  const onNavToggle = () => {
    setNavList((prev) => !prev);
  }

  return (
    <nav className=''>
      {/* SearchIcon */}
    <div  className='flex items-center justify-between  p-4  border-b-2 border-[#e8e8e8] '>
    <div className='flex items-center  hover:cursor-pointer'><IoIosSearch /></div>

      {/* logoName */}
      <div>
      <h2 className='text-2xl hover:cursor-pointer relative max-[670px]:left-8 max-[360px]:left-0'><Link href={`/`}>Avion</Link></h2>  
      </div>

     {/* icons */}
      <div className='flex items-center gap-5  hover:cursor-pointer '>
      <div className="flex gap-4">
      <RiShoppingCart2Line />
      <CgProfile />
      </div>
      <div className=" max-[670px]:block hidden " onClick={onNavToggle}>
      <CiMenuBurger/>
      </div>
      </div>
      

    </div>

    {/* navList2 */}
    
    <NavListHome onNav={navList}/>
    
    </nav>
  )
}

export default Navbar
