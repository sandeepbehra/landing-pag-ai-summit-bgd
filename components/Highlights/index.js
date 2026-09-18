"use client";
import React from "react";

const highlightsData = [
  {
    image: "/statistics (1).png",
    title: "70% Space",
    // description: "Premium residential development designed for sophisticated living",
    accent: "from-primary/80 to-primary"
  },
  {
    image: "/voice-access.png",
    title: "Voice Assistant Home Automation",
    // description: "All units facing either lush green landscapes or exclusive club facilities",
    accent:  "from-primary/80 to-primary"
  },
  {
    image: "/motion-sensor.png",
    title: "Motion Sensor Lights",
    // description: "Sprawling across 30 acres with Basement + Ground + 32 floors",
    accent: "from-primary/80 to-primary"
  },
  {
    image: "/pipe.png",
    title: "Centralized Gas Bank",
    // description: "Dedicated servant and powder room in all units",
    accent: "from-primary/80 to-primary"
  },
  {
    image: "/water-supply.png",
    title: "Centralized Water Supply",
    // description: "Dedicated servant and powder room in all units",
    accent: "from-primary/80 to-primary"
  },
  {
    image: "/fire-safety.png",
    title: "Fire And Safety",
    // description: "Dedicated servant and powder room in all units",
    accent: "from-primary/80 to-primary"
  },
  // {
  //   icon: "/lift-sign.png",
  //   title: "Elevators",
  //   // description: "Dedicated servant and powder room in all units",
  //   accent: "from-primary/80 to-primary"
  // },
  
];

const Highlights = () => {
  return (
    <div id="highlights" className="pt-6">
    <section className="md:py-16 py-4 relative bg-white md:px-16 px-2">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-semibold mb-6">
            <span className="text-black">Highlights</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the exceptional features that make our township stand out
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-16 gap-6 max-w-7xl mx-auto">
          {highlightsData.map((highlight, idx) => (
            <HighlightItem key={idx} highlight={highlight} />
          ))}
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>
    </section>
    </div>
  );
};

const HighlightItem = ({ highlight }) => {
  return (
    <div className="group relative md:p-8 p-2 hover:rounded-tl-2xl hover:rounded-br-2xl bg-white hover:shadow-xl transition-all duration-300">
      <div className="mb-8 relative">
        <div className={`w-20 h-20
          flex items-center justify-center text-3xl
          bg-gradient-to-br ${highlight.accent} text-white rounded-xl
          transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          <img src={highlight.image}/>
        </div>
        <div className={`absolute inset-0 bg-gradient-to-br ${highlight.accent} 
          blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-tight">
          {highlight.title}
        </h3>
        {/* <p className="text-gray-600 text-lg leading-relaxed">
          {highlight.description}
        </p> */}
        <div className={`h-1 w-16 bg-gradient-to-r ${highlight.accent} rounded-full 
          transform origin-left transition-all duration-300 group-hover:w-24`}>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
