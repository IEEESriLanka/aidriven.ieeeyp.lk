import aiChallengeImg from "@/assets/ai-challenge.png";
import EventImg from "@/assets/event-img.png";

import { EventFeatCard } from "@/components/Events/EventCard";
import Image from "next/image";
import {
  NewChallengeEventsEditionsData as challengeEventsEditionsData,
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
import { CalendarDays, MapPin, Watch } from "lucide-react";
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
              The Sri Lanka AI Challenge 2025, as a part of the IEEE Challenge
              Sphere, organised under the AI-Driven Sri Lanka initiative,is a
              premier national program designed to equip aspiring innovators
              with hands-on, industry-relevant AI expertise.
            </p>
            <p>
              The challenge kicks off with a series of comprehensive technical
              workshops covering cutting-edge topics such as Generative AI,
              Prompt Engineering, Retrieval-Augmented Generation (RAG), and AI
              Agent Implementation. These sessions aim to build strong
              foundational and practical skills among participants. Following
              the workshops, an Initial Challenge Round will be held where teams
              compete by developing innovative AI-driven solutions. Based on
              performance, the top 15 teams will be selected to advance to the
              next stage.
            </p>
            <p>
              In Stage 2, finalists will work on designing cost-effective and
              practical AI Agents tailored to real-world use cases. During this
              phase, teams will receive mentorship from AI professionals and
              undergo code reviews to refine their solutions. The challenge will
              conclude at the ChallengeSphere event, where finalists will
              present their solutions in a final pitch session, followed by an
              award ceremony recognising the most impactful innovations. The
              program not only encourages creative problem-solving and
              collaboration but also offers national exposure to young AI
              talent, fostering the future of AI-driven innovation in Sri Lanka.
            </p>
          </div>
        </div>
      </div>

      <div className="event-card flex w-full flex-col items-center justify-between rounded-2xl p-8 text-white xl:flex-row">
        <div className="relative pr-4 lg:xl:border-r">
          <Image src={EventImg} alt="" height={320} />
        </div>
        <div className="grid lg:grid-cols-[1fr_35%]">
          <div>
            <div className="flex w-fit flex-col items-start justify-between gap-y-2 px-8 lg:items-center xl:flex-row">
              <div className="flex items-center justify-center gap-x-2 px-4 lg:xl:border-r-[0.5]">
                <CalendarDays className="text-primary size-10" />
                <div className="flex flex-col">
                  <span className="text-white/60 uppercase">Date</span>
                  <span className="text-2xl font-semibold text-white">
                    16th October Thursday
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-x-2 px-4 lg:xl:border-r-[0.5]">
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
              <HeaderButton className="flex py-4" />
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
          what you will <span className="text-primary">get</span> part under the{" "}
          <span className="text-primary">SLAIC</span>
        </div>
        <div className="grid items-center justify-center gap-4 px-[20px] text-white md:grid-cols-2">
          {eventsFeatsData.map((data, i) => (
            <EventFeatCard feature={data} key={i} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <p className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          fREquEntly <span className="text-primary">AsKED</span> QuEstioNs
        </p>
        <AccordionRoot
          allowMultiple={true}
          className="mx-auto grid gap-x-2 gap-y-0 xl:grid-cols-2"
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
