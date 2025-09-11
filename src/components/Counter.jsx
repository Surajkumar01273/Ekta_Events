import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.2,    // when 20% of section is visible
  });

  const stats = [
    { number: 2350, text: "Happy Clients" },
    { number: 2500, text: "Completed Events" },
    { number: 300, text: "Theme Collection" },
  ];

  return (
    <section ref={ref} className="py-12 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-3xl font-bold text-purple-600">
              {inView && (
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2}
                  separator=","
                />
              )}
              +
            </h2>
            <p className="text-gray-600 mt-2">{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
