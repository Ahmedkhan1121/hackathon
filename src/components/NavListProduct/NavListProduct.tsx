
import { navList } from '@/utils/helper'
import Link from 'next/link'
import React from 'react'
// {onNav}:{onNav:boolean}
// ${onNav ? 'flex' : 'min-[671px]:flex  max-[670px]:hidden'}
function NavListProduct() {
  return (
    <ul className={`flex items-center justify-center p-4 gap-6 text-[#726E8D] max-[730px]:flex-col   max-[1030px]:text-sm max-[830px]:gap-3 max-[730px]:shadow-xl` }>
     {
    navList.map((e,i)=>{
        return(<li key={i} className='capitalize hover:cursor-pointer max-[1050px]:text-sm max-[830px]:text-[13px]'> <Link href={e.Link}>{e.List}</Link></li>);
    })
     }

    </ul>
  )
}

export default NavListProduct
