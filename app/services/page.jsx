"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    id: '1',
    num: '01',
    title: ' On-Page SEO',
    description: 'We optimize every element of your website to ensure search engines and users can easily navigate and engage with your content. From meta tags to internal linking, we fine-tune every detail.',
    href: ""
  },
  {
    id: '2',
    num: '02',
    title: 'Off-Page SEO',
    description: 'Our strategic link-building services focus on building high-quality backlinks from authoritative sites to enhance your website’s domain authority and credibility.',
    href: ""
  },
  {
    id: '3',
    num: '03',
    title: 'Keyword Research',
    description: 'We conduct comprehensive keyword research to identify high-performing, relevant search terms that align with your audience and goals.',
    href: ""
  },
  {
    id: '4',
    num: '04',
    title: ' Content Writing',
    description: 'Our expert writers create compelling, SEO-friendly content that resonates with your audience while meeting search engine guidelines. From blog posts to web copy, we deliver content that converts.',
    href: ""
  },
  {
    id: '5',
    num: '05',
    title: ' Technical SEO',
    description: 'We tackle the technical aspects of SEO, such as site speed, mobile optimization, structured data, and more, ensuring your website runs smoothly and ranks higher in search results',
    href: ""
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn"
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service) => (
            <div key={service.id} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* Title */}
              <h2 className=" h2 text[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              {/* Description */}
              <p className="text-white/60">{service.description}</p>
              {/* Border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
