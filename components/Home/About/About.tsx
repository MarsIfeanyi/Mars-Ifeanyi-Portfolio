import SectionHeading from '@/components/Helper/SectionHeading'
import { highlights } from '@/data'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='py-16 bg-gray-100 dark:bg-gray-900'>
{/* Section Heading */}
<SectionHeading 
  title_1='About' 
  title_2='Me' 
  description='Get to know the developer behind the code'
  />
  
  <div className='grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center' >
    {/* Image */}
    <div className='relative'>
      <div className='aspect-square rounded-2xl overflow-hidden p-2'>
        <Image 
         src={"/images/mars.jpg"}
         alt='Profile'
         width={700}
         height={700}
         className='w-full h-full object-center rounded-xl'
         />
      </div>
    </div>
    {/* Content */}
    <div className='space-y-6'>
      <h3 className='text-2xl font-semibold '>
        A passionate developer who loves to create
      </h3>
      <p className='text-muted-foreground leading-relaxed'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi aperiam aut perferendis dolores quisquam deserunt omnis consectetur, odit nulla, officiis incidunt laudantium corrupti, distinctio non quos cum quam mollitia dignissimos!
      </p >
      <p className='text-muted-foreground leading-relaxed' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae nemo modi ea eum hic cupiditate quas rem facilis nulla labore mollitia, odio dolor, aut in obcaecati, ducimus culpa quod.
      </p>

      {/* Highlights */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4' >
        {
          highlights.map((item) => {
            return (
              <div 
               key={item.text}
               className='flex items-center gap-3 text-sm'>
               
               <div className='w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center' >
               <item.icon className='w-4 h-4 text-blue-500' />
               </div> 
               <span className='text-muted-foreground'>
                {item.text}
               </span>
              </div>
            )
          })
        }
      </div>
    </div>
  </div>

    </div>
  )
}

export default About
