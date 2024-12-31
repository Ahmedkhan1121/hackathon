import Image from 'next/image'
import React from 'react'
import CartQuantity from '../CartQuantity/CartQuantity';

function CartProductTable() {
  return (
    <div className='flex gap-3 max-[750px]:gap-5'>
      <Image className='max-[750px]:w-[150px] max-[750px]:h-[160px]' src='/images/productList/842fec031ef0c247df24214e05b47e70.jpeg' alt='productimg' height={10} width={100}/>
      {/* text */}
      <div className="flex flex-col ">
        <div className='flex flex-col gap-[6px] justify-center'>
        <h4 className='text-[16px]'>Graystone vase</h4>
        <p className='w-[160px] text-[13px] text-[#2A254B]'>A timeless ceramic vase with 
        a tri color grey glaze.</p>
        <h6 className='text-[16px]'>£85</h6>
        </div>
        <div className='hidden max-[750px]:flex max-[750px]:pt-[8px]'>
        <CartQuantity/>
        </div>
      </div>
    </div>
  );
};
export default CartProductTable;