import React from 'react'
import BrandDifferentContent from '../BrandDifferentContent/BrandDifferentContent'
import BrandDifferentCard from '../BrandDifferentCard/BrandDifferentCard'

function BrandDifferent() {
  return (
    // padding is leya de he ke section me py se sai hu jay
    <section  className='p-[10px] py-[100px] flex flex-col items-center max-[]:' >
           <BrandDifferentContent />
           
           <BrandDifferentCard />
          
    </section>
  )
}

export default BrandDifferent
