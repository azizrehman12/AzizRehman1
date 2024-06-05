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
  title: "About me",
  description: 'i am Aziz Rehman student of software engineering at National University of Technology Islamabad currently working with Code N Code IT Solutions UAE as web developer',
  info: [
    {
      fieldname: "Name",
      fieldValue: "Aziz Rehman",
    },
    {
      fieldname: "Phone",
      fieldValue: "(+92) 3479001009",
    },
    {
      fieldname: "Experience",
      fieldValue: "2+ years",
    },
    {
      fieldname: "Nationality",
      fieldValue: "Pakistani",
    },
    {
      fieldname: "Email",
      fieldValue: "azizrehmanf23@gmail.com",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/Badge.svg",
  title: "My experience",
  items: [
    {
      company: "Code N Code IT Solutions UAE",
      position: "Developer",
      duration: "Currently working",
    },
  ],
};

// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  items: [
    {
      institution: "National University Of Technology Islamabad",
      Studied: "Software Engineering",
      duration: "2023-2027",
    },
    {
      institution: "Islamia College Peshawar",
      Studied: "Pre Engineering",
      duration: "2021-2023",
    },
    {
      institution: "Oriental Public School Mardan",
      Studied: "Science",
      duration: "2019-2021",
    },
  ],
};

// skills 
const skills = {
  title: "My Skills",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
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
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
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
                { return <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
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
              <p className="text-white/60 mx-auto max-w-[600px] xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[480px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {education.items.map((item, index) => 
                { return <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                flex flex-col justify-center items-center lg:items-start gap-1" >
                  <div key={index} className="flex flex-col gap-2">
                  <span className="text-accent">{item.duration}</span>
                   
                    <h3 text-xl className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.Studied}</h3>
                    <p className="text-white/60"><span className="text-accent">.</span>{item.institution}</p>
                    
                  </div>
                </li>})}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skills" className="w-full h-full">
            {/* Skills content */}
            <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skilllist.map((skill, index) => { 
                  return <li key={index}>
                   <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center 
                      group">
                        <div className="text-6xl group-hover:text-accent treansition-all
                        duration-300 ">{skill.icon}</div>
                      </TooltipTrigger>
                      <TooltipContent><p className="capitalize">{skill.name}</p></TooltipContent>
                    </Tooltip>
                    </TooltipProvider>
                    </li>
                   })}
              </ul>
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
