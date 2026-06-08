import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/layout/Navbar";
import { QuizSidebar } from "@/components/layout/QuizSidebar";

import Home from "@/pages/Home";
import Founders from "@/pages/Founders";
import StudentOfTheYear from "@/pages/StudentOfTheYear";
import QuizDashboard from "@/pages/quiz/QuizDashboard";
import CodingQuestions from "@/pages/quiz/CodingQuestions";
import CodingWorkspace from "@/pages/quiz/CodingWorkspace";
import MathQuestions from "@/pages/quiz/MathQuestions";
import Leaderboard from "@/pages/quiz/Leaderboard";
import Certificates from "@/pages/quiz/Certificates";
import Analytics from "@/pages/quiz/Analytics";

const queryClient = new QueryClient();

function QuizArenaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full bg-background min-h-[calc(100vh-4rem)]">
      <QuizSidebar />
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/founders" component={Founders} />
        <Route path="/student-of-the-year" component={StudentOfTheYear} />
        
        {/* Quiz Arena Routes */}
        <Route path="/quiz-arena" render={() => <QuizArenaLayout><QuizDashboard /></QuizArenaLayout>} />
        <Route path="/quiz-arena/coding" render={() => <QuizArenaLayout><CodingQuestions /></QuizArenaLayout>} />
        <Route path="/quiz-arena/coding/:id" render={() => <CodingWorkspace />} /> {/* Full screen workspace, no sidebar */}
        <Route path="/quiz-arena/math" render={() => <QuizArenaLayout><MathQuestions /></QuizArenaLayout>} />
        <Route path="/quiz-arena/leaderboard" render={() => <QuizArenaLayout><Leaderboard /></QuizArenaLayout>} />
        <Route path="/quiz-arena/certificates" render={() => <QuizArenaLayout><Certificates /></QuizArenaLayout>} />
        <Route path="/quiz-arena/analytics" render={() => <QuizArenaLayout><Analytics /></QuizArenaLayout>} />
        
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <div className="min-h-screen bg-background text-foreground font-sans">
              <Navbar />
              <Router />
            </div>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
