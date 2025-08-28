import comTalkImg from '@/assets/events/com-talk-img.png';
import aprilComTalkImg from '@/assets/events/aprilComTalk.jpg';
import watchIcon from '@/assets/icons/Watch 2.png';
import calendarIcon from '@/assets/icons/Calender 2.png';

import EventCard, { EventFeatCard } from '@/components/Events/EventCard';
import Image from 'next/image';
import { ContactCard } from '@/components/AboutUs/Cards';
import { eventsFeatsData } from '@/lib/data';

const page = () => {
  return (
    <main className="container px-[150px] py-30">

        <div className="flex flex-col gap-4 bg-[#191919B8] p-[30px] rounded-[40px]">
          <div className="text-[40px] font-elemental-end text-primary uppercase">community talk series</div>
          <div className="grid grid-cols-2 gap-8">
            <div className=""><Image src={comTalkImg} alt=''/></div>
            <div className='flex justify-center items-center mx-auto'>
              <p className='text-[#C9C3BA] text-[14px]'>
              Aspiring AI enthusiasts are invited to register for this exceptional journey, delving into four virtual sessions covering OpenAI APIs/Prompt engineering, Retrieval Augmented Generation (RAG) and Fine-tuning LLMs, Training and Deployment strategies and frontend Implementation and Implementing OpenAI Models in Practice. The climax is a thrilling physical hackathon, challenging participants to apply their knowledge to craft innovative solutions to a real-world case study. With a minimal fee for subsequent sessions, the bootcamp ensures access to invaluable resources, mentorship, and the opportunity to showcase solutions.

              Don’t miss this chance to be part of Sri Lanka’s most anticipated AI event, where education meets hands-on experience and creativity flourishes!
              </p>
            </div>
          </div>
        </div>

        <EventCard className='grid grid-cols-2 gap-4 rounded-[0px_40px]'>
          <div className="flex flex-col gap-4 h-full justify-around p-[40px]">
            <p className='uppercase text-[20px] font-semibold tracking-[0.4px]'>april community talk</p>
            <p className='text-[14px] text-[#C9C3BA] uppercase tracking-[1px] leading-[30px]'>Aspiring AI enthusiasts are invited to register for this exceptional journey, delving into four virtual sessions covering OpenAI APIs/Prompt engineering, Retrieval Augmented Generation (RAG) and Fine-tuning LLMs, Training and Deployment...</p>
            <div className='flex justify-center items-center gap-4'>
              <div className='flex gap-2'>
                <Image src={watchIcon} alt=''/>
                <span>30<sup>th</sup> April 2025</span>
              </div>
              <div className='flex gap-2'>
                <Image src={calendarIcon} alt=''/>
                <span>6.30 P.M.</span>
              </div>
              <div className='flex gap-2'>
                <span>Via <b>Zoom</b></span>
              </div>
            </div>
          </div>

          <div><Image src={aprilComTalkImg} alt=''/></div>
        </EventCard>

        <div className='flex flex-col gap-4 p-5'>
          <div className='uppercase font-elemental-end text-white text-[32px]'>
            what you will <span className='text-primary'>get</span>
          </div>
          <div className='grid grid-cols-2 gap-4 text-white px-[20px] justify-center items-center'>
            {eventsFeatsData.map((data) => (
              <EventFeatCard contactDetail={data}/>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='text-white font-elemental-end text-[32px] uppercase'>
          fREquEntly <span className='text-primary'>AsKED</span> QuEstioNs
          </p>
          
        </div>
        
    </main>
  )
}

export default page