import Image from 'next/image'
import BannerImage from '@/images/Banner.jpg'
import BannerText from '@/images/BannerText.png'
import React from 'react'

const Banner = () => {
  return (
    <div>
      <Image className='mt-10' src={BannerImage}/>
      <Image className="relative z-10 -top-72 left-16" src={BannerText}/>
    </div>
  )
}

export default Banner