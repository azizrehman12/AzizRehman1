"use client";
import { Badge } from "lucide-react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";

// about data
const about = {
  title: "Content Team Manager",
  description: 'SARAH is a member of the content team who is dedicated to creating unique articles that will inspire readers and improve her clients’ search engine rankings. She enjoys writing about new topics and coming up with new concepts for each client',
  info: [
    {
      fieldname: "Name",
      fieldValue: "SARAH THOMPSON",
    },
    
    {
      fieldname: "Experience",
      fieldValue: "5+ years",
    },
   
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/Badge.svg",
  title: "Founder",
  items: [
    {
      id:1,
      company: "developed M-Flux, a unique SEO metrics assessment tool.",
      position: "CEO",
      duration: "Currently working",
    },
  ],
};

// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Marketing & SEO Manager",
  items: [
    {
      id: 1,
      institution: "SHAWN CLINTON",
      Studied: "SHAWN CLINTON is an experienced SEO and Marketing leader, currently heading the group’s SEO strategy, product development, and internal team training. With over a decade of experience spanning the full spectrum of SEO services, from content strategy and link building to digital PR management and technical SEO, SHAWN has a proven track record of delivering outstanding results.",
      duration: "Over a decade of experience",
    },
  ],
};

// skills 
const skills = {
  title: "KAREN SETH - SEO and Outreach Manager",
  description: "KAREN SETH is the SEO and Outreach Manager who supports Outreachparameter’s outreach specialists. Using data and new technology, Karen is constantly adapting his team’s processes to ensure that they can identify and negotiate with the best link building opportunities on the market currently.",
  items: [
    {
      id: 1,
      fieldname: "SEO & Link Building Expertise",
      fieldValue: "Karen has in-depth expertise in managing SEO and link-building strategies that drive organic traffic and improve search engine rankings."
    },
    {
      id: 2,
      fieldname: "Outreach Strategy",
      fieldValue: "Karen is skilled in developing and executing outreach strategies that focus on building strong relationships and generating high-quality backlinks."
    },
    {
      id: 3,
      fieldname: "Data Analysis & Technology Integration",
      fieldValue: "Karen uses advanced data analytics and cutting-edge technologies to optimize outreach processes and maximize campaign effectiveness."
    },
    {
      id: 4,
      fieldname: "Team Process Optimization",
      fieldValue: "Karen works closely with his team to streamline processes and ensure that every outreach campaign is efficient and impactful."
    },
    {
      id: 5,
      fieldname: "Negotiation with Link Building Opportunities",
      fieldValue: "Karen excels at negotiating with top industry players to secure the best link-building opportunities for his clients."
    },
    {
      id: 6,
      fieldname: "Market Trend Adaptation",
      fieldValue: "Karen is constantly monitoring the market and adapting outreach strategies to stay ahead of SEO trends and challenges."
    },
    {
      id: 7,
      fieldname: "SEO & Outreach Process Management",
      fieldValue: "Karen manages the SEO and outreach process to ensure that all initiatives are aligned with clients' objectives and deliver measurable results."
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto  ">
        <Tabs defaultValue="experience" className="flex flex-col  xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">CHRIS POOLTON
            </TabsTrigger>
            <TabsTrigger value="education">SHAWN CLINTON </TabsTrigger>
            <TabsTrigger value="skills">KAREN SETH 
            </TabsTrigger>
            <TabsTrigger value="about">SARAH THOMPSON 
            </TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
            {/* Experience content */}

            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="text-white/60 mx-auto max-w-[600px] xl:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[480px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experience.items.map((item, index) => 
                { return <li key={item.id} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                flex flex-col justify-center items-center lg:items-start gap-1" >
                  <div key={index} className="flex flex-col gap-2">
                  <span className="text-accent">{item.duration}</span>
                   
                    <h3 text-xl className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                    <p className="text-white/60">{item.company}</p>
                    
                  </div>
                </li>})}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          
          
          <TabsContent value="education" className="w-full">
            {/* Education content */}

            <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{education.title}</h3>
    <ScrollArea className="h-[600px]">
      <ul className="grid grid-cols-1 gap-[30px]">
        {education.items.map((item, index) => (
          <li
            key={item.id}
            className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
          >
            <div className="flex flex-col gap-2">
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl max-w-[400px] text-center lg:text-left">{item.Studied}</h3>
              <p className="text-white/60">
                <span className="text-accent">•</span> {item.institution}
              </p>
            </div>
                </li>))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skills" className="w-full h-full">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{skills.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {skills.description}
    </p>
    <div className="space-y-4">
      {skills.items.map((item) => (
        <div key={item.id} className="bg-[#232329] p-6 rounded-xl">
          <h4 className="text-lg font-semibold text-accent">{item.fieldname}</h4>
          <p className="text-white/60">{item.fieldValue}</p>
        </div>
      ))}
    </div>
  </div>
</TabsContent>
          <TabsContent value="about" className="w-full text-center xl:text-left" >
            {/* About me content */}
            <div className="flex flex-col gap-[30px]  ">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="text-white/60 mx-auto max-w-[600px] xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
  {about.info.map((info, index) => {
    return (
      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
        
        <span className="text-white/60">{info.fieldname}:</span>
        <span>{info.fieldValue}</span>
      </li>
    );
  })}
</ul>

            </div>
          </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
