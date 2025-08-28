import { ContactDetailProps } from '@/lib/type';
import Image from 'next/image';
import React from 'react'

export const EventFeatCard = ({
  contactDetail,
}: {
  contactDetail: ContactDetailProps;
}) => (
  <div className="flex gap-4 my-4">
      <Image className="size-[64px]" src={contactDetail.icon} alt="" />
      <p className="w-[320px] text-[16px] font-[400]">{contactDetail.title}</p>
  </div>
);

const EventCard = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className='container bg-[linear-gradient(180deg,#45413D_0%,#3A3531_48.56%,#342F2A_100%)] text-white py-[24px] px-[20px] rounded-[0_40px]'>
        <div className={className}>
          {children}
        </div>
    </div>
  )
}

export default EventCard
