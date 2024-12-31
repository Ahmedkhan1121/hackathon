
import { aboutNavList } from '@/utils/helper'
import Link from 'next/link'
import React from 'react'

function ListItemAbout({onNav}:{onNav:boolean}) {
  return (
    <ul className={`flex gap-4 text-[#726E8D] max-[740px]:relative max-[740px]:top-44 ${onNav ? 'max-[740px]:left-0':'max-[740px]:-left-[800px]'} max-[740px]:flex-col max-[740px]:shadow max-[740px]:px-6 max-[740px]:py-3 max-[740px]:rounded-lg max-[740px]:transition-all max-[740px]:duration-1000 `}>
      {
        aboutNavList.map((e,i)=>{
            return <li key={i}><Link href={e.Link}>{e.List}</Link></li>
        })
      }
    </ul>
  )
}

export default ListItemAbout
