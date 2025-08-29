import aiChallengeImg from "@/assets/ai-challenge.png";
import EventImg from "@/assets/event-img.png";

import { EventFeatCard } from "@/components/Events/EventCard";
import Image from "next/image";
import {
  challengeEventsEditionsData,
  eventsFaqData,
  eventsFeatsData,
} from "@/lib/data";
import EditionCard from "@/components/Events/EditionCard";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemHeader,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/Accordion/Accordion";
import { CalendarDays, MapPin, Ticket, Users, Watch } from "lucide-react";
import HeaderButton from "@/components/Header/HeaderButton";
import Link from "next/link";

const Page = () => {
  return (
    <main className="customer-border container mx-auto flex flex-col items-center justify-center gap-20 px-[10px] py-30 md:px-[40px]">
      <div className="flex flex-col gap-4 rounded-[40px] bg-[#191919B8] p-[30px]">
        <div className="font-elemental-end text-primary text-center text-[40px] uppercase md:text-left">
          AI Challenge
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative overflow-clip rounded-md">
            <Image
              src={aiChallengeImg}
              alt=""
              fill
              className="object-cover object-bottom"
            />
          </div>
          <div className="mx-auto flex flex-col items-center gap-y-4 text-xl text-white">
            <p>
              AI Bootcamp 2023 by AI DRIVEN SRI LANKA is an immersive and
              cutting-edge learning experience designed to propel participants
              to the forefront of AI innovation.
            </p>
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

      <div className="event-card flex flex-col lg:flex-row w-full items-center justify-between rounded-2xl p-8 text-white">
        <div className="relative lg:border-r pr-4">
          <Image src={EventImg} alt="" height={320} />
        </div>
        <div className="grid lg:grid-cols-[1fr_35%]">
          <div>
            <div className="flex w-fit flex-col justify-between gap-y-2 px-8 lg:flex-row lg:items-center">
              <div className="flex items-center justify-center gap-x-2 lg:border-r-[0.5] px-4">
                <CalendarDays className="text-primary size-10" />
                <div className="flex flex-col">
                  <span className="text-white/60 uppercase">Date</span>
                  <span className="text-2xl font-semibold text-white">
                    16th October Thursday
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-x-2 lg:border-r-[0.5] px-4">
                <Watch className="text-primary size-10" />
                <div className="flex flex-col">
                  <span className="text-white/60 uppercase">Time</span>
                  <span className="text-2xl font-semibold text-white">
                    3.30 pm onwards
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-x-2 px-4">
                <MapPin className="text-primary size-10" />
                <div className="flex flex-col">
                  <span className="text-white/60 uppercase">Location</span>
                  <span className="text-2xl font-semibold text-white">
                    Trace Expert City, Colombo 04
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-x-8 py-8 text-xl">
              <Link href={"/"} className="underline">
                Delegate booklet
              </Link>
              <HeaderButton className="py-4"/>
            </div>
          </div>
          <div>
            <div></div>
            <div className="flex flex-col gap-y-2">
              <h3 className="text-lg">AI Forum 2025</h3>
              <p className="text-c-secondary">
                AI Bootcamp 2023 by AI DRIVEN SRI LANKA is an immersive and
                cutting-edge learning experience designed to propel participants
                to the forefront of AI innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

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
          className="mx-auto grid lg:grid-cols-2 gap-x-2 gap-y-0"
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
        {challengeEventsEditionsData.map((editions, i) => (
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
