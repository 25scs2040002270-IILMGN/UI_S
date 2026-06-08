import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Brain, Code, Sigma, Trophy, Medal, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/data/mockData";

const Counter = ({ value, label }: { value: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border backdrop-blur-sm shadow-sm">
      <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
        {count.toLocaleString()}{label === "Placement Rate" ? "%" : "+"}
      </span>
      <span className="text-sm md:text-base text-muted-foreground mt-2 font-medium uppercase tracking-wider">{label}</span>
    </div>
  );
};

export default function Home() {
  const features = [
    { icon: Brain, title: "Smart Learning", desc: "Adaptive algorithms that tailor questions to your skill level.", color: "from-blue-500 to-cyan-400" },
    { icon: Code, title: "Coding Challenges", desc: "Hundreds of DSA and development problems to solve.", color: "from-purple-500 to-blue-500" },
    { icon: Sigma, title: "Mathematics Practice", desc: "Sharpen your analytical skills with rigorous math quizzes.", color: "from-cyan-500 to-emerald-400" },
    { icon: Trophy, title: "Student Achievements", desc: "Showcase your wins and build an undeniable portfolio.", color: "from-orange-500 to-yellow-400" },
    { icon: Medal, title: "Leaderboards", desc: "Compete globally and earn your place among the elite.", color: "from-red-500 to-orange-400" },
    { icon: Calendar, title: "Events", desc: "Participate in hackathons, seminars, and tech talks.", color: "from-pink-500 to-rose-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pb-20"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-[800px] h-[800px] bg-blue-400/15 dark:bg-blue-500/20 rounded-full blur-[120px] opacity-60 animate-blob"></div>
          <div className="absolute w-[600px] h-[600px] bg-purple-400/15 dark:bg-purple-500/20 rounded-full blur-[100px] opacity-60 animate-blob animation-delay-2000"></div>
          <div className="absolute w-[700px] h-[700px] bg-cyan-400/15 dark:bg-cyan-500/20 rounded-full blur-[110px] opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground"
          >
            Master Every Challenge.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500">
              Rise to the Top.
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            CollegeHub is the premier platform for ambitious students to track growth, solve complex problems, and showcase excellence to the world.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/quiz-arena">
              <Button size="lg" className="h-14 px-8 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-500/25">
                Enter Quiz Arena <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/quiz-arena/leaderboard">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold rounded-full">
                View Leaderboard
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 mb-32 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Counter value={stats.totalStudents} label="Total Students" />
          <Counter value={stats.placementRate} label="Placement Rate" />
          <Counter value={stats.activeCourses} label="Active Courses" />
          <Counter value={stats.quizParticipation} label="Quiz Participation" />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">An Instrument of Excellence</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Everything you need to accelerate your learning and prove your capabilities.</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
