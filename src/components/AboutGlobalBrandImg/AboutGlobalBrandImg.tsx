import Image from 'next/image'
import React from 'react'

function AboutGlobalBrandImg() {
  return (
     <div>
          <Image className='h-screen min-[1390px]:w-[130vh]   max-[1150px]:w-[110vh] max-[590px]:h-[70vh] max-[445px]:h-[60vh] max-[370px]:h-[50vh]'
          src={`/images/globleBrand/9e782fdeef5f60eca5a47456ecfd4df1.jpeg`}
          alt='global brand'
          height={100}
          width={720}
          />
    
        </div>
  )
}

export default AboutGlobalBrandImg
