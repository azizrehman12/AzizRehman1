"use client";
import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    num: 5,
    text: "years of experience"
  },
  {
    id: 2,
    num: 10,
    text: "+ projects completed"
  },
  {
    id: 3,
    num: 5,
    text: "+technologies mastered"
  },
  // {
  //   id: 4,
  //   num: 250,
  //   text: "code commits"
  // }
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={item.id}
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[200px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
