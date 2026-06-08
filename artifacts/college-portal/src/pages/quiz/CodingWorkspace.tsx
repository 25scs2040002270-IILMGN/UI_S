import { useState } from "react";
import { useParams, Link } from "wouter";
import { ArrowLeft, Play, Check, ChevronDown, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { codingQuestions } from "@/data/mockData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

export default function CodingWorkspace() {
  const { id } = useParams();
  const { toast } = useToast();
  const [language, setLanguage] = useState("Python");
  const [code, setCode] = useState("def solve():\n    # Write your code here\n    pass\n");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const question = codingQuestions.find(q => q.id === Number(id)) || codingQuestions[0];

  const handleRun = () => {
    setIsRunning(true);
    setOutput("");
    setTimeout(() => {
      setIsRunning(false);
      setOutput("Running test cases...\nTest Case 1: Passed (12ms)\nTest Case 2: Passed (14ms)\nTest Case 3: Passed (15ms)\n\nAll Test Cases Passed!");
    }, 1500);
  };

  const handleSubmit = () => {
    setIsRunning(true);
    setOutput("");
    setTimeout(() => {
      setIsRunning(false);
      setOutput("Submitting code to evaluation server...\nEvaluating 54 hidden test cases...\n\nSuccess! Your solution beat 84% of submissions in runtime.");
      toast({
        title: "Solution Accepted!",
        description: "You've successfully solved " + question.title,
        variant: "default",
      });
    }, 2000);
  };

  const difficultyStyle =
    question.difficulty === 'Easy' ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10' :
    question.difficulty === 'Medium' ? 'text-yellow-600 dark:text-yellow-400 bg-yellow-500/10' :
    'text-rose-600 dark:text-rose-400 bg-rose-500/10';

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col bg-background">
      {/* Top bar */}
      <div className="h-14 border-b border-border flex items-center justify-between px-4 bg-card shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/quiz-arena/coding">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" data-testid="button-back">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="w-px h-6 bg-border"></div>
          <h2 className="font-semibold text-foreground">{question.title}</h2>
          <span className={`px-2 py-0.5 rounded text-xs font-semibold ${difficultyStyle}`}>
            {question.difficulty}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" data-testid="dropdown-language">
                {language} <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
                <DropdownMenuRadioItem value="Python">Python 3</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="JavaScript">JavaScript (Node)</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Java">Java 17</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="C++">C++ 20</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="secondary" size="sm" onClick={handleRun} disabled={isRunning} data-testid="button-run">
            {isRunning ? <Activity className="w-4 h-4 animate-spin mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            Run
          </Button>
          <Button size="sm" onClick={handleSubmit} disabled={isRunning} className="bg-blue-600 hover:bg-blue-700 text-white" data-testid="button-submit">
            <Check className="w-4 h-4 mr-2" /> Submit
          </Button>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Panel: Description & Test Cases */}
        <div className="w-full md:w-1/3 flex flex-col border-r border-border bg-card overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 border-b border-border">
            <h3 className="text-xl font-bold mb-4 text-foreground">{question.title}</h3>
            <div className="text-sm text-foreground/90 space-y-3 leading-relaxed">
              <p>
                Given an array of integers <code className="bg-muted px-1.5 py-0.5 rounded text-primary font-mono text-xs">nums</code> and
                an integer <code className="bg-muted px-1.5 py-0.5 rounded text-primary font-mono text-xs">target</code>, return indices
                of the two numbers such that they add up to <code className="bg-muted px-1.5 py-0.5 rounded text-primary font-mono text-xs">target</code>.
              </p>
              <p>
                You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.
              </p>
              <p>You can return the answer in any order.</p>

              <h4 className="text-foreground font-semibold mt-6 mb-2">Example 1:</h4>
              <pre className="bg-muted p-4 rounded-lg border border-border text-sm font-mono text-foreground/80">
                <code>
                  Input: nums = [2,7,11,15], target = 9{"\n"}
                  Output: [0,1]{"\n"}
                  Explanation: nums[0] + nums[1] == 9
                </code>
              </pre>
            </div>
          </div>
          <div className="h-64 shrink-0 overflow-y-auto p-4 bg-background">
            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">Test Cases</h4>
            <div className="space-y-3">
              <div className="p-3 rounded bg-card border border-border">
                <div className="text-xs text-muted-foreground mb-1">Input:</div>
                <code className="text-sm font-mono text-foreground">nums = [2,7,11,15], target = 9</code>
              </div>
              <div className="p-3 rounded bg-card border border-border">
                <div className="text-xs text-muted-foreground mb-1">Input:</div>
                <code className="text-sm font-mono text-foreground">nums = [3,2,4], target = 6</code>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Editor (always dark — VS Code aesthetic) */}
        <div className="w-full md:w-2/3 flex flex-col overflow-hidden bg-[#1e1e1e]">
          <div className="flex-1 relative">
            <textarea
              className="w-full h-full bg-transparent text-[#d4d4d4] font-mono text-sm p-4 resize-none focus:outline-none focus:ring-0 leading-relaxed"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck="false"
              data-testid="textarea-code-editor"
            />
          </div>
          <div className="h-64 shrink-0 border-t border-[#333333] bg-[#1e1e1e] flex flex-col">
            <div className="h-10 bg-[#252526] flex items-center px-4 border-b border-[#333333]">
              <span className="text-xs text-[#cccccc] font-medium uppercase tracking-wider">Console Output</span>
            </div>
            <div className="flex-1 p-4 overflow-y-auto font-mono text-sm text-[#cccccc] whitespace-pre-wrap" data-testid="div-console-output">
              {output || "Run your code to see the output here."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
