'use client';
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";


function NavAboutIcons({onHandleProdNav}:{onHandleProdNav:() => void,navTogg:boolean}) {
    
 return (
    <div className='flex gap-3 max-[730px]:absolute right-14 max-[740px]:right-3 '>
      <IoIosSearch />
      <RiShoppingCart2Line />
      <CgProfile />
      <div className='hidden max-[740px]:block' onClick={onHandleProdNav}>
            <CiMenuFries />
      </div>
    </div>
  )
};

export default NavAboutIcons
