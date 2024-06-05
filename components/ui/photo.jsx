"use client";

import { motion } from "framer-motion";
import Image from "next/image";




const Photo = () => {
    return (
        <div className="w-full h-full relative">
        <motion.div  initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay:1, duration: 0.4 , ease:"easeInOut" }}>
<div className="relative w-96 h-96 mix-blend-lighten absolute">
    <Image 
     src="/aziz.jpg" 
     priority quality={100} 
      fill 
      alt="" 
      className="object-cover rounded-full" />
       </div>
       

        </motion.div>

        </div>
    )    
}

export default Photo