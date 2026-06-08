import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";
import { founders, timeline } from "@/data/mockData";
import { Button } from "@/components/ui/button";

export default function Founders() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="container mx-auto px-4 py-16 max-w-6xl"
    >
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Meet the Visionaries</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The minds behind CollegeHub, dedicated to forging the next generation of global tech leaders.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-32">
        {founders.map((founder, idx) => (
          <motion.div
            key={founder.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            data-testid={`card-founder-${founder.id}`}
            className="group relative rounded-3xl bg-card border border-border overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-500 flex flex-col"
          >
            <div className={`h-32 w-full bg-gradient-to-r ${founder.gradientFrom} ${founder.gradientTo} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
            <div className="px-8 pb-8 pt-0 flex-1 flex flex-col items-center text-center -mt-16 relative z-10">
              <div className={`w-32 h-32 rounded-full mb-6 border-4 border-background bg-gradient-to-br ${founder.gradientFrom} ${founder.gradientTo} flex items-center justify-center shadow-xl`}>
                <span className="text-4xl font-bold text-white">{founder.photoInitials}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
              <p className="text-blue-500 font-medium mb-4">{founder.designation}</p>
              <p className="text-muted-foreground mb-8 flex-1">{founder.bio}</p>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="rounded-full" data-testid={`button-linkedin-${founder.id}`}>
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" data-testid={`button-email-${founder.id}`}>
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Vision & Mission</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-muted/40 border border-border">
              <h3 className="text-xl font-semibold text-blue-500 mb-3">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a global ecosystem where ambition meets opportunity, transforming passionate students into industry-defining innovators.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-muted/40 border border-border">
              <h3 className="text-xl font-semibold text-purple-500 mb-3">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Provide an elite, data-driven learning platform that bridges the gap between academic theory and competitive industry excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "12k+", label: "Total Students" },
            { value: "5k+", label: "Alumni Network" },
            { value: "50+", label: "Industry Partners" },
            { value: "120+", label: "Research Papers" },
          ].map((stat) => (
            <div key={stat.label} className="p-6 rounded-2xl bg-card border border-border text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div ref={timelineRef} className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">The CollegeHub Journey</h2>
        <div className="relative border-l border-border pl-8 ml-4 space-y-12">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-background"></div>
              <span className="text-blue-500 font-bold mb-2 block">{item.year}</span>
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
