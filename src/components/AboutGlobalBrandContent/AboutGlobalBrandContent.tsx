import Link from 'next/link'
import React from 'react'

function AboutGlobalBrandContent() {
  return (
    <div className='p-[70px] flex flex-col justify-between max-[1370px]:p-[50px] max-[1000px]:pr-5 max-[590px]:gap-10 max-[590px]:p-[50px] max-[500px]:p-[40px] max-[445px]:pb-[0px] max-[400px]:pl-[30px] max-[400px]:pt-[30px] max-[370px]:pl-[20px] '>
    {/* content div */}
    <div className='flex flex-col gap-6 max-[445px]:gap-4 max-[291px]:gap-3'>
    
        <h1  className=' text-3xl  w-[536px]  max-[1260px]:text-2xl max-[1260px]:w-[500px] max-[1000px]:w-[430px] max-[900px]:w-[400px] max-[800px]:w-[350px] max-[760px]:w-[300px] max-[660px]:w-[270px] max-[590px]:w-[450px] max-[500px]:w-[380px] max-[445px]:w-[330px] max-[400px]:w-[290px] max-[315px]:w-[240px]  max-[300px]:w-[225px] '>Our service isn’t just personal, it’s actually
        hyper personally exquisite</h1>
    
      {/* Peragraf div */}
    
     <p  className='w-[536px] text-[#505977] max-[1260px]:w-[450px] max-[1000px]:w-[430px] max-[900px]:w-[370px] max-[900px]:text-sm max-[800px]:w-[350px] max-[760px]:w-[300px] max-[660px]:w-[270px]  max-[590px]:w-[450px] max-[500px]:w-[380px] max-[445px]:w-[330px] max-[400px]:w-[290px] max-[315px]:w-[268px] max-[300px]:w-[240px]'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
     <p  className='w-[536px] text-[#505977] max-[1260px]:w-[450px] max-[1000px]:w-[430px] max-[900px]:w-[370px] max-[900px]:text-sm max-[800px]:w-[350px] max-[760px]:w-[300px] max-[660px]:w-[270px] max-[590px]:w-[450px] max-[500px]:w-[380px] max-[445px]:w-[330px] max-[400px]:w-[290px] max-[315px]:w-[268px]   max-[300px]:w-[240px]'> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
     
    </div>
    {/* button */}
    <div>
   <button className='py-3 px-7 bg-[#F9F9F9] text-[#2A254B]'><Link href={`/product`}>View collection</Link></button>
    </div>
    </div>
  )
}

export default AboutGlobalBrandContent
