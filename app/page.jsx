import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/photo";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">OUTREACHPARAMETER</span>
            <h1 className="h1 mb-6">
              Wellcome, To<br />
              <span className="text-accent">Outreachparamter</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            we specialize in empowering businesses to achieve their digital marketing goals through innovative SEO strategies and proven link-building techniques. With a results-driven approach, we help brands grow their online presence, boost search engine rankings, and attract targeted traffic.
            </p>
            {/* button and socials */}
            <div className=" flex flex-col xl:flex-row items-center gap-8">
              {/* <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                { <span>Download CV</span> }
                <FiDownload className="text-xl " />
              </Button> */}
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full 
                flex justify-center items-center text-accent  text-base 
                hover:bg-accent hover:text-primary 
                hover:transition-all duration-500"
                
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:orde-none mb-8 xl:mb-0 "> 
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
      
    </section>
  );
};

export default Home;
