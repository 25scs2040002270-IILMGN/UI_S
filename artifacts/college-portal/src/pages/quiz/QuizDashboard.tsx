import { motion } from "framer-motion";
import { Link } from "wouter";
import { Code2, Sigma, Flame, CheckCircle2, ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analyticsData } from "@/data/mockData";

export default function QuizDashboard() {
  const latestData = analyticsData[analyticsData.length - 1];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      className="p-6 lg:p-10 max-w-6xl mx-auto"
    >
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Alex</h1>
        <p className="text-muted-foreground">You are currently on a <span className="text-orange-500 font-bold">12-day streak</span>! Keep it up.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="p-6 rounded-2xl bg-card border border-white/10 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground font-medium">Problems Solved</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          </div>
          <div className="text-4xl font-bold text-white">142</div>
        </div>
        <div className="p-6 rounded-2xl bg-card border border-white/10 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground font-medium">Math Score</span>
            <Sigma className="w-5 h-5 text-cyan-500" />
          </div>
          <div className="text-4xl font-bold text-white">{latestData.mathAccuracy}%</div>
        </div>
        <div className="p-6 rounded-2xl bg-card border border-white/10 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground font-medium">Coding Score</span>
            <Code2 className="w-5 h-5 text-purple-500" />
          </div>
          <div className="text-4xl font-bold text-white">{latestData.codingAccuracy}%</div>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-orange-200 font-medium">Current Streak</span>
            <Flame className="w-5 h-5 text-orange-500" />
          </div>
          <div className="text-4xl font-bold text-orange-500">12 Days</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/quiz-arena/coding">
          <div className="group cursor-pointer p-8 rounded-3xl bg-card border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code2 className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Coding Challenges</h2>
            <p className="text-muted-foreground mb-8">
              Data Structures, Algorithms, and System Design problems to prepare you for top tech interviews.
            </p>
            <div className="flex items-center text-blue-500 font-semibold">
              Resume Practice <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

        <Link href="/quiz-arena/math">
          <div className="group cursor-pointer p-8 rounded-3xl bg-card border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Sigma className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">Mathematics</h2>
            <p className="text-muted-foreground mb-8">
              Calculus, Probability, and Discrete Mathematics to strengthen your analytical foundation.
            </p>
            <div className="flex items-center text-cyan-500 font-semibold">
              Start Quiz <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { title: "Two Sum", type: "Coding", time: "2 hours ago", status: "Solved" },
            { title: "Eigenvalues and Eigenvectors", type: "Math", time: "Yesterday", status: "Attempted" },
            { title: "Spring Boot Authentication", type: "Coding", time: "3 days ago", status: "Solved" }
          ].map((activity, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-card border border-white/5">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${activity.type === 'Coding' ? 'bg-blue-500/20 text-blue-500' : 'bg-cyan-500/20 text-cyan-500'}`}>
                  <PlayCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{activity.title}</h4>
                  <p className="text-sm text-muted-foreground">{activity.type} • {activity.time}</p>
                </div>
              </div>
              <div className={`text-sm font-medium ${activity.status === 'Solved' ? 'text-emerald-500' : 'text-yellow-500'}`}>
                {activity.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
