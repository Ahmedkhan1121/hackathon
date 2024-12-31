import Link from 'next/link'
import React from 'react'

function NavLogoProduct() {
  return (
    <div>
      <h2 className=' text-[25px] hover:cursor-pointer' ><Link href={`/`}> Avion</Link></h2>
    </div>
  )
}

export default NavLogoProduct
