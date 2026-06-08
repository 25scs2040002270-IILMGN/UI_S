import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Clock, CheckCircle } from "lucide-react";
import { mathQuestions } from "@/data/mockData";
import { Button } from "@/components/ui/button";

export default function MathQuestions() {
  const [activeCategory, setActiveCategory] = useState("Calculus");

  const categories = ["Algebra", "Calculus", "Probability", "Statistics", "Discrete Mathematics", "Aptitude"];

  const filteredQuestions = mathQuestions.filter(q => q.category === activeCategory);

  const calculateProgress = (cat: string) => {
    const catQs = mathQuestions.filter(q => q.category === cat);
    if (catQs.length === 0) return 0;
    const solvedQs = catQs.filter(q => q.solved).length;
    return Math.round((solvedQs / catQs.length) * 100);
  };

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
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Mathematics Practice</h1>
        <p className="text-muted-foreground">Master core mathematical concepts required for advanced computer science.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {categories.map((cat, idx) => {
          const progress = calculateProgress(cat);
          const isActive = activeCategory === cat;
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActiveCategory(cat)}
              data-testid={`card-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className={`cursor-pointer p-5 rounded-2xl border transition-all ${
                isActive
                  ? "bg-cyan-500/10 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                  : "bg-card border-border hover:border-primary/30 hover:bg-muted/30"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className={`font-semibold ${isActive ? "text-cyan-600 dark:text-cyan-400" : "text-foreground"}`}>{cat}</h3>
                <Calculator className={`w-5 h-5 ${isActive ? "text-cyan-500" : "text-muted-foreground"}`} />
              </div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-bold text-foreground">{progress}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${isActive ? "bg-cyan-500" : "bg-muted-foreground/40"}`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <h2 className="text-2xl font-bold mb-6">{activeCategory} Challenges</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={q.id}
              data-testid={`card-math-question-${q.id}`}
              className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between"
            >
              <div className="mb-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-foreground leading-tight">{q.title}</h3>
                  {q.solved && <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 ml-4" />}
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold border ${getDifficultyColor(q.difficulty)}`}>
                    {q.difficulty}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" /> {q.timeEstimate}
                  </div>
                </div>
              </div>

              <Button
                variant={q.solved ? "outline" : "default"}
                data-testid={`button-math-${q.id}`}
                className={`w-full ${!q.solved && "bg-cyan-600 hover:bg-cyan-700 text-white"}`}
              >
                {q.solved ? "Review Solution" : "Start Quiz"}
              </Button>
            </motion.div>
          ))
        ) : (
          <div className="col-span-2 p-12 text-center text-muted-foreground bg-card rounded-2xl border border-border">
            More challenges coming soon to this category.
          </div>
        )}
      </div>
    </motion.div>
  );
}
