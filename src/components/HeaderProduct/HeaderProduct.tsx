'use client';
// import NavbarProduct from '../NavbarProduct/NavbarProduct'
// import { usePathname } from 'next/navigation'

import { useState } from "react";
import NavbarProduct from "../NavbarProduct/NavbarProduct"
import NavIcons from "../NavIcons/NavIcons"
import NavLogoProduct from "../NavLogoProduct/NavLogoProduct"
import { CiMenuFries } from 'react-icons/ci';
// import NavbarProduct from "../NavbarProduct/NavbarProduct"

// import NavbarProduct from "../NavbarProduct/NavbarProduct"

function HeaderProduct() {
  // const  topBarPath  = usePathname()
  const [navTogg,setNavTogg] = useState<boolean>(false);
     const onHandlePrev = () => {
           setNavTogg((prev) => !prev)
     } 
  return (
    <header className='sticky top-0 flex items-center justify-between py-[10px] px-[75px] max-[1030px]:px-5 border-b-2 max-[730px]:h-[10vh] '>
        <NavLogoProduct />
      <NavbarProduct navTogg={navTogg}/>
      <NavIcons onHandleProdNav={setNavTogg} navTogg={navTogg}/>
      <div className='hidden max-[730px]:flex' onClick={onHandlePrev}>
      <CiMenuFries />
      </div>
    </header>
  )
}

export default HeaderProduct
