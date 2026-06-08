import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Trophy, Medal, Award, BookOpen, ChevronDown } from "lucide-react";
import { studentsOfTheYear, leaderboardData } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function StudentOfTheYear() {
  const [selectedYear, setSelectedYear] = useState<"2023" | "2024" | "2025" | "2026">("2026");
  const [searchQuery, setSearchQuery] = useState("");
  const [branchFilter, setBranchFilter] = useState("All");

  const student = studentsOfTheYear[selectedYear];

  const filteredLeaderboard = leaderboardData.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBranch = branchFilter === "All" || user.branch === branchFilter;
    return matchesSearch && matchesBranch;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      className="container mx-auto px-4 py-12 max-w-7xl"
    >
      {/* Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-card border border-white/10 p-10 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Celebrating <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Excellence</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Honoring the dedication, intellect, and achievements of our most outstanding students across the years.
          </p>
        </div>
        <div className="relative z-10 flex gap-2 bg-black/40 p-2 rounded-2xl backdrop-blur-md border border-white/5">
          {(["2026", "2025", "2024", "2023"] as const).map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                selectedYear === year 
                  ? "bg-blue-600 text-white shadow-lg" 
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Student */}
      <motion.div 
        key={selectedYear}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="grid lg:grid-cols-3 gap-8 mb-16"
      >
        <div className="lg:col-span-1 rounded-3xl bg-card border border-white/10 p-8 flex flex-col items-center text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-500/20 to-transparent"></div>
          
          <div className="relative w-40 h-40 rounded-full mb-6 border-4 border-background bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <span className="text-5xl font-bold text-white">{student.name.charAt(0)}</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-background text-black shadow-lg">
              <Trophy className="w-6 h-6" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-2">{student.name}</h2>
          <p className="text-blue-400 font-medium mb-6 text-lg">{student.branch}</p>
          
          <div className="w-full mt-auto pt-6 border-t border-white/10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-muted-foreground">Achievement Score</span>
              <span className="font-bold text-white">{student.achievementScore}/100</span>
            </div>
            <div className="w-full h-3 bg-secondary/50 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${student.achievementScore}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
              ></motion.div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <div className="p-6 rounded-3xl bg-card border border-white/10 flex flex-col justify-center">
            <BookOpen className="w-8 h-8 text-blue-500 mb-4" />
            <div className="text-4xl font-bold text-white mb-2">{student.cgpa}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Perfect CGPA</div>
          </div>
          <div className="p-6 rounded-3xl bg-card border border-white/10 flex flex-col justify-center">
            <Code className="w-8 h-8 text-purple-500 mb-4" />
            <div className="text-4xl font-bold text-white mb-2">#{student.codingRank}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Global Coding Rank</div>
          </div>
          <div className="p-6 rounded-3xl bg-card border border-white/10 flex flex-col justify-center">
            <Medal className="w-8 h-8 text-yellow-500 mb-4" />
            <div className="text-4xl font-bold text-white mb-2">{student.competitionWins}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Competition Wins</div>
          </div>
          <div className="p-6 rounded-3xl bg-card border border-white/10 flex flex-col justify-center">
            <Award className="w-8 h-8 text-cyan-500 mb-4" />
            <div className="text-4xl font-bold text-white mb-2">{student.researchContributions}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Research Papers</div>
          </div>
        </div>
      </motion.div>

      {/* Hall of Fame List */}
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h3 className="text-2xl font-bold">Hall of Fame Candidates</h3>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search candidates..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-card border-white/10"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-white/10 bg-card">
                  {branchFilter} <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-white/10">
                <DropdownMenuRadioGroup value={branchFilter} onValueChange={setBranchFilter}>
                  <DropdownMenuRadioItem value="All">All Branches</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="CSE">Computer Science</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="IT">Information Tech</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="ECE">Electronics</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Mech">Mechanical</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-4 font-medium text-muted-foreground">Rank</th>
                  <th className="p-4 font-medium text-muted-foreground">Candidate</th>
                  <th className="p-4 font-medium text-muted-foreground">Branch</th>
                  <th className="p-4 font-medium text-muted-foreground">Total Points</th>
                  <th className="p-4 font-medium text-muted-foreground">Coding Score</th>
                  <th className="p-4 font-medium text-muted-foreground">Math Score</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeaderboard.map((user, idx) => (
                  <motion.tr 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={user.rank} 
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {user.rank === 1 && <Trophy className="w-5 h-5 text-yellow-500" />}
                        {user.rank === 2 && <Trophy className="w-5 h-5 text-gray-400" />}
                        {user.rank === 3 && <Trophy className="w-5 h-5 text-amber-700" />}
                        <span className={`font-bold ${user.rank <= 3 ? 'text-white' : 'text-muted-foreground'}`}>
                          #{user.rank}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 font-medium text-white">{user.name}</td>
                    <td className="p-4 text-muted-foreground">{user.branch}</td>
                    <td className="p-4 font-bold text-blue-400">{user.totalPoints.toLocaleString()}</td>
                    <td className="p-4 text-white">{user.codingScore.toLocaleString()}</td>
                    <td className="p-4 text-white">{user.mathScore.toLocaleString()}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredLeaderboard.length === 0 && (
            <div className="p-12 text-center text-muted-foreground">
              No candidates found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Ensure lucide icon 'Code' is defined for this file if not imported correctly.
function Code(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
}
