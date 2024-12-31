import React from 'react'

function CardContent() {
  return (
    <div className='px-28 pb-10 py-[20px] max-[930px]:pt-[60px] max-[930px]:px-[80px]  max-[550px]:px-[30px] max-[390px]:pl-[0px]'>
     
      <div className='flex flex-col items-end  gap-4  max-[420px]:gap-3 '>
        <div className='flex gap-2  '>
            <h4 className='text-xl text-[#4E4D93] '>Subtotal</h4>
            <h3 className='text-2xl'>£210</h3>
        </div>
     <div className='flex flex-col items-end gap-4'>
     <p className='text-[#4E4D93] max-[470px]:text-[15px] max-[420px]:text-[14px]  max-[390px]:text-[12px] max-[390x]:px-[0px] '>Taxes and shipping are calculated at checkout</p>
     <button className='bg-[#2A254B] text-white py-[16px] px-[32px] max-[750px]:px-[16px] max-[750px]:py-[14px]'>Go to checkout</button>
     </div>
      </div>

    </div>
  )
}

export default CardContent
