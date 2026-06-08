import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, Clock, Play } from "lucide-react";
import { codingQuestions } from "@/data/mockData";
import { Button } from "@/components/ui/button";

export default function CodingQuestions() {
  const [activeDifficulty, setActiveDifficulty] = useState("All");
  const [activeCategory, setActiveCategory] = useState("DSA");

  const categories = ["DSA", "Java", "Python", "DBMS", "OS", "Web Development"];
  const difficulties = ["All", "Easy", "Medium", "Hard"];

  const filteredQuestions = codingQuestions.filter(q => {
    const matchCategory = q.category === activeCategory;
    const matchDifficulty = activeDifficulty === "All" || q.difficulty === activeDifficulty;
    return matchCategory && matchDifficulty;
  });

  const getDifficultyColor = (diff: string) => {
    if (diff === "Easy") return "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
    if (diff === "Medium") return "text-yellow-600 dark:text-yellow-400 bg-yellow-500/10 border-yellow-500/30";
    if (diff === "Hard") return "text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/30";
    return "text-muted-foreground bg-muted border-border";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 lg:p-10 max-w-6xl mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Coding Arena</h1>
          <p className="text-muted-foreground">Select a problem to solve and improve your ranking.</p>
        </div>

        <div className="flex items-center gap-2 bg-muted/50 p-1 rounded-xl border border-border">
          {difficulties.map(diff => (
            <button
              key={diff}
              onClick={() => setActiveDifficulty(diff)}
              data-testid={`filter-difficulty-${diff.toLowerCase()}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeDifficulty === diff
                  ? "bg-blue-600 text-white"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      <div className="flex overflow-x-auto pb-4 mb-6 gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            data-testid={`filter-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            className={`px-5 py-2.5 rounded-full whitespace-nowrap font-medium transition-all border ${
              activeCategory === cat
                ? "border-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-400"
                : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              key={q.id}
              data-testid={`card-question-${q.id}`}
              className="group flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl bg-card border border-border hover:border-blue-500/30 hover:bg-blue-500/5 transition-all"
            >
              <div className="flex-1 mb-4 md:mb-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-500 transition-colors">{q.title}</h3>
                  {q.solved && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                </div>
                <div className="flex flex-wrap items-center gap-2 md:gap-4">
                  <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold border ${getDifficultyColor(q.difficulty)}`}>
                    {q.difficulty}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" /> {q.timeEstimate}
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded">
                    Acc: {q.acceptance}
                  </span>
                  <div className="flex gap-2 ml-auto md:ml-0">
                    {q.tags.map(tag => (
                      <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="shrink-0 md:ml-6">
                <Link href={`/quiz-arena/coding/${q.id}`}>
                  <Button
                    data-testid={`button-solve-${q.id}`}
                    className={`${q.solved ? 'bg-muted hover:bg-muted/80 text-foreground' : 'bg-blue-600 hover:bg-blue-700 text-white'} w-full md:w-auto`}
                  >
                    {q.solved ? 'Solve Again' : 'Solve Challenge'} <Play className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="p-12 text-center text-muted-foreground bg-card rounded-2xl border border-border">
            No challenges found for the selected filters.
          </div>
        )}
      </div>
    </motion.div>
  );
}
