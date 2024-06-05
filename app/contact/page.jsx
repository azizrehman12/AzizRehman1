'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Updated path
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+92) 3479001009 / (+92) 3137029560",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "azizrehmanf23@gmail.com / azizrehman_504@yahoo.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "National University of Technology (NuTech) Islamabad ",
    }
];

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#272672c] rounded-xl bg-white/5">
                            <h3 className="text-accent text-4xl"> <span>.</span>Let's work together</h3>
                            <p className="text-white/60 text-align: justify">I am a web developer with a strong foundation in HTML,CSS,javascript,typescript,tailwind css 
                            and other programming languages.I possess advanced skills in Figma, which I use to create 
                            intuitive and visually appealing web designs My expertise includes translating Figma designs 
                            into responsive and functional websites. I am proficient in modern web development technologies 
                            and frameworks, ensuring optimal performance and user experience.
                            </p>
                            <div>
                                <Input type="text" placeholder="Firstname" />
                                <Input type="text" placeholder="Lastname" />
                                <Input type="email" placeholder="Email address" />
                                <Input type="tel" placeholder="Phone" />
                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Web development</SelectItem>
                                        <SelectItem value="cst">UI/UX design</SelectItem>
                                        <SelectItem value="mst">Logo design</SelectItem>
                                        <SelectItem value="web-design">Web design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea className="h-[200px]" 
                            placeholder="Type your message here." />
                            {/*button*/}
                            <Button size="md" className="max-w-40">Send message</Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
  <ul className="flex flex-col gap-10">
    {info.map((item, index) => {
      return (
        <li key={index} className="flex items-center gap-6">
          <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
            <div className="text-[28px]">{item.icon}</div>
          </div>
          <div>
            <p className="text-white/60">{item.title}</p>
            <h3 className="bold-text">{item.description}</h3>
          </div>
        </li>
      );
    })}
  </ul>
</div>

                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
