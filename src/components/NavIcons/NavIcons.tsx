'use client';
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";


function NavIcons({}:{onHandleProdNav:(value:boolean) => void,navTogg:boolean}) {
    
 return (
    <div className='flex gap-3 max-[730px]:absolute right-14 '>
      <IoIosSearch />
      <RiShoppingCart2Line />
      <CgProfile />
    </div>
  )
};

export default NavIcons
