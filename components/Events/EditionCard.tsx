import EventCard from './EventCard'
import { ContactCard } from '../AboutUs/Cards'
import { ContactDetailProps } from '@/lib/type'
import Image, { StaticImageData } from 'next/image'



const EditionCard = ({year, desc, stats, imgs}: {year: string, desc: string, stats:ContactDetailProps[], imgs: StaticImageData[]}) => {
  return (
    <EventCard className='flex flex-col container gap-10'>
    <div className='container flex flex-col justify-center gap-10 items-center text-white p-[10px] md:p-[70px]'>
      <p className='text-primary text-[32px]'>Community Talk Sries <span>{year}</span></p>
      <p>{desc}</p>
    </div>
    <div className='flex flex-col md:flex-row  gap-8 container justify-center'>
        {stats.map((stat,i) => (
            <ContactCard key={i} contactDetail={stat}/>
        ))}
    </div>

    <div className="flex flex-col md:flex-row container justify-center items-center">
        {imgs.map((img,i) => (
            <Image key={i} className='container h-[250px] object-contain' src={img} alt=""/>
        ))}
    </div>

  </EventCard>
  )
}

export default EditionCard
