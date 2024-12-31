
import { navList } from '@/utils/helper';
import Link from 'next/link'
import React from 'react'

function NavListHome({onNav}:{onNav:boolean}) {
  return (
    <ul className={`${onNav ? 'flex' : ' min-[671px]:flex max-[670px]:hidden '} items-center justify-center p-4 gap-6 text-[#726E8D] max-[670px]:flex-col max-[670px]:text-center max-[670px]:shadow-xl `}>
     {
    navList.map((e,i)=>{
        return(<li key={i} className='capitalize hover:cursor-pointer'><Link href={e.Link}>{e.List}</Link></li>)
    })
     }

    </ul>
  )
};
export default NavListHome;