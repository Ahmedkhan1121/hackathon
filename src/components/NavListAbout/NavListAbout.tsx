
import { navList } from '@/utils/helper';
import Link from 'next/link'
import React from 'react'

function NavListAbout({}:{onNav:boolean}) {
  return (
    <ul className={`flex items-center justify-center p-4 gap-6 text-[#726E8D] `}>
     {
    navList.map((e,i)=>{
        return(<li key={i} className='capitalize hover:cursor-pointer max-[730px]:text-sm'><Link href={e.Link}>{e.List}</Link></li>)
    })
     }

    </ul>
  )
};
export default NavListAbout;