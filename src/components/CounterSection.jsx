import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {couterData} from '../data'

// const stats = [
//   { end: 2350, label: "Happy Clients" },
//   { end: 2500, label: "Completed Events" },
//   { end: 200, label: "Expert Teams" },
//   { end: 3000, label: "Theme Collection" },
// ];

const CounterSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3, // visible 30% on screen
  });

  return (
    <div ref={ref} className="bg-gray-50 w-full py-10">
      <div className="container mx-auto flex flex-wrap justify-around">
        {couterData.map((stat, index) => (
          <div key={index} className="text-center m-4">
            <div className="text-pink-600 text-xl lg:text-4xl font-bold">
              {inView ? (
                <CountUp start={0} end={stat.end} duration={2} suffix="+" />
              ) : (
                "0+"
              )}
            </div>
            <p className="text-gray-500 mt-2 text-sm lg:text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
