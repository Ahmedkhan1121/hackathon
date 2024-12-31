'use client';
// import { useState } from 'react';
// import NavLogoProduct from '../NavLogoProduct/NavLogoProduct';

import NavListProduct from '../NavListProduct/NavListProduct';
// import NavIcons from '../NavIcons/NavIcons';




function NavbarProduct({navTogg}:{navTogg:boolean}) {
    

  return (
   <>
   
    {/* <nav className={` max-[730px]:absolute transition-all  ${navTogg ? 'max-[730px]:w-[50%]' : 'max-[730px]:w-[0px] hidden'} `}>
      <NavListProduct />
    </nav> */}
    <nav
  className={ `relative   transition-all duration-500 ease-in-out  ${
    navTogg
      ? 'max-[730px]:w-[50%] max-[730px]:opacity-100 max-[730px]:top-40'
      : ' max-[730px]:hidden'
  }`}
>
  <NavListProduct />
</nav>

   </>
  )
}

export default NavbarProduct
