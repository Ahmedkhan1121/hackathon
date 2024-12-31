import React from 'react'
import Carts from '../Carts/Carts'
import CardContent from '../CardContent/CardContent'
// import CardContent from '../CardContent/CardContent'
// import Carts from '../Carts/Carts'

function CartSection() {
  return (
    <section  className='flex flex-col justify-center '>
    
       <h1 className='text-4xl pb-6 flex justify-start items-center pt-[100px]  pl-28 max-[930px]:px-[80px] max-[930px]:text-3xl max-[550px]:px-[30px]'>Your shopping cart</h1>
      
      <Carts/>

     
      <CardContent/>
    
    </section>
  )
}

export default CartSection
