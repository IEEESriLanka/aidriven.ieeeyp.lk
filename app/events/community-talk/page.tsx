import comTalkImg from "@/assets/events/com-talk-img.png";

import { EventFeatCard } from "@/components/Events/EventCard";
import Image from "next/image";
import {
  eventsEditionsData,
  communityFaqData,
  communityFeatsData,
  communityTalkEditionsData,
} from "@/lib/data";
import EditionCard from "@/components/Events/EditionCard";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemHeader,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/Accordion/Accordion";

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
              The AI-Driven SL Community Talk Series is a flagship initiative by
              AI Driven SL, organized in collaboration with IEEE Student
              Branches from leading Sri Lankan universities to foster AI
              knowledge sharing, hands-on learning, and real-world application.
            </p>
            <p>
              Held over 3 months, the series features a blend of virtual
              sessions focused on designing, developing, and deploying AI agents
              using real-world use cases.
            </p>
            <div className="w-full text-left">
              <h3 className="text-primary mb-2 font-bold">
                Collaborating Universities
              </h3>
              <ul className="list-inside list-disc space-y-1">
                <li>University of Peradeniya (IEEE Student Branch)</li>
                <li>Uva Wellassa University (IEEE Student Branch)</li>
                <li>
                  General Sir John Kotelawala Defence University (IEEE Student
                  Branch)
                </li>
              </ul>
            </div>
            <p>
              Each university co-hosts a session, encouraging peer-driven
              learning and cross-campus collaboration. With participation
              limited to 200 students prioritizing 50 from each hosting
              university, the series ensures quality engagement, expert
              mentorship, and impactful experiences that bridge the gap between
              academic theory and practical AI implementation.
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 p-5">
        <div className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          what you will <span className="text-primary">get</span>
        </div>
        <div className="grid items-center justify-center gap-4 px-[20px] text-white md:grid-cols-2">
          {communityFeatsData.map((data, i) => (
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
          {communityFaqData.map((item) => (
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
        {communityTalkEditionsData.map((editions, i) => (
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
