import {  CodeSquareIcon, Mars, Rocket, Space } from 'lucide-react'
import Image from 'next/image'
import React from 'react'



const Logo = () => {
  return (
    <div className='flex items-center space-x-2' >
<div className='border-2 border-blue-800 dark:border-blue-400 w-10 h-10 rounded-lg flex items-center justify-center flex-col' >



<Image
  src="/images/rocket.png"
  alt="Rocket"
  width={24}
  height={24}
/>


</div>
<h1 className='sm:text-xl hidden sm:block md:text-2xl text-blue-800 dark:text-blue-400 font-bold' >
  
    {"Mars"}
</h1>

    </div>
  )
}

export default Logo