'use client';
// import React from 'react'
// import NavLogoProduct from '../NavLogoProduct/NavLogoProduct'
// // import ListItem from '../ListItem/ListItem'
// import ListItemAbout from '../ListItemAbout/ListItemAbout'
// import NavIcons from '../NavIcons/NavIcons'

import { useState } from "react"
import ListItemAbout from "../ListItemAbout/ListItemAbout"
import NavAboutIcons from "../NavAboutIcons/NavAboutIcons"
// import NavIcons from "../NavIcons/NavIcons"
import NavListAbout from "../NavListAbout/NavListAbout"

import NavLogoProduct from "../NavLogoProduct/NavLogoProduct"
import { ScrollListAbout } from "../ScrollListAbout/ScrollListAbout";
// import NavIcons from "../NavIcons/NavIcons"
// import NavLogoProduct from "../NavLogoProduct/NavLogoProduct"

function NavbarAbout() {
   const [navList,setNavList]= useState<boolean>(false);
    const onNavToggle = () => {
      setNavList((prev) => !prev);
    };
  return (
    <nav className=''>
    {/* div 1 */}
    <div className='flex justify-between items-center py-[20px] px-[30px]  max-[740px]:h-[10vh]'>
        <NavLogoProduct />
       <div className='flex  items-center gap-6 '>
        <ListItemAbout onNav={navList}/>
        <NavAboutIcons onHandleProdNav={onNavToggle} navTogg={navList} />
       </div>
    </div>
    {/* div 2  About list bg-[#F9F9F9]*/}
    <div className='bg-[#F9F9F9] py-[8px] max-[600px]:hidden' >
      <NavListAbout onNav={navList} />
    </div> 
    <ScrollListAbout/>
    </nav>
    //   <NavIcons/>
  )
}

export default NavbarAbout
