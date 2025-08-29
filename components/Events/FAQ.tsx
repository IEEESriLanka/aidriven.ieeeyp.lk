'use client'

import { eventsFaqData } from '@/lib/data';
import Image from 'next/image';
import { useState } from 'react'

import plusIcon from "@/assets/icons/plus.svg";
import subIcon from "@/assets/icons/sub.svg";

const FaqCard = ({ title, val }: { title: string, val: string }) => {
  const [opened, setOpened] = useState(false);

  return (

    <div className='flex flex-col gap-4 bg-[#191919] text-white p-[30px] rounded-[0_10px] shrink'>
      <div className='flex justify-between mx-3 items-center gap-4'>
        <div className='text-[15px] font-semibold uppercase tracking-[1px] select-none'>{title}</div>
        <div className='w-[20px] h-[20px] cursor-pointer' onClick={() => setOpened((prev) => !prev)}>
          {opened ? 

            <Image src={subIcon} className="size-[20px]" alt=""/>
          :  <Image src={plusIcon} className="size-[20px]" alt=""/>

          }
        </div>
      </div>
      {opened &&
        <div className="text-[#C9C3BA]">
          {val}
        </div>
      }
    </div>
  )
}

const FAQ = () => {
  return (
    <div className='grid md:grid-cols-2 gap-4 text-[15px] items-start'>
      {eventsFaqData.map(({title,val})=>(
        <FaqCard title={title} val={val} key={title}/>
      ) )}
    </div>
  )
}

export default FAQ
