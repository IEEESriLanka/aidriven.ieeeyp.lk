import comTalkImg from "@/assets/events/com-talk-img.png";

import { EventFeatCard } from "@/components/Events/EventCard";
import Image from "next/image";
import { eventsEditionsData, eventsFaqData, eventsFeatsData } from "@/lib/data";
import EditionCard from "@/components/Events/EditionCard";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemHeader,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/Accordion/Accordion";
import { UpcomingEvent } from "@/components/LandingPage";

const Page = () => {
  return (
    <main className="customer-border container mx-auto flex flex-col items-center justify-center gap-20 px-[10px] py-30 md:px-[40px]">
      <div className="flex flex-col gap-4 rounded-[40px] bg-[#191919B8] p-[30px]">
        <div className="font-elemental-end text-primary text-center text-[40px] uppercase md:text-left">
          community talk series
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="">
            <Image src={comTalkImg} alt="" />
          </div>
          <div className="mx-auto flex flex-col items-center gap-y-4 text-xl text-white">
            <p>
              Aspiring AI enthusiasts are invited to register for this
              exceptional journey, delving into four virtual sessions
              covering OpenAI APIs/Prompt engineering, Retrieval Augmented
              Generation (RAG) and Fine-tuning LLMs, Training and Deployment
              strategies and frontend Implementation and Implementing OpenAI
              Models in Practice. The climax is a thrilling physical hackathon,
              challenging participants to apply their knowledge to craft
              innovative solutions to a real-world case study. With a minimal
              fee for subsequent sessions, the bootcamp ensures access to
              invaluable resources, mentorship, and the opportunity to showcase
              solutions.
            </p>
            <p>
              Don’t miss this chance to be part of Sri Lanka’s most anticipated
              AI event, where education meets hands-on experience and creativity
              flourishes!
            </p>
          </div>
        </div>
      </div>

      <UpcomingEvent />

      <div className="flex w-full flex-col gap-4 p-5">
        <div className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          what you will <span className="text-primary">get</span>
        </div>
        <div className="grid items-center justify-center gap-4 px-[20px] text-white md:grid-cols-2">
          {eventsFeatsData.map((data, i) => (
            <EventFeatCard contactDetail={data} key={i} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <p className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          fREquEntly <span className="text-primary">AsKED</span> QuEstioNs
        </p>
        <AccordionRoot
          allowMultiple={true}
          className="mx-auto grid gap-x-2 gap-y-0 lg:grid-cols-2"
          variant="splitted"
        >
          {eventsFaqData.map((item) => (
            <AccordionItem
              key={item.value}
              className="h-fit self-start rounded-none bg-[#1c1c1c]"
            >
              <AccordionItemTrigger value={item.value}>
                <AccordionItemHeader value={item.value}>
                  <span className="flex-1 text-white">{item.title}</span>
                </AccordionItemHeader>
              </AccordionItemTrigger>
              <AccordionItemContent value={item.value}>
                <p className="text-slate-200">{item.content}</p>
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </div>

      <div className="flex w-full flex-col justify-center gap-10">
        <h3 className="section-header">
          our <span className="text-primary">previous editions</span>
        </h3>
        {eventsEditionsData.map((editions, i) => (
          <EditionCard
            key={i}
            title={editions.title}
            desc={editions.desc}
            data={editions.data}
            imgs={editions.imgs}
          />
        ))}
      </div>
    </main>
  );
};

export default Page;
