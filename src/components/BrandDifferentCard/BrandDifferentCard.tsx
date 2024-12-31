
import { brandDifferentCard } from '@/utils/helper'
import Image from 'next/image'




function BrandDifferentCard() {
  return (
    <div className='flex items-center justify-center gap-5  max-[1200px]:gap-2 max-[1150px]:gap-0 max-[1000px]:flex-wrap max-[1000px]:gap-10 max-[835px]:px-[10px] max-[300px]:px-[0px] '>
    {
      brandDifferentCard.map((e)=>{
        return(
            // max-[330px]:items-center
          <div key={e.id} className='w-[270px]  flex flex-col  gap-4 max-[1120px]:w-[255px] max-[1060px]:w-[245px] max-[1030px]:w-[238px] max-[330px]:w-[190px]   '>
            <Image 
            src={e.ImgUrl}
            alt='BrandCard'
            height={30}
            width={30}
            />
            <h4 className='text-[#2A254B] '>{e.heading}</h4>
            <p className='text-[#2A254B] w-[266px] max-[1200px]:w-[230px] max-[1070px]:w-[210px] max-[969px]:w-[240px] max-[350px]:w-[230px] max-[330px]:text-sm max-[330px]:w-[190px]'>{e.p}</p>
          </div>
        )
      })
    }

    </div>



  
  )
}

export default BrandDifferentCard
