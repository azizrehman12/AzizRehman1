"use client";

import { motion } from "framer-motion";
import React from "react";

const seoProfile = {
    id: "seoSpecialists",
    num: "Work Experience",
    category: 'SEO',
    title: 'SEO Specialist',
    description: `
        SEO Specialist with 6+ Years of Excellence in Digital Marketing.
        For over six years, we have been providing comprehensive SEO solutions, earning the trust and satisfaction of numerous clients. Over the past five years, we have successfully completed various projects, helping businesses from diverse industries achieve sustainable growth.
    `,
    services: [
        {
            title: "On-Page SEO",
            details: "Improving website structure, optimizing keywords, enhancing page speed, and ensuring an exceptional user experience."
        },
        {
            title: "Off-Page SEO",
            details: "Building high-quality backlinks, managing outreach campaigns, and boosting domain authority for better rankings."
        },
        {
            title: "Content Writing",
            details: "Creating engaging, keyword-rich, and conversion-focused content tailored to meet client goals."
        }
    ],
    stack: ["On-Page SEO", "Off-Page SEO", "Content Writing"],
};

const Work = () => {
    const { num, category, description, services } = seoProfile;

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {num}
                            </div>
                        </div>
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                            {category} Specialist
                        </h2>
                        <p className="text-white/60 gap-2 whitespace-pre-line">{description}</p>
                        <div className="border border-white/20 my-4"></div>

                        <div className="flex flex-col gap-6">
                            {services.map((service, index) => (
                                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                    <h3 className="text-2xl font-semibold text-accent mb-2">{service.title}</h3>
                                    <p className="text-white/80">{service.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
