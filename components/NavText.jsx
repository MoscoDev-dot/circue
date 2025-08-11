import Image from 'next/image'
import React from 'react'

const NavText = () => {
  return (
    <div>
      <Image src='/logowhite.webp' alt='circue' width={200} height={200} className=' w-auto h-auto md:w-[150px]' />
    </div>
  )
}

export default NavText
