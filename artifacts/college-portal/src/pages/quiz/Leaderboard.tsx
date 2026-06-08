import { motion } from "framer-motion";
import { Trophy, Search, Flame } from "lucide-react";
import { leaderboardData } from "@/data/mockData";
import { Input } from "@/components/ui/input";

export default function Leaderboard() {
  const top3 = leaderboardData.slice(0, 3);
  const rest = leaderboardData.slice(3);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      className="p-6 lg:p-10 max-w-6xl mx-auto"
    >
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Global Rankings</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The ultimate measure of excellence. Compete with your peers across all domains.
        </p>
      </div>

      {/* Podium */}
      <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-8 mb-20 h-auto md:h-80 mt-12 px-4">
        {/* Silver - 2nd */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full md:w-1/4 order-2 md:order-1 flex flex-col items-center"
        >
          <div className="mb-4 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-400 mx-auto mb-2 flex items-center justify-center text-black font-bold text-xl shadow-[0_0_15px_rgba(156,163,175,0.5)]">
              {top3[1].name.charAt(0)}
            </div>
            <div className="font-bold text-lg">{top3[1].name}</div>
            <div className="text-gray-400 font-semibold">{top3[1].totalPoints} pts</div>
          </div>
          <div className="w-full h-32 md:h-40 bg-gradient-to-t from-gray-500/20 to-gray-400/40 rounded-t-xl border border-gray-400/30 border-b-0 relative flex justify-center pt-4">
            <span className="text-4xl font-black text-gray-300">2</span>
          </div>
        </motion.div>

        {/* Gold - 1st */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center -mt-8 md:mt-0 z-10"
        >
          <div className="mb-4 text-center">
            <Trophy className="w-10 h-10 text-yellow-500 mx-auto mb-2" />
            <div className="w-20 h-20 rounded-full bg-yellow-500 mx-auto mb-2 flex items-center justify-center text-black font-bold text-2xl shadow-[0_0_20px_rgba(234,179,8,0.5)] border-2 border-background">
              {top3[0].name.charAt(0)}
            </div>
            <div className="font-bold text-xl">{top3[0].name}</div>
            <div className="text-yellow-500 font-bold">{top3[0].totalPoints} pts</div>
          </div>
          <div className="w-full h-40 md:h-56 bg-gradient-to-t from-yellow-600/20 to-yellow-500/40 rounded-t-xl border border-yellow-500/30 border-b-0 relative flex justify-center pt-4">
            <span className="text-5xl font-black text-yellow-200">1</span>
          </div>
        </motion.div>

        {/* Bronze - 3rd */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full md:w-1/4 order-3 flex flex-col items-center"
        >
          <div className="mb-4 text-center">
            <div className="w-16 h-16 rounded-full bg-amber-700 mx-auto mb-2 flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(180,83,9,0.5)]">
              {top3[2].name.charAt(0)}
            </div>
            <div className="font-bold text-lg">{top3[2].name}</div>
            <div className="text-amber-600 font-semibold">{top3[2].totalPoints} pts</div>
          </div>
          <div className="w-full h-24 md:h-32 bg-gradient-to-t from-amber-800/20 to-amber-700/40 rounded-t-xl border border-amber-700/30 border-b-0 relative flex justify-center pt-4">
            <span className="text-4xl font-black text-amber-500">3</span>
          </div>
        </motion.div>
      </div>

      {/* Table */}
      <div className="bg-card border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
          <h3 className="font-bold text-lg">All Ranks</h3>
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search students..." className="pl-9 bg-background border-white/10" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 bg-black/20">
                <th className="p-4 font-medium text-muted-foreground w-20 text-center">Rank</th>
                <th className="p-4 font-medium text-muted-foreground">Student Name</th>
                <th className="p-4 font-medium text-muted-foreground">Branch</th>
                <th className="p-4 font-medium text-muted-foreground text-right">Coding</th>
                <th className="p-4 font-medium text-muted-foreground text-right">Math</th>
                <th className="p-4 font-medium text-muted-foreground text-right">Streak</th>
                <th className="p-4 font-medium text-muted-foreground text-right">Total Points</th>
              </tr>
            </thead>
            <tbody>
              {rest.map((user, idx) => (
                <motion.tr 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={user.rank} 
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="p-4 text-center font-bold text-muted-foreground">{user.rank}</td>
                  <td className="p-4 font-medium text-white">{user.name}</td>
                  <td className="p-4 text-muted-foreground">{user.branch}</td>
                  <td className="p-4 text-right text-purple-400 font-medium">{user.codingScore.toLocaleString()}</td>
                  <td className="p-4 text-right text-cyan-400 font-medium">{user.mathScore.toLocaleString()}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1 text-orange-500 font-medium">
                      {user.streak} <Flame className="w-4 h-4" />
                    </div>
                  </td>
                  <td className="p-4 text-right font-bold text-blue-400">{user.totalPoints.toLocaleString()}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
